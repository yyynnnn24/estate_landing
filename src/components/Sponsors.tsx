import type { ReactNode } from 'react';
import SectionReveal from './SectionReveal';
import {
  goldSponsors,
  mainSponsor,
  sponsorContactEmail,
  supportingSponsors,
  type Sponsor,
} from '@/data/eventData';

function SponsorSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="relative px-2 py-5 sm:px-4 sm:py-7">
      {/* Ribbon heading */}
      <div className="relative flex items-center justify-center gap-3 sm:gap-5">
        <span className="h-px w-8 bg-[#c8a462] sm:w-20" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#c8a462]" />

        <div className="bg-gradient-to-b from-[#2f6db5] to-[#1d4f8f] px-8 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_5px_12px_rgba(15,43,91,0.2)] [clip-path:polygon(0_0,100%_0,calc(100%-16px)_50%,100%_100%,0_100%,16px_50%)] sm:px-10">
          {label}
        </div>

        <span className="h-1.5 w-1.5 rotate-45 bg-[#c8a462]" />
        <span className="h-px w-8 bg-[#c8a462] sm:w-20" />
      </div>

      <div className="relative mx-auto mt-8">
        {children}
      </div>
    </div>
  );
}

function SponsorLogoBox({
  sponsor,
  height = 'h-[200px]',
}: {
  sponsor: Sponsor;
  height?: string;
}) {
  return (
    <div className="rounded-[10px] border-[4px] border-[#c8a462] bg-white p-2 shadow-[0_8px_20px_rgba(15,43,91,0.12)] transition-transform duration-300 hover:-translate-y-1">
      <div className={`flex ${height} items-center justify-center border border-[#c8a462] p-6`}>
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className={`max-h-full max-w-full object-contain ${sponsor.className}`}
        />
      </div>
    </div>
  );
}

function SponsorGrid({
  sponsors,
  columns = 3,
}: {
  sponsors: Sponsor[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`mx-auto grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 ${
        columns === 3
          ? 'md:grid-cols-3'
          : 'md:max-w-[760px] md:grid-cols-2'
      } lg:gap-8`}
    >
      {sponsors.map((sponsor) => (
        <SponsorLogoBox
          key={sponsor.name}
          sponsor={sponsor}
          height={columns === 2 ? 'h-[220px]' : 'h-[200px]'}
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
          <div className="mb-4 flex items-center justify-center">
            <h2 className="font-display text-[3.1rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b5b]">
              Our Sponsors
            </h2>
          </div>

          <p className="mx-auto mb-8 max-w-[600px] text-center text-[11px] font-semibold uppercase leading-[1.8] tracking-[0.18em] text-[#a67a3c]">
            With thanks to the sponsors who share our commitment to raising the standard of estate planning across the industry.
          </p>

          <div className="space-y-5">
            {/* Main Sponsor */}
            <SponsorSection label="Main Sponsor">
              <div className="mx-auto max-w-[500px]">
                <SponsorLogoBox
                  sponsor={mainSponsor}
                  height="h-[220px] sm:h-[250px]"
                />
              </div>
            </SponsorSection>

            {/* Gold Sponsors */}
            <SponsorSection label="Gold Sponsors">
              <SponsorGrid sponsors={goldSponsors} columns={3} />
            </SponsorSection>

            {/* Supporting Sponsors */}
            <SponsorSection label="Supporting Sponsors">
              <SponsorGrid sponsors={supportingSponsors} columns={2} />
            </SponsorSection>
          </div>

          <p className="mt-8 text-center text-[15px] leading-[1.7] text-[#0f2b5b] sm:text-[16px]">
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
