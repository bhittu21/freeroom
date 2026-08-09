'use client';

import { useState, useEffect, useMemo } from 'react';
import { RoomData, RoomWithStatus } from '@/lib/types';
import { checkRoomAvailability, checkCurrentAvailability } from '@/lib/availability';
import { getTodayDhakaDateString, getTomorrowDhakaDateString, getCurrentDhakaDate } from '@/lib/time';
import { format } from 'date-fns';
import RoomCard from './RoomCard';
import { Filter, X } from 'lucide-react';

interface RoomGridProps {
  rooms: RoomData[];
  buildings: string[];
  floors: string[];
}

export default function RoomGrid({ rooms, buildings, floors }: RoomGridProps) {
  const [nowTrigger, setNowTrigger] = useState(0);

  // Filters
  const [building, setBuilding] = useState<string>('All');
  const [floor, setFloor] = useState<string>('All');
  
  const [timeMode, setTimeMode] = useState<'Now' | 'Specific'>('Now');
  const [dateSelection, setDateSelection] = useState<'today' | 'tomorrow' | 'custom'>('today');
  const [customDate, setCustomDate] = useState<string>(''); // YYYY-MM-DD
  const [time, setTime] = useState<string>(''); // HH:mm
  const [duration, setDuration] = useState<number>(60); // minutes

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Initialize defaults on client mount
  useEffect(() => {
    setCustomDate(getTodayDhakaDateString());
    setTime(format(getCurrentDhakaDate(), 'HH:mm'));
  }, []);

  // Timer to refresh "Now" availability every minute
  useEffect(() => {
    if (timeMode !== 'Now') return;
    
    const interval = setInterval(() => {
      setNowTrigger(prev => prev + 1);
    }, 60000); // refresh every minute

    return () => clearInterval(interval);
  }, [timeMode]);

  // Compute available rooms based on filters
  const roomsWithStatus = useMemo(() => {
    // filter by building and floor first
    let filtered = rooms;
    if (building !== 'All') filtered = filtered.filter(r => r.building.code === building);
    if (floor !== 'All') filtered = filtered.filter(r => r.room.floor === floor);

    const effectiveDate = dateSelection === 'today' ? getTodayDhakaDateString() 
                        : dateSelection === 'tomorrow' ? getTomorrowDhakaDateString() 
                        : customDate;

    return filtered.map(r => {
      let availability;
      if (timeMode === 'Now') {
        // use nowTrigger as dependency to force recalculation
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = nowTrigger; 
        availability = checkCurrentAvailability(r);
      } else {
        if (!effectiveDate || !time) {
          availability = { status: 'unknown' as const };
        } else {
          availability = checkRoomAvailability(r, effectiveDate, time, duration);
        }
      }
      return { data: r, availability } as RoomWithStatus;
    }).sort((a, b) => {
      // Sort 'free' rooms first
      if (a.availability.status === 'free' && b.availability.status !== 'free') return -1;
      if (a.availability.status !== 'free' && b.availability.status === 'free') return 1;
      // Secondary sort: alphabetically by room ID
      return a.data.room.id.localeCompare(b.data.room.id);
    });
  }, [rooms, building, floor, timeMode, dateSelection, customDate, time, duration, nowTrigger]);

  const availableCount = roomsWithStatus.filter(r => r.availability.status === 'free').length;

  const activeFiltersCount = 
    (building !== 'All' ? 1 : 0) + 
    (floor !== 'All' ? 1 : 0) + 
    (timeMode !== 'Now' ? 1 : 0);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Mobile filter toggle */}
      <div className="w-full lg:hidden flex flex-col gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-slate-800">
            {availableCount} rooms free
          </div>
        </div>
        
        <button 
          onClick={() => setIsMobileFiltersOpen(true)}
          className={`animated-filter-border flex items-center justify-center gap-2 w-full h-12 text-sm font-semibold text-slate-700 ${isMobileFiltersOpen ? 'animation-paused' : ''}`}
        >
          <Filter className="w-4 h-4 z-10" />
          <span className="z-10">Filter Rooms</span>
          {activeFiltersCount > 0 && (
            <span className="z-10 ml-1 flex items-center justify-center w-5 h-5 bg-slate-900 text-white rounded-full text-[10px] font-bold">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Filters Sidebar */}
      <div className={`
        fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex flex-col p-4 overflow-y-auto transition-transform
        lg:static lg:block lg:w-72 lg:bg-transparent lg:p-0 lg:z-auto lg:translate-y-0 lg:overflow-visible
        ${isMobileFiltersOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}
      `}>
        <div className="bg-white lg:border lg:border-slate-200 lg:shadow-sm rounded-3xl p-6 h-full lg:h-auto lg:sticky lg:top-28">
          
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className="text-xl font-bold tracking-tight">Filters</h2>
            <button 
              onClick={() => setIsMobileFiltersOpen(false)}
              className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden lg:block mb-6">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Search Filters</h2>
          </div>

          <div className="space-y-6">
            {/* Time Mode */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">When</label>
              <div className="flex bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setTimeMode('Now')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${timeMode === 'Now' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Available Now
                </button>
                <button
                  onClick={() => setTimeMode('Specific')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${timeMode === 'Specific' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Future
                </button>
              </div>
            </div>

            {/* Future Controls */}
            {timeMode === 'Specific' && (
              <div className="space-y-4 pt-2 pb-4 border-b border-slate-100">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Date</label>
                  <select 
                    value={dateSelection} 
                    onChange={e => setDateSelection(e.target.value as 'today' | 'tomorrow' | 'custom')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  >
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="custom">Custom Date...</option>
                  </select>
                  {dateSelection === 'custom' && (
                    <input 
                      type="date" 
                      value={customDate}
                      onChange={e => setCustomDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none mt-2"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Time</label>
                  <input 
                    type="time" 
                    value={time} 
                    onChange={e => setTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Duration</label>
                  <select 
                    value={duration} 
                    onChange={e => setDuration(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  >
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={90}>1.5 hours</option>
                    <option value={120}>2 hours</option>
                    <option value={180}>3 hours</option>
                  </select>
                </div>
              </div>
            )}

            {/* Building */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Building</label>
              <select 
                value={building} 
                onChange={e => setBuilding(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none"
              >
                <option value="All">All Buildings</option>
                {buildings.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* Floor */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Floor</label>
              <select 
                value={floor} 
                onChange={e => setFloor(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none"
              >
                <option value="All">All Floors</option>
                {floors.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>

            <button 
              onClick={() => setIsMobileFiltersOpen(false)}
              className="w-full bg-slate-900 text-white rounded-xl px-4 py-3 font-bold mt-4 lg:hidden"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full">
        <div className="hidden lg:flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {timeMode === 'Now' ? 'Available Now' : 'Room Availability'}
          </h1>
          <div className="text-sm font-semibold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
            {availableCount} {availableCount === 1 ? 'room' : 'rooms'} free
          </div>
        </div>

        {roomsWithStatus.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No rooms found</h3>
            <p className="text-slate-500">Try adjusting your filters or selecting a different time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {roomsWithStatus.map(roomStatus => (
              <RoomCard key={roomStatus.data.room.id} roomWithStatus={roomStatus} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
