
import { eventInfo } from '@/data/eventData';

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#091a33] px-4 py-8 text-center text-[#f5f0e7] sm:py-10">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-16 -z-10 h-44 w-72 rotate-[-28deg] rounded-[50%] border border-[#d3ad5f]/40" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-12 -z-10 h-44 w-72 rotate-[-28deg] rounded-[50%] border border-[#d3ad5f]/20" />
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-3 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-[2px] w-14 bg-[#d3ad5f]" />
          <span className="h-4 w-4 rotate-45 bg-gradient-to-br from-[#f8e5a7] to-[#c38c38]" />
          <span className="h-[2px] w-14 bg-[#d3ad5f]" />
        </div>
        <h2 className="font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.03em] text-[#f5f0e7] sm:text-[2.8rem] lg:text-[3.4rem]">
          We look forward to seeing you
        </h2>
        <p className="mt-4 font-display text-[1.3rem] tracking-[0.18em] text-[#e0bd78] sm:text-[1.7rem] sm:tracking-[0.22em]">
          {eventInfo.date}
        </p>
        <p className="mt-1 text-[0.75rem] uppercase tracking-[0.12em] text-[#d7d5d1] sm:text-sm sm:tracking-[0.16em]">
          {eventInfo.time} · {eventInfo.venue}
        </p>
        <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-[#d3ad5f] to-transparent" aria-hidden="true" />
      </div>
    </footer>
  );
}
