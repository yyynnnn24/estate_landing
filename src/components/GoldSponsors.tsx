const goldSponsors = [
  {
    name: 'Riverside Planning Services',
    logo: '/sponsors/gold-riverside-planning.png',
  },
  {
    name: 'Financial Perspectives',
    logo: '/sponsors/gold-financial-perspectives.png',
  },
  {
    name: 'GoalsMapper',
    logo: '/sponsors/gold-goalsmapper.png',
  },
];

function GoldRule() {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#c8a462] sm:w-16" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[#c8a462]" />
    </div>
  );
}

export default function GoldSponsors() {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-[#0f2b5b] px-5 pb-10 pt-14 shadow-[0_12px_30px_rgba(15,43,91,0.25)] sm:px-10 sm:pb-12 sm:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-3 rounded-[18px] border border-[#c8a462]/40" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#c8a462] to-transparent" />

      <div className="relative flex items-center justify-center gap-4 sm:gap-5">
        <GoldRule />
        <div className="relative bg-gradient-to-b from-[#94702f] to-[#7a5a24] px-10 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_14px_rgba(0,0,0,0.3)] [clip-path:polygon(0_0,100%_0,calc(100%-16px)_50%,100%_100%,0_100%,16px_50%)]">
          Gold Sponsor
        </div>
        <div className="rotate-180">
          <GoldRule />
        </div>
      </div>

      <div className="relative mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:snap-none sm:justify-center sm:gap-8 sm:overflow-visible">
        {goldSponsors.map((sponsor) => (
          <figure key={sponsor.name} className="flex shrink-0 snap-center flex-col items-center gap-4">
            <div className="flex h-[160px] w-[220px] items-center justify-center rounded-[12px] border border-[#c8a462] bg-[#fbf8f2] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.25)] sm:h-[200px] sm:w-[280px] sm:p-6">
              <img src={sponsor.logo} alt={sponsor.name} className="h-full w-full object-contain" />
            </div>
            <figcaption className="max-w-[220px] text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8d3a0]">
              {sponsor.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
