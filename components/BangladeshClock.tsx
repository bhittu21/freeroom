'use client';

import { useEffect, useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

const DHAKA_TZ = 'Asia/Dhaka';

export default function BangladeshClock() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // Return a placeholder of similar width/height to avoid layout shift
    return (
      <div className="flex flex-col items-end opacity-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bangladesh Time</span>
        <span className="text-lg font-bold tabular-nums">00:00:00 PM</span>
        <span className="text-xs text-muted-foreground">Sunday, 1 January 2000</span>
      </div>
    );
  }

  const timeStr = formatInTimeZone(now, DHAKA_TZ, 'hh:mm:ss a');
  const dateStr = formatInTimeZone(now, DHAKA_TZ, 'EEEE, d MMMM yyyy');

  return (
    <div className="flex flex-col items-end text-right">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">Bangladesh Time</span>
      <span className="text-base sm:text-lg font-extrabold tabular-nums text-slate-900">{timeStr}</span>
      <span className="text-[10px] sm:text-xs font-medium text-slate-500">{dateStr}</span>
    </div>
  );
}
