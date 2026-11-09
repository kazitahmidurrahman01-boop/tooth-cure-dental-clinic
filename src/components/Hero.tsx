import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight, MapPin, Clock, ShieldCheck, Sparkles, Star, CheckCircle } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { getAssetUrl, handleImageError } from '../utils/assets';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-8 pb-16 lg:py-24 overflow-hidden bg-gradient-to-b from-sky-50/60 via-teal-50/30 to-white"
    >
      {/* Soft ambient background shapes */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-teal-200/25 to-sky-200/20 rounded-full blur-3xl pointer-events-none -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-2xl pointer-events-none -ml-24" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Clinic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-900 text-xs font-semibold tracking-wide"
            >
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Lalmatia • Dhanmondi 27 • Specialized Dental Center</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0A2540] leading-[1.14] tracking-tight"
            >
              Precision Orthodontics &amp;{' '}
              <span className="bg-gradient-to-r from-teal-600 to-sky-700 bg-clip-text text-transparent inline-block">
                Modern Dental Implants
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-body"
            >
              Welcome to <strong>Tooth Cure Dental Center</strong> in Lalmatia, Dhanmondi 27. Led by <strong>Dr. Pritam Sarker Ratul</strong> (Oral Surgery &amp; Implants) and <strong>Dr. Ornisha Urmi</strong> (Orthodontics &amp; Smile Makeover), we provide world-class dental care with zero compromise on comfort and sterilization.
            </motion.p>

            {/* Quick Highlights Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex flex-wrap gap-2.5 pt-1"
            >
              {[
                '3D Guided Dental Implants',
                'Invisible Clear Aligners',
                'Single-Sitting Rotary RCT',
                'Laser Smile Whitening',
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-xs font-medium text-slate-700"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  <span>{item}</span>
                </span>
              ))}
            </motion.div>

            {/* Clinic Quick Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/95 backdrop-blur-sm border border-teal-100 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2.5 max-w-xl"
            >
              <div className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> 1/1E, Block C, Lalmatia (Behind Genetic Plaza, Dhanmondi 27), Dhaka - 1207
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-600 text-xs sm:text-sm pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>Sat – Thu: 4:30 PM – 9:30 PM</span>
                </div>
                <a
                  href={`tel:${clinicInfo.phones.primaryRaw}`}
                  className="flex items-center gap-1.5 text-teal-700 font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>{clinicInfo.phones.primary}</span>
                </a>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-body font-semibold text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-sm hover:shadow-md hover:from-teal-500 hover:to-slate-900 active:scale-95 transition-all duration-200 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={clinicInfo.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-body font-semibold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 hover:border-teal-300 active:scale-95 transition-all duration-200 text-sm"
              >
                <MapPin className="w-4 h-4 text-teal-700" />
                <span>ম্যাপে ডিরেকশন দেখুন</span>
              </a>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-body font-medium text-slate-600 hover:text-slate-900 transition-colors text-sm"
              >
                <span>Explore Treatments</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column (Hero Visual Card & Trust Metrics) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] sm:aspect-[4/4.5]">
                <img
                  src={getAssetUrl('images/hero-chamber.jpg')}
                  alt="Tooth Cure Dental Clinic Dhanmondi 27 Chamber"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-black/10" />

                {/* Floating Overlay Badge: Ratings */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0A2540] text-sm leading-tight flex items-center gap-1">
                      <span>4.9 / 5.0</span>
                      <span className="text-amber-500">★★★★★</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Google Reviews &amp; Patients
                    </div>
                  </div>
                </div>

                {/* Floating Overlay Badge: Real Doctor Avatars */}
                <div className="absolute bottom-5 inset-x-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/70">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                        Senior Clinical Consultants
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">Lalmatia, Dhaka</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={getAssetUrl('images/doctor-ratul.jpg')}
                        alt="Dr. Pritam Sarker Ratul"
                        onError={handleImageError}
                        className="w-9 h-9 rounded-full object-cover border-2 border-teal-600 shrink-0"
                      />
                      <div className="leading-tight">
                        <div className="font-bold text-slate-900 text-xs">
                          Dr. Pritam Sarker Ratul
                        </div>
                        <div className="text-[10px] text-teal-700 font-medium">
                          BDS (DU), PGT (OMFS) • Chief Consultant
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 pt-1 border-t border-slate-100">
                      <img
                        src={getAssetUrl('images/doctor-urmi.jpg')}
                        alt="Dr. Ornisha Urmi"
                        onError={handleImageError}
                        className="w-9 h-9 rounded-full object-cover border-2 border-teal-600 shrink-0"
                      />
                      <div className="leading-tight">
                        <div className="font-bold text-slate-900 text-xs">
                          Dr. Ornisha Urmi
                        </div>
                        <div className="text-[10px] text-teal-700 font-medium">
                          BDS (DU), PGT • Orthodontics &amp; Aligners
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill (Right side) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="hidden sm:flex absolute -bottom-5 -left-6 bg-gradient-to-r from-teal-600 to-[#0A2540] text-white rounded-2xl p-4 shadow-xl border border-white/20 items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">4,500+</div>
                  <div className="text-xs text-teal-100">Smiles Transformed</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
