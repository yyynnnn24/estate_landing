
import { CalendarDays } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { agenda } from '@/data/eventData';

export default function Programme() {
  return (
    <section id="programme" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs tracking-widest uppercase mb-3">
              <CalendarDays size={14} />
              <span>Full-Day Programme</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
              Agenda for 27 November 2026
            </h2>

            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
          </div>
        </SectionReveal>

        <SectionReveal>
          {/* Table — horizontally scrollable on mobile */}
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-navy-100">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="bg-navy-500">
                  <th className="px-6 py-4 text-gold-400 font-semibold text-sm tracking-wider uppercase whitespace-nowrap">
                    Time
                  </th>
                  <th className="px-6 py-4 text-gold-400 font-semibold text-sm tracking-wider uppercase">
                    Session
                  </th>
                  <th className="px-6 py-4 text-gold-400 font-semibold text-sm tracking-wider uppercase whitespace-nowrap">
                    Speaker
                  </th>
                </tr>
              </thead>

              <tbody>
                {agenda.map((item, idx) => {
                  const isBreak = item.speaker === '—';

                  return (
                    <tr
                      key={idx}
                      className={`border-t border-navy-50 transition-colors duration-200 hover:bg-gold-50/50 ${
                        isBreak ? 'bg-navy-50/30' : 'bg-white'
                      } ${
                        idx % 2 === 0 && !isBreak
                          ? 'bg-bg-base/40'
                          : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-navy-500 font-semibold text-sm whitespace-nowrap">
                        {item.time}
                      </td>

                      
                      <td className="px-6 py-4 text-navy-700 text-sm">
                        <span
                          className={
                            item.isBold
                              ? 'font-bold'
                              : isBreak
                                ? 'text-navy-400 italic'
                                : ''
                          }
                        >
                          {item.session}
                        </span>
                      </td>


                      <td className="px-6 py-4 text-gold-700 text-sm font-medium">
                        {item.speaker}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
