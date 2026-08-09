import Header from '@/components/Header';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const metadata = {
  title: 'About FreeRoom | Leading University',
  description: 'FreeRoom is an open-source classroom availability system built by Leading University students to help students find available classrooms between classes.',
};

export default function AboutPage() {
  return (
    <div className="flex-1 w-full bg-slate-50 font-sans text-slate-900 pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Section 1: Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wide border border-slate-200 mb-6">
            Open Source &bull; Leading University &bull; Student Project
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            About FreeRoom
          </h1>
          <p className="text-xl font-medium text-slate-500 mb-6">
            Built by students, for students.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            FreeRoom is an open-source classroom availability system built specifically for Leading University students.
            When students have gaps between classes, FreeRoom helps them quickly find classrooms that are scheduled to be free instead of struggling to find a comfortable place to sit.
          </p>
        </section>

        {/* Section 2: Why FreeRoom */}
        <section className="mb-16 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
            Why FreeRoom?
          </h2>
          <div className="text-slate-600 space-y-4 leading-relaxed">
            <p>
              Students often have gaps between classes, while the library may not have enough seats for everyone. 
              FreeRoom provides a simple way to check which classrooms are scheduled to be available at a particular time.
            </p>
            <p>
              The system uses room-wise university schedules to calculate availability for:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4 ml-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Right now</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> A specific time</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> The next hour</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Tomorrow</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> A custom date</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> A selected time range</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Open Source */}
        <section className="mb-16">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-sm text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Open Source</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              FreeRoom is an open-source project created for the Leading University student community. 
              Students and developers are welcome to contribute, suggest improvements, report issues, and help make the system more useful.
            </p>
            <a 
              href="https://github.com/bhittu21/freeroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold transition-colors hover:bg-slate-100"
            >
              <GithubIcon className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
          <p className="text-sm text-slate-500 text-center mt-6 max-w-2xl mx-auto">
            FreeRoom is not an official Leading University system. Schedule information may change, so verify important information with the original schedule sources.
          </p>
        </section>

        {/* Section 4 & 5: Developers */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Meet the Developers</h2>
            <p className="text-slate-500 font-medium">Built by students of 65D, Leading University.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Developer 1 */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">Sheikh Abir Ali</h3>
                <p className="text-sm font-semibold text-blue-600 mt-1">Automation Engineer & WordPress Developer</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                Sheikh Abir Ali works across automation, web development, SEO, WordPress, Chrome extensions, and business systems. He focuses on building practical digital solutions, workflow automation, and technology that solves real-world problems.
                <br /><br />
                He is also the Co-Founder of Tresify Lab and is interested in developing useful systems through automation and modern web technologies.
              </p>
              <a 
                href="https://www.linkedin.com/in/sheikhabirali/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Developer 2 */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">Thouhid Azim Munna</h3>
                <p className="text-sm font-semibold text-blue-600 mt-1">Tech & AI Enthusiast</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                Thouhid Azim Munna is a technology enthusiast driven by curiosity, critical thinking, and continuous learning. His interests include programming, AI, IT, psychology, philosophy, nature, and the way technological and human systems interact.
                <br /><br />
                He is currently focused on developing skills in AI and competitive programming, while exploring opportunities for research, collaboration, and practical technology projects.
              </p>
              <a 
                href="https://www.linkedin.com/in/thouhid-azim-b326a9323/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Built By simple banner */}
        <section className="mb-16 bg-slate-50 border border-slate-200 p-8 rounded-3xl text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Built by</p>
          <p className="text-lg font-bold text-slate-900 mb-1">Sheikh Abir Ali & Thouhid Azim Munna</p>
          <p className="text-slate-500">Students of 65D <br className="md:hidden" /> Leading University</p>
        </section>

        {/* Section 6: Contribution */}
        <section className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Want to contribute?</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            FreeRoom is open source. If you have an idea, find an issue, want to improve the system, or simply want to help make FreeRoom more useful for Leading University students, contributions are welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://github.com/bhittu21/freeroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center flex-1 gap-2 bg-slate-900 text-white px-4 py-3 rounded-xl font-semibold transition-colors hover:bg-slate-800"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Repository
            </a>
            <a 
              href="https://www.linkedin.com/in/sheikhabirali/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center flex-1 gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 rounded-xl font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Contact Sheikh Abir
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thouhid-azim-b326a9323/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center flex-1 gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 rounded-xl font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Contact Thouhid
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
