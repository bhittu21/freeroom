export interface TimeSlot {
  start: string; // e.g., "09:00"
  end: string;   // e.g., "10:05"
}

export interface ScheduleEntry extends TimeSlot {
  status: "free" | "booked" | "unknown";
  department: string | null;
  course_code: string | null;
  course_name: string | null;
  teacher_code: string | null;
  teacher_name: string | null;
  section: string | null;
  raw_text: string | null;
}

export interface DailySchedule {
  [slotId: string]: ScheduleEntry;
}

export interface RoomData {
  building: {
    code: string;
    name: string;
    number: string | null;
  };
  room: {
    id: string;
    number: string;
    floor: string;
  };
  academic_session: string | null;
  time_slots: Record<string, TimeSlot>;
  break?: TimeSlot | null;
  schedule: {
    Sunday?: DailySchedule;
    Monday?: DailySchedule;
    Tuesday?: DailySchedule;
    Wednesday?: DailySchedule;
    Thursday?: DailySchedule;
    Friday?: DailySchedule;
    Saturday?: DailySchedule;
  };
  verification?: {
    status: string;
    unclear_items: string[];
    notes: string[];
  };
}

export type DayOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

// Normalizes availability states
export type RoomStatus = "free" | "booked" | "unknown";

export interface AvailabilityResult {
  status: RoomStatus;
  availableForMinutes?: number; // How long it's available for
  availableUntil?: string; // e.g. "14:00"
  bookedUntil?: string; // e.g. "14:00"
  currentEntry?: ScheduleEntry; // The entry that is currently active if booked
}

export interface RoomWithStatus {
  data: RoomData;
  availability: AvailabilityResult;
}
