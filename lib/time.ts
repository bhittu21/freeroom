import { format, parse, addMinutes, isAfter, isBefore } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

const DHAKA_TZ = 'Asia/Dhaka';

export function getCurrentDhakaDate(): Date {
  // Convert current system time to a Date object representing the time in Dhaka
  // date-fns-tz toDate with timeZone converts a local time representation to the equivalent UTC Date for that timezone.
  // We can just get new Date() and we will do our comparisons in UTC but treating them as Dhaka time, or simply format the current time in Dhaka.
  // Actually, to get the current date-time exactly in Dhaka, we can format new Date() to ISO string in Dhaka TZ, then parse it back as local.
  const dhakaStr = formatInTimeZone(new Date(), DHAKA_TZ, "yyyy-MM-dd'T'HH:mm:ss");
  return new Date(dhakaStr); // This is local representation of the Dhaka time
}

export function getCurrentDhakaDayOfWeek(): string {
  return formatInTimeZone(new Date(), DHAKA_TZ, 'EEEE');
}

export function formatTime(date: Date): string {
  return format(date, 'hh:mm a');
}

export function formatDate(date: Date): string {
  return format(date, 'EEEE, d MMMM yyyy');
}

// Helper to get today's date in YYYY-MM-DD
export function getTodayDhakaDateString(): string {
  return formatInTimeZone(new Date(), DHAKA_TZ, 'yyyy-MM-dd');
}

export function getTomorrowDhakaDateString(): string {
  const tomorrow = addMinutes(getCurrentDhakaDate(), 24 * 60);
  return format(tomorrow, 'yyyy-MM-dd');
}

// Parses "HH:mm" time string (e.g., "09:00", "14:55") into a Date on a specific day
export function parseTimeString(timeStr: string, baseDateStr: string): Date | null {
  try {
    const cleanTime = timeStr.trim();
    // Assuming baseDateStr is "yyyy-MM-dd"
    return parse(`${baseDateStr} ${cleanTime}`, 'yyyy-MM-dd HH:mm', new Date());
  } catch {
    return null;
  }
}

// Calculate overlap logic
export function isOverlapping(
  reqStart: Date,
  reqEnd: Date,
  schedStart: Date,
  schedEnd: Date
): boolean {
  // requestedStart < scheduledEnd AND requestedEnd > scheduledStart
  return isBefore(reqStart, schedEnd) && isAfter(reqEnd, schedStart);
}
