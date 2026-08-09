import Link from 'next/link';
import { RoomWithStatus } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Clock, MapPin } from 'lucide-react';

export default function RoomCard({ roomWithStatus }: { roomWithStatus: RoomWithStatus }) {
  const { data, availability } = roomWithStatus;
  const { status, availableForMinutes, availableUntil, bookedUntil } = availability;

  const isFree = status === 'free';
  const isBooked = status === 'booked';
  
  // Format duration nicely
  const formatDuration = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h}h`;
    return `${m}m`;
  };

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 shadow-sm transition-all hover:shadow-md hover:border-slate-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{data.room.id}</h3>
            <div className="flex items-center gap-1.5 mt-1 text-sm font-medium text-slate-500">
              <MapPin className="w-3.5 h-3.5" />
              <span>{data.building.code}, {data.room.floor}</span>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide",
            isFree ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20" : 
            isBooked ? "bg-rose-50 text-rose-700 ring-1 ring-rose-600/20" : 
            "bg-slate-100 text-slate-600 ring-1 ring-slate-400/20"
          )}>
            <div className={cn(
              "w-2 h-2 rounded-full",
              isFree ? "bg-emerald-500" : isBooked ? "bg-rose-500" : "bg-slate-400"
            )} />
            {isFree ? "FREE" : isBooked ? "CLASS ONGOING" : "STATUS UNKNOWN"}
          </div>
        </div>

        {/* Duration Details */}
        <div className="mb-6">
          {isFree && availableForMinutes !== undefined && (
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">
                {availableForMinutes > 1000 ? "Available" : `Available for ${formatDuration(availableForMinutes)}`}
              </span>
              {availableUntil && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Until {availableUntil}</span>
                </div>
              )}
            </div>
          )}

          {isBooked && bookedUntil && (
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">
                Occupied currently
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                <span>Until {bookedUntil}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Link 
        href={`/room/${data.room.id}`}
        className="inline-flex w-full items-center justify-center rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
      >
        View Schedule
      </Link>
    </div>
  );
}
