import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import clsx from 'clsx';
import { clinicInfo } from '../data/clinicInfo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Treatments' },
  { href: '#orthodontics', label: 'Aligners' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#cases', label: 'Gallery' },
  { href: '#technology', label: 'Hygiene' },
  { href: '#contact', label: 'Location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#0A2540] text-slate-200 text-xs py-2 px-4 border-b border-blue-900/40 relative z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-teal-400 font-medium whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Lalmatia Block C (Behind Genetic Plaza, Dhanmondi 27)</span>
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-slate-300 whitespace-nowrap">
              Sat–Thu: 4:30 PM – 9:30 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${clinicInfo.phones.primaryRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-teal-300 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{clinicInfo.phones.primary}</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <a
              href={`tel:${clinicInfo.phones.secondaryRaw}`}
              className="hidden md:inline hover:text-white transition-colors whitespace-nowrap"
            >
              {clinicInfo.phones.secondary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          'sticky top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_25px_rgba(10,37,64,0.08)] py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none shrink-0"
              aria-label="Tooth Cure Dental Homepage"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-teal-500 via-sky-600 to-[#0A2540] p-0.5 shadow-md group-hover:shadow-teal-500/20 transition-all flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#0A2540]">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="shrink-0">
                <div className="font-headline font-extrabold text-base sm:text-xl leading-tight text-[#0A2540] tracking-tight whitespace-nowrap">
                  Tooth Cure
                </div>
                <div className="font-body text-[9px] sm:text-[11px] font-bold tracking-wider text-teal-700 uppercase whitespace-nowrap">
                  Orthodontics &amp; Implant Center
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1 2xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={clsx(
                      'relative px-3 py-1.5 font-body font-semibold text-[13px] transition-all duration-200 rounded-lg whitespace-nowrap shrink-0',
                      isActive
                        ? 'text-teal-800 bg-teal-50 shadow-xs border border-teal-200/60'
                        : 'text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/80'
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Premium Call to Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={`https://wa.me/${clinicInfo.whatsapp.number}?text=${encodeURIComponent("Hello Tooth Cure Dental Center, I would like to inquire about dental treatment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50/90 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 active:scale-95 transition-all duration-200 shadow-xs whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={() => handleNavClick('#booking')}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-body font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-600 via-teal-700 to-[#0A2540] hover:from-teal-500 hover:to-slate-900 shadow-[0_4px_14px_rgba(13,148,136,0.25)] hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)] active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-teal-200 shrink-0" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 py-4 space-y-1 overflow-hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => handleNavClick('#booking')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-body font-semibold text-sm text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>
                <a
                  href={`tel:${clinicInfo.phones.primaryRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-body font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call {clinicInfo.phones.primary}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
