import { Calendar, MapPin, Clock, QrCode } from 'lucide-react';
import { eventInfo, heroImage } from '@/data/eventData';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — TODO: Replace with actual conference ballroom photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      />
      {/* Semi-dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-800/75 to-navy-900/85" />
      <div className="absolute inset-0 bg-navy-500/30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
       

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 animate-fade-up">
          Singapore Estate Planning
          <span className="block text-gold-gradient">Forum 2026</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-navy-100 font-light max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {eventInfo.subtitle}
        </p>

        {/* Date / Venue / Time info */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 text-white/90">
            <Calendar size={20} className="text-gold-400" />
            <span className="text-sm sm:text-base font-medium">{eventInfo.date}</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-2 text-white/90">
            <Clock size={20} className="text-gold-400" />
            <span className="text-sm sm:text-base font-medium">{eventInfo.time}</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-2 text-white/90">
            <MapPin size={20} className="text-gold-400" />
            <span className="text-sm sm:text-base font-medium">{eventInfo.venue}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#register"
          className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-gold-500 hover:bg-gold-400 text-navy-700 font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/40 hover:-translate-y-1 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          Register Now - $150 nett
        </a>

        {/* Small note */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 text-white/60 text-sm animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Registration closes {eventInfo.registrationCloseDate}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <QrCode size={16} className="text-gold-400" />
            <span>Scan QR to sign-up</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-base to-transparent" />
    </section>
  );
}
