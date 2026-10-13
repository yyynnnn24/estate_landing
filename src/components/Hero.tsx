import { Calendar, Clock, MapPin } from 'lucide-react';
import { eventInfo, heroImage } from '@/data/eventData';

export default function Hero() {
  return (
    <section id="top" className="relative bg-[#f4efe6] pb-4">
      <div className="mx-auto max-w-[1120px] px-4 pt-5 sm:px-5 lg:px-6">
        <div className="relative overflow-hidden rounded-[30px] border border-[#d7c9a5] bg-[#d7d0c3] shadow-[0_12px_30px_rgba(16,34,64,0.12)]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(231,225,215,0.9)_0%,rgba(231,225,215,0.84)_38%,rgba(231,225,215,0.62)_58%,rgba(17,34,71,0.12)_100%)]" />

          <div className="relative z-10 min-h-[440px] px-5 py-6 sm:min-h-[500px] sm:px-7 lg:min-h-[540px] lg:px-10">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0f2b5b] sm:text-[11px] lg:text-[12px]">
              <span>{eventInfo.date}</span>
              <span className="text-[#0f2b5b]/70">•</span>
              <span>{eventInfo.venue}</span>
            </div>

            <h1 className="font-display text-[3rem] leading-[0.84] tracking-[-0.06em] text-[#0f2b5b] sm:text-[4.5rem] lg:text-[6.2rem]">
              Singapore Estate
              <span className="block text-[#0f2b5b]">Planning Forum 2026</span>
            </h1>

            <div className="mt-4 max-w-[760px] text-[1rem] font-medium leading-[1.3] text-[#1c3d5d] sm:text-[1.3rem] lg:text-[1.6rem]">
              Featuring the Launch of <span className="text-[#2f6863]">SmartWills Wasiatku Singapore</span>
            </div>

            <div className="mt-3 max-w-[760px] text-[0.95rem] leading-[1.35] text-[#123a64] sm:text-[1.15rem] lg:text-[1.35rem]">
              <span className="inline-block">SmartWills RT Academy</span>
              <span className="mx-3 text-[#123a64]/60">•</span>
              <span className="inline-block">Graduation Ceremony for Riverside Training and Financial Perspectives</span>
            </div>

            <div className="mt-2 max-w-[760px] text-[0.95rem] leading-[1.35] text-[#123a64] sm:text-[1.15rem] lg:text-[1.35rem]">
              Practical perspectives on family, property and legacy.
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center rounded-full bg-[#0f2b5b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(15,43,91,0.25)] transition-opacity hover:opacity-90 sm:px-6 sm:text-[12px]"
              >
                Register for the Forum <span aria-hidden="true">→</span>
              </a>
              <a
                href="#programme"
                className="inline-flex items-center justify-center rounded-full border border-[#0f2b5b]/40 bg-[#f7f3ee]/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0f2b5b] transition-opacity hover:opacity-80 sm:px-6 sm:text-[12px]"
              >
                Explore Programme
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-[#123a64] sm:gap-8 sm:text-[1rem] lg:text-[1.15rem]">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#123a64]/30 bg-[#f5efe6]/80">
                  <Calendar className="h-4 w-4" />
                </span>
                <span>{eventInfo.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#123a64]/30 bg-[#f5efe6]/80">
                  <Clock className="h-4 w-4" />
                </span>
                <span>{eventInfo.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#123a64]/30 bg-[#f5efe6]/80">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>{eventInfo.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { Calendar, MapPin, Clock, QrCode } from 'lucide-react';
// import { eventInfo, heroImage } from '@/data/eventData';

// export default function Hero() {
//   return (
//     <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background image — TODO: Replace with actual conference ballroom photo */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('${heroImage}')` }}
//       />
//       {/* Semi-dark overlay for text readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-800/75 to-navy-900/85" />
//       <div className="absolute inset-0 bg-navy-500/30" />

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
       

//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 animate-fade-up">
//           Singapore Estate Planning
//           <span className="block text-gold-gradient">Forum 2026</span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg sm:text-xl lg:text-2xl text-navy-100 font-light max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
//           {eventInfo.subtitle}
//         </p>

//         {/* Date / Venue / Time info */}
//         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
//           <div className="flex items-center gap-2 text-white/90">
//             <Calendar size={20} className="text-gold-400" />
//             <span className="text-sm sm:text-base font-medium">{eventInfo.date}</span>
//           </div>
//           <div className="hidden sm:block w-px h-5 bg-white/20" />
//           <div className="flex items-center gap-2 text-white/90">
//             <Clock size={20} className="text-gold-400" />
//             <span className="text-sm sm:text-base font-medium">{eventInfo.time}</span>
//           </div>
//           <div className="hidden sm:block w-px h-5 bg-white/20" />
//           <div className="flex items-center gap-2 text-white/90">
//             <MapPin size={20} className="text-gold-400" />
//             <span className="text-sm sm:text-base font-medium">{eventInfo.venue}</span>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <a
//           href="#register"
//           className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-gold-500 hover:bg-gold-400 text-navy-700 font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/40 hover:-translate-y-1 animate-fade-up"
//           style={{ animationDelay: '0.45s' }}
//         >
//           Register Now - $150 nett
//         </a>

//         {/* Small note */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 text-white/60 text-sm animate-fade-up" style={{ animationDelay: '0.6s' }}>
//           <div className="flex items-center gap-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
//             <span>Registration closes {eventInfo.registrationCloseDate}</span>
//           </div>
//           <div className="hidden sm:flex items-center gap-2">
//             <QrCode size={16} className="text-gold-400" />
//             <span>Scan QR to sign-up</span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-base to-transparent" />
//     </section>
//   );
// }
