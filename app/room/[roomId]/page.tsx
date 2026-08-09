import { getRoomById, getAllRooms } from '@/lib/rooms';
import Header from '@/components/Header';
import ScheduleView from '@/components/ScheduleView';
import { notFound } from 'next/navigation';
import { MapPin, Info, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const rooms = getAllRooms();
  return rooms.map((room) => ({
    roomId: room.room.id,
  }));
}

export default async function RoomPage({ params }: { params: Promise<{ roomId: string }> }) {
  // Decode the URL param in case it has special characters
  const resolvedParams = await params;
  const decodedId = decodeURIComponent(resolvedParams.roomId);
  const room = getRoomById(decodedId);

  if (!room) {
    notFound();
  }

  // The Google Drive folder containing the verified source JSON schedules
  const sourceUrl = "https://drive.google.com/drive/folders/1tKrjYi5o5Eh_atFwKxGb0s0sTE7E4oOk?usp=sharing";

  return (
    <div className="flex-1 w-full bg-slate-50 font-sans text-slate-900 pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to all rooms
        </Link>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
                {room.room.id}
              </h1>
              <div className="flex items-center gap-2 text-lg font-medium text-slate-500">
                <MapPin className="w-5 h-5" />
                <span>{room.building.name} ({room.building.code}), {room.room.floor}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-start md:items-end">
              {room.academic_session && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wide border border-slate-200">
                  {room.academic_session}
                </div>
              )}
              {sourceUrl ? (
                <a href={sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  View Original Schedule
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-sm font-medium text-slate-400">Source link unavailable</span>
              )}
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-start gap-3 text-sm text-slate-500 bg-slate-100 rounded-2xl p-4">
          <Info className="w-5 h-5 flex-shrink-0 text-slate-400" />
          <p>
            This schedule is based on the verified timetable. 
            Availability calculated across the app depends on the accuracy of this data.
          </p>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">Weekly Schedule</h2>
        
        <ScheduleView room={room} />

      </main>
    </div>
  );
}
