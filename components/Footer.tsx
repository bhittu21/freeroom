import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="font-bold text-xl text-slate-900 tracking-tight mb-2">
            FreeRoom
          </Link>
          <p className="text-sm text-slate-500 max-w-sm mb-4">
            Open-source classroom availability system for Leading University students.
          </p>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Open Source</span>
            <span>&bull;</span>
            <span>Student Project</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              About
            </Link>
            <a 
              href="https://github.com/bhittu21/freeroom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-900 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
          <div className="text-sm text-slate-400">
            &copy; 2026 FreeRoom
          </div>
        </div>
      </div>
    </footer>
  );
}
