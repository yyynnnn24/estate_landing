import { QrCode, Mail, Calendar, MapPin } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { eventInfo } from '@/data/eventData';

export default function RegisterCTA() {
  return (
    <section id="register" className="py-20 lg:py-28 bg-navy-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-gold-400 font-semibold text-xs tracking-widest uppercase mb-3">
              <span>Register Now</span>
            </div>

            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
            <p className="text-navy-100/80 text-lg">
              Ticket price: <span className="text-gold-400 font-bold text-xl">{eventInfo.ticketPrice}</span>
            </p>
          </div>

          {/* Register & Pay button */}
          <div className="flex justify-center mb-10">
            <a
              href="#register"
              className="inline-flex items-center justify-center px-8 sm:px-12 py-4 bg-gold-500 hover:bg-gold-400 text-navy-700 font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/40 hover:-translate-y-1 hover:scale-105"
            >
              Register & Pay Now
            </a>
          </div>

          {/* Info grid: QR code + details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-2xl mx-auto">
            {/* QR code placeholder */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-44 h-44 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                {/* QR code placeholder — TODO: Replace with actual QR code image */}
                <div className="flex flex-col items-center gap-2 text-navy-300">
                  <QrCode size={80} className="text-navy-400" />
                  <span className="text-xs font-medium text-navy-400">QR Code</span>
                </div>
              </div>
              <p className="text-navy-100/70 text-sm">Scan to sign-up</p>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3 text-navy-100/90">
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-navy-200/60 uppercase tracking-wider font-semibold">Registration Closes</p>
                  <p className="text-sm text-white font-medium">{eventInfo.registrationCloseDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-navy-100/90">
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-navy-200/60 uppercase tracking-wider font-semibold">Enquiries</p>
                  <p className="text-sm text-white font-medium">{eventInfo.contact}</p>
                </div>
              </div>

             
            </div>
          </div>

          
        </SectionReveal>
      </div>
    </section>
  );
}
