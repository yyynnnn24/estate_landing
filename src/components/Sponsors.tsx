import type { ReactNode } from 'react';
import SectionReveal from './SectionReveal';
import {
  goldSponsors,
  mainSponsor,
  sponsorContactEmail,
  supportingSponsors,
  type Sponsor,
} from '@/data/eventData';

function SponsorCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-[20px] border border-[#c8a462]/60 bg-white px-6 py-8 shadow-[0_3px_10px_rgba(15,43,91,0.07)] sm:px-10 sm:py-10">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a7430]">
        {label}
      </p>
      {children}
    </div>
  );
}

function SponsorLogos({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
      {sponsors.map((sponsor) => (
        <img
          key={sponsor.name}
          src={sponsor.logo}
          alt={sponsor.name}
          className={`w-auto object-contain ${sponsor.className}`}
        />
      ))}
    </div>
  );
}

export default function Sponsors() {
  return (
    <section className="bg-[#f4efe6] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <SectionReveal>
          <div className="mb-4 flex items-center justify-center gap-5">
            <h2 className="font-display text-[3.1rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b5b]">
              Our Sponsors
            </h2>
            <div/>
          </div>

        <p className="mx-auto mb-3 max-w-[600px] text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a67a3c] leading-[1.8]">
          With thanks to the sponsors who share our commitment to raising the standard of estate planning across the industry.
        </p>

          <div className="space-y-6">
            <SponsorCard label="Main Sponsor">
              <img
                src={mainSponsor.logo}
                alt={mainSponsor.name}
                className={`mx-auto object-contain ${mainSponsor.className}`}
              />
            </SponsorCard>

            <div className="relative overflow-hidden rounded-[24px] bg-[#0f2b5b] px-5 pb-10 pt-14 shadow-[0_12px_30px_rgba(15,43,91,0.25)] sm:px-10 sm:pb-12 sm:pt-16">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,164,98,0.28),transparent_65%)]" />
              <div aria-hidden className="pointer-events-none absolute inset-3 rounded-[18px] border border-[#c8a462]/40" />

              <div className="relative flex items-center justify-center gap-3 sm:gap-5">
                <span className="h-px w-6 bg-[#c8a462] sm:w-16" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#c8a462]" />
                <div className="bg-gradient-to-b from-[#2f6db5] to-[#1d4f8f] px-8 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] [clip-path:polygon(0_0,100%_0,calc(100%-16px)_50%,100%_100%,0_100%,16px_50%)] sm:px-10">
                  Gold Sponsor
                </div>
                <span className="h-1.5 w-1.5 rotate-45 bg-[#c8a462]" />
                <span className="h-px w-6 bg-[#c8a462] sm:w-16" />
              </div>

              <div className="relative mx-auto mt-10 grid max-w-[360px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                {goldSponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="rounded-[10px] border-[5px] border-[#c8a462] bg-white p-2 shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex h-[200px] items-center justify-center border border-[#c8a462] p-6 md:h-[180px] lg:h-[220px]">
                      <img src={sponsor.logo} alt={sponsor.name} className={sponsor.className} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SponsorCard label="Supporting Sponsors">
              <SponsorLogos sponsors={supportingSponsors} />
            </SponsorCard>
          </div>

          <p className="mt-10 text-center text-[15px] leading-[1.7] text-[#0f2b5b] sm:text-[16px]">
            Sponsorship opportunities remain open. Interested organisations, please contact{' '}
            <a
              href={`mailto:${sponsorContactEmail}`}
              className="font-semibold text-[#0f2b5b] underline decoration-[#c8a462] underline-offset-4 transition-colors hover:text-[#9a7430] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a462]"
            >
              {sponsorContactEmail}
            </a>{' '}
            (Attention: Fiona).
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
