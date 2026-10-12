import SectionReveal from './SectionReveal';
import { agenda } from '@/data/eventData';

export default function Programme() {
  return (
    <section id="programme" className="bg-[#f4efe6] py-20">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-5 lg:px-6">
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
            <div className="overflow-hidden rounded-[18px] border border-[#d3cbbd] bg-[#f8f4ee] shadow-[0_10px_20px_rgba(14,34,71,0.04)]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#0f2b5b] text-[#d9a642]">
                    <th scope="col" className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] sm:w-[200px]">
                      Time
                    </th>
                    <th scope="col" className="px-4 py-4 text-[12px] font-semibold uppercase tracking-[0.12em]">
                      Session
                    </th>
                    <th scope="col" className="px-4 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] sm:w-[170px]">
                      Speaker
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {agenda.map((item, idx) => {
                    const topBorder = idx !== 0 ? 'border-t border-[#e4dcc9]' : '';

                    return (
                      <tr key={idx} className={`${topBorder} ${idx % 2 === 0 ? 'bg-[#f1ece3]' : 'bg-[#f9f5ef]'}`}>
                        <td className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f2b5b] sm:w-[200px]">
                          {item.time}
                        </td>
                        <td className="px-4 py-4 text-[15px] text-[#1c375d]">
                          <span className={item.isBold ? 'font-bold' : ''}>{item.session}</span>
                        </td>
                        <td className="w-[170px] px-4 py-4 text-[13px] font-medium text-[#9d793f]">
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
