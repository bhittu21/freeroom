import Link from 'next/link';
import { 
  Sparkles, 
  CalendarSync, 
  BellRing, 
  CalendarX2, 
  ClockAlert, 
  Zap, 
  TrendingUp, 
  Eye, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function MaintenanceView() {
  const plannedCapabilities = [
    {
      title: 'Frequent routine updates',
      description: 'Synchronizing timetable modifications on an ongoing schedule to reflect current university adjustments.',
      icon: CalendarSync,
    },
    {
      title: 'Instant makeup-class announcements',
      description: 'Quick visibility into rescheduled sessions and temporary room reservations as soon as they happen.',
      icon: BellRing,
    },
    {
      title: 'Class cancellation updates',
      description: 'Prompt detection of cancelled classes, immediately releasing booked rooms back into available status.',
      icon: CalendarX2,
    },
    {
      title: 'Better handling of last-minute schedule changes',
      description: 'Adaptive scheduling logic built to accommodate swift notices and unannounced room swaps reliably.',
      icon: ClockAlert,
    },
    {
      title: 'A more reliable and streamlined experience',
      description: 'A fortified, industry-standard infrastructure engineered for high speed, stability, and zero downtime.',
      icon: Zap,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* Hero Announcement Section */}
      <section className="text-center pt-4 sm:pt-8">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-800 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          FREE ROOM — SYSTEM UPGRADE IN PROGRESS
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
          FreeRoom Is Getting a Major Upgrade.
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4 text-balance">
          We’re temporarily updating FreeRoom with the latest routines and working on a more powerful, industry-level system.
        </p>

        {/* Additional Explanation */}
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
          Our goal is to build a smarter, more reliable platform that can handle frequent routine changes, instant makeup classes, class cancellations, and other last-minute updates more efficiently.
        </p>
      </section>

      {/* Community Appreciation & Milestones Section */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl mx-auto">
          {/* Header & Milestone Quote */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              <Sparkles className="w-4 h-4" />
              Community Milestones
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
              “Thanks a lot for your support, we have got more than 20k+ Events and 45k+ views just after launch”
            </h2>
          </div>

          {/* Milestone Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-slate-300 transition-colors">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 mb-3 border border-blue-100">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                20K+
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                Events
              </div>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-slate-300 transition-colors">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 mb-3 border border-blue-100">
                <Eye className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                45K+
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                Views
              </div>
            </div>
          </div>

          {/* Appreciation Narrative */}
          <div className="text-center space-y-2 border-t border-slate-100 pt-6">
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              These milestones wouldn’t have been possible without your continuous support and the way you’ve shared our system with fellow students.
            </p>
            <p className="text-sm sm:text-base text-slate-500">
              We’re truly grateful to everyone who has used, shared, and supported FreeRoom.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Upgrade Section: "Building What Comes Next" */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Building What Comes Next
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              We’re working to make FreeRoom smarter, more reliable, and better equipped to handle changing university schedules.
            </p>
          </div>

          {/* Planned capabilities list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plannedCapabilities.map((item, index) => {
              const Icon = item.icon;
              const isLastSpan = index === plannedCapabilities.length - 1 && plannedCapabilities.length % 2 !== 0;
              return (
                <div 
                  key={item.title}
                  className={`bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 flex items-start gap-4 hover:border-slate-300 transition-colors ${
                    isLastSpan ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-600">
                        Planned
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Section & GitHub Button */}
      <section className="text-center bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              We’re coming back soon with a bigger and better FreeRoom. Stay tuned!
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Track development progress, inspect routines, or contribute directly to our open-source codebase on GitHub.
            </p>
          </div>

          {/* GitHub Repository Button */}
          <div className="pt-2">
            <a
              href="https://github.com/bhittu21/freeroom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore FreeRoom on GitHub"
              className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 hover:bg-slate-100 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-800 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </div>
              <span>Explore FreeRoom on GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
