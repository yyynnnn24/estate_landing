import { Clock3, FileText, UserRound } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { agenda } from '@/data/eventData';

export default function Programme() {
  return (
    <section id="programme" className="bg-[#f4efe6] py-20">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-5 lg:px-6">
        <SectionReveal>
          <div className="mb-8 text-center">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a67a3c]">
              Event Programme
            </div>
            <h2 className="font-display text-[3.1rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b5b]">
              Forum Agenda
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="overflow-x-auto rounded-[20px] border border-[#cdbb98] bg-[#f8f4ec] p-1 shadow-[0_10px_24px_rgba(14,34,71,0.07)]">
            <table className="w-full min-w-[680px] border-separate border-spacing-0 text-left">
              <thead>
                <tr className="bg-[#102747] text-[#d5ad68]">
                  <th scope="col" className="rounded-tl-[15px] px-5 py-4 text-[11px] font-medium uppercase tracking-[0.2em] sm:w-[205px]">
                    <span className="flex items-center gap-3"><Clock3 aria-hidden="true" className="h-4 w-4" />Time</span>
                  </th>
                  <th scope="col" className="px-4 py-4 text-[11px] font-medium uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-3"><FileText aria-hidden="true" className="h-4 w-4" />Session</span>
                  </th>
                  <th scope="col" className="rounded-tr-[15px] px-4 py-4 text-[11px] font-medium uppercase tracking-[0.2em] sm:w-[175px]">
                    <span className="flex items-center gap-3"><UserRound aria-hidden="true" className="h-4 w-4" />Speaker</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {agenda.map((item, idx) => {
                  const rowColor = item.isBold
                    ? 'bg-[#f1e5cd]'
                    : idx % 2 === 0
                      ? 'bg-[#f1ece3]'
                      : 'bg-[#faf7f1]';

                  return (
                    <tr key={idx} className={`${rowColor} transition-colors hover:bg-[#e9e2d5]`}>
                      <td className="border-t border-[#e2d8c7] px-4 py-2.5 sm:px-5">
                        <span className="inline-flex min-w-[142px] justify-center rounded-full bg-[#183858] px-3 py-1.5 text-[10px] font-medium tracking-[0.04em] text-[#f7f3eb] sm:text-[11px]">
                          {item.time}
                        </span>
                      </td>
                      <td className="border-t border-[#e2d8c7] px-4 py-3 text-[13px] leading-relaxed text-[#29435e] sm:text-[14px]">
                        <span className={`inline-flex items-start gap-2 ${item.isBold ? 'font-medium' : 'font-normal'}`}>
                          {item.isBold && (
                            <span
                              aria-hidden="true"
                              className="mt-[0.48em] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#c83c31]"
                            />
                          )}
                          <span>{item.session}</span>
                        </span>
                      </td>
                      <td className="border-t border-[#e2d8c7] px-4 py-3 text-[12px] font-normal text-[#8c7044] sm:text-[13px]">
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
