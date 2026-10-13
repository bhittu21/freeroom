import type { Metadata } from 'next';
import { getAllRooms, getAvailableBuildingsAndFloors } from '@/lib/rooms';
import RoomGrid from '@/components/RoomGrid';
import Header from '@/components/Header';
import MaintenanceView from '@/components/MaintenanceView';
import { Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FreeRoom — Major Upgrade in Progress',
  description: 'We’re temporarily updating FreeRoom with the latest routines and working on a more powerful, industry-level system.',
};

export const revalidate = 60;

/**
 * MAINTENANCE MODE TOGGLE:
 * Set to `true` to display the temporary system upgrade & maintenance landing page.
 * Set to `false` to instantly restore the full FreeRoom classroom-finding interface.
 */
const MAINTENANCE_MODE = true;

export default function Home() {
  if (MAINTENANCE_MODE) {
    return (
      <div className="flex-1 w-full bg-slate-50 font-sans text-slate-900 pb-20">
        <Header maintenance={true} />
        
        <main className="container mx-auto px-4 py-8 sm:py-12">
          <MaintenanceView />
        </main>
      </div>
    );
  }

  // Original room-finding interface (restored when MAINTENANCE_MODE is set to false)
  const rooms = getAllRooms();
  const { buildings, floors } = getAvailableBuildingsAndFloors();

  return (
    <div className="flex-1 w-full bg-slate-50 font-sans text-slate-900 pb-20">
      <Header maintenance={false} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Info Banner */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold mb-1">How availability works</p>
            <p>Availability is calculated from the room schedules stored in this system. <strong>FREE</strong> means no scheduled class was found for the selected period. <strong>CLASS ONGOING</strong> means a class is scheduled. Schedule information may change. Verify with the original schedule when necessary.</p>
          </div>
        </div>

        <RoomGrid rooms={rooms} buildings={buildings} floors={floors} />
      </main>
    </div>
  );
}
