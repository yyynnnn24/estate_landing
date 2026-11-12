import SectionReveal from './SectionReveal';

export default function IntroPartners() {
  return (
    <section className="bg-[#f4efe6] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <SectionReveal>
          <p className="mx-auto mb-10 max-w-[980px] text-center text-[17px] leading-[1.7] text-[#0f2b5b] sm:text-[19px]">
            Join us for a full day of practical talks on divorce, trusts, wills, cross-border probate and estate planning for Muslims — with three MOU signings, a launch, and our joint graduation ceremony
          </p>

          <div className="rounded-[20px] border border-[#dce4ee] bg-white px-5 py-7 shadow-[0_3px_8px_rgba(15,43,91,0.06)] sm:px-8 sm:py-8">
            {/* Presented By */}
            <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0f2b5b]">
              Organized By
            </p>

            <img
              src="/logo.png"
              alt="SmartWills, SmartWills RT Academy, Financial Perspectives, Riverside Trustees and ARLC"
              className="mx-auto h-auto w-full max-w-[980px] object-contain"
            />

            {/* Divider */}
            <div className="mx-auto my-8 h-px max-w-[900px] bg-[#dce4ee]" />

            {/* Presented With */}
            <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0f2b5b]">
              Presented With
            </p>

            <img
              src="/logo2.png"
              alt="Presented With partners"
              className="mx-auto h-auto w-full max-w-[250px] object-contain"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}