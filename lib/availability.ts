import { RoomData, AvailabilityResult, ScheduleEntry, DayOfWeek } from './types';
import { parseTimeString, isOverlapping, getCurrentDhakaDate, getTodayDhakaDateString } from './time';
import { addMinutes, format, isBefore, isAfter, isEqual, differenceInMinutes } from 'date-fns';

const DAYS_OF_WEEK: DayOfWeek[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/**
 * Calculates availability for a given room and time range.
 */
export function checkRoomAvailability(
  room: RoomData,
  dateStr: string, // "yyyy-MM-dd"
  reqStartTimeStr: string, // "HH:mm"
  durationMinutes: number
): AvailabilityResult {
  const reqStart = parseTimeString(reqStartTimeStr, dateStr);
  if (!reqStart) return { status: 'unknown' };

  const reqEnd = addMinutes(reqStart, durationMinutes);

  // Convert requested date to day of week
  // dateStr is 'yyyy-MM-dd' which parses to local date.
  const reqDate = new Date(dateStr + "T00:00:00");
  const dayOfWeekIndex = reqDate.getDay();
  const dayOfWeek = DAYS_OF_WEEK[dayOfWeekIndex];

  const scheduleForDay = room.schedule[dayOfWeek];
  
  if (!scheduleForDay) {
    // If no schedule exists for this day, assume it's free.
    return { status: 'free', availableForMinutes: durationMinutes };
  }

  // Iterate over slots and check for overlaps
  let isBooked = false;
  let overlappingEntry: ScheduleEntry | undefined;

  for (const slotKey of Object.keys(scheduleForDay)) {
    const entry = scheduleForDay[slotKey];
    if (entry.status !== 'booked') continue; // Only care about booked slots

    const schedStart = parseTimeString(entry.start, dateStr);
    const schedEnd = parseTimeString(entry.end, dateStr);

    if (schedStart && schedEnd) {
      if (isOverlapping(reqStart, reqEnd, schedStart, schedEnd)) {
        isBooked = true;
        overlappingEntry = entry;
        break;
      }
    }
  }

  if (isBooked) {
    return {
      status: 'booked',
      currentEntry: overlappingEntry,
      bookedUntil: overlappingEntry?.end
    };
  }

  // If we are here, it's free for the requested duration.
  // We can also calculate how long it stays free *after* the requested start until the next class.
  let nextBookedStart: Date | null = null;

  for (const slotKey of Object.keys(scheduleForDay)) {
    const entry = scheduleForDay[slotKey];
    if (entry.status !== 'booked') continue;

    const schedStart = parseTimeString(entry.start, dateStr);
    if (schedStart && (isAfter(schedStart, reqStart) || isEqual(schedStart, reqStart))) {
      if (!nextBookedStart || isBefore(schedStart, nextBookedStart)) {
        nextBookedStart = schedStart;
      }
    }
  }

  if (nextBookedStart) {
    const totalFreeMinutes = differenceInMinutes(nextBookedStart, reqStart);
    return {
      status: 'free',
      availableForMinutes: totalFreeMinutes,
      availableUntil: format(nextBookedStart, 'HH:mm')
    };
  }

  // Free for the rest of the day
  return { status: 'free', availableForMinutes: 9999 }; // Arbitrarily large number
}

/**
 * Checks the current live availability.
 */
export function checkCurrentAvailability(room: RoomData): AvailabilityResult {
  const currentDhaka = getCurrentDhakaDate();
  const dateStr = getTodayDhakaDateString();
  const timeStr = format(currentDhaka, 'HH:mm');
  // Check for the next 1 minute just to see current status
  return checkRoomAvailability(room, dateStr, timeStr, 1);
}
