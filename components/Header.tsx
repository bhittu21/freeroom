import Link from 'next/link';
import Image from 'next/image';
import BangladeshClock from './BangladeshClock';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center w-10 h-10 overflow-hidden">
            <Image src="/logo.png" alt="Leading University Logo" width={32} height={32} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-slate-900 tracking-tight">FreeRoom</span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mt-1">Leading University</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">Rooms</Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          </nav>
          
          <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
          
          <BangladeshClock />
        </div>
      </div>
    </header>
  );
}
