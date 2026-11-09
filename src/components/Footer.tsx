import { MapPin, Phone, Mail, ArrowUp, Calendar, Sparkles } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Clinic', href: '#about' },
  { label: 'Dental Implants', href: '#implants' },
  { label: 'Aligners & Braces', href: '#orthodontics' },
  { label: 'All Treatments', href: '#services' },
  { label: 'Before & After Cases', href: '#cases' },
  { label: 'Specialist Doctors', href: '#doctors' },
  { label: 'Technology & Sterilization', href: '#technology' },
  { label: 'Location & Contact', href: '#contact' },
];

const treatmentsList = [
  '3D Guided Dental Implants',
  'Invisible Clear Aligners',
  'Ceramic & Metal Braces',
  'Single-Sitting Rotary RCT',
  'Laser Teeth Whitening',
  'CAD/CAM Zirconia Crowns',
  'Surgical Wisdom Tooth Removal',
  'Ultrasonic Scaling & Polishing',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0A2540] text-white relative">
      {/* Top Accent Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-sky-400 to-amber-300" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-sky-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#0A2540]">
                  <Sparkles className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div>
                <div className="font-headline font-bold text-lg sm:text-xl text-white leading-tight">
                  Tooth Cure
                </div>
                <div className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
                  Orthodontics &amp; Implant Center
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Premier dental center in Lalmatia, Dhanmondi 27. Dedicated to 3D dental implants, invisible clear aligners, and pain-free restorative therapies under the leadership of Dr. Pritam Sarker Ratul and Dr. Ornisha Urmi.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('#booking')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors shadow-sm"
              >
                <Calendar size={14} />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-headline font-bold text-sm tracking-wider uppercase text-teal-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {quickLinks.slice(0, 5).map((l, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavClick(l.href)}
                    className="hover:text-teal-300 transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-sm tracking-wider uppercase text-teal-300">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {treatmentsList.map((t, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-sm tracking-wider uppercase text-teal-300">
              Location &amp; Hotline
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <span>1/1E, Block C, Lalmatia (Behind Genetic Plaza, Dhanmondi 27), Dhaka - 1207</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-teal-400 shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${clinicInfo.phones.primaryRaw}`} className="hover:text-teal-300 font-semibold text-white">
                    {clinicInfo.phones.primary}
                  </a>
                  <span>/</span>
                  <a href={`tel:${clinicInfo.phones.secondaryRaw}`} className="hover:text-teal-300">
                    {clinicInfo.phones.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-teal-400 shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-teal-300">
                  {clinicInfo.email}
                </a>
              </div>
              <div className="pt-2 text-xs text-slate-400">
                <strong>Hours:</strong> Sat – Thu: 4:30 PM – 9:30 PM<br />
                Friday: By Prior Appointment Only
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>Tooth Cure Dental Orthodontics &amp; Implant Center</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-teal-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
