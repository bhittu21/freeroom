'use client';

import { useState } from 'react';
import { RoomData, DayOfWeek, ScheduleEntry } from '@/lib/types';
import { getScheduleEntryStatus } from '@/lib/availability';
import { cn } from '@/lib/utils';
import { getCurrentDhakaDayOfWeek } from '@/lib/time';

const DAYS: DayOfWeek[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function ScheduleView({ room }: { room: RoomData }) {
  const currentDay = getCurrentDhakaDayOfWeek() as DayOfWeek;
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(currentDay);

  const scheduleForDay = room.schedule[selectedDay];

  // We need to sort the slots chronologically based on their start time.
  const slots: ScheduleEntry[] = [];
  if (scheduleForDay) {
    for (const key of Object.keys(scheduleForDay)) {
      slots.push(scheduleForDay[key]);
    }
    slots.sort((a, b) => a.start.localeCompare(b.start));
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Day Selector */}
      <div className="flex overflow-x-auto border-b border-slate-100 hide-scrollbar">
        {DAYS.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={cn(
              "px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors",
              selectedDay === day 
                ? "text-slate-900 border-b-2 border-slate-900 bg-slate-50/50" 
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            )}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div className="p-0">
        {slots.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm font-medium">
            No schedule data available for {selectedDay}.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {slots.map((slot, index) => {
              const actualStatus = getScheduleEntryStatus(slot);
              const isFree = actualStatus === 'free';
              const isPossiblyFree = actualStatus === 'possibly_free';
              
              return (
                <div key={index} className="flex flex-col sm:flex-row p-4 sm:p-5 gap-4 sm:gap-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex-shrink-0 w-32 font-bold text-slate-700 tabular-nums">
                    {slot.start} &ndash; {slot.end}
                  </div>
                  
                  <div className="flex-1">
                    {isFree ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide">
                        FREE
                      </div>
                    ) : isPossiblyFree ? (
                      <div className="flex flex-col gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold tracking-wide w-fit">
                          POSSIBLY FREE
                        </div>
                        <div className="text-sm font-medium text-amber-800/80 leading-snug">
                          This room is marked as allocated/reserved in the schedule, but no specific lecture or course information is listed.
                        </div>
                        {slot.department && (
                          <div className="text-sm text-slate-500">
                            Dept: {slot.department}
                          </div>
                        )}
                        {!slot.department && slot.raw_text && (
                          <div className="text-sm text-slate-500 whitespace-pre-wrap">
                            {slot.raw_text}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide w-fit">
                          CLASS ONGOING
                        </div>
                        {slot.course_code && (
                          <div className="text-sm">
                            <span className="font-semibold text-slate-900">{slot.course_code}</span>
                            {slot.course_name && <span className="text-slate-600"> - {slot.course_name}</span>}
                          </div>
                        )}
                        {(slot.teacher_name || slot.teacher_code) && (
                          <div className="text-sm text-slate-600">
                            Teacher: <span className="font-medium text-slate-800">{slot.teacher_name || slot.teacher_code}</span>
                          </div>
                        )}
                        {slot.department && (
                          <div className="text-sm text-slate-500">
                            Dept: {slot.department}
                          </div>
                        )}
                        {/* Fallback to raw text if it's booked but other fields are missing */}
                        {!slot.course_code && !slot.teacher_name && !slot.teacher_code && slot.raw_text && (
                          <div className="text-sm text-slate-500 whitespace-pre-wrap">
                            {slot.raw_text}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
