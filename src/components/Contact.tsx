import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, ShieldCheck, Navigation } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Visit Us in Lalmatia / Dhanmondi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Clinic Location &amp; <span className="text-teal-700">Inquiries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg mt-3"
          >
            Conveniently situated behind Genetic Plaza in Dhanmondi 27 with private evening consultation slots.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column — Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Address */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-slate-900 text-base mb-1">
                  Clinic Address
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  1/1E, Block C, Lalmatia<br />
                  (Behind Genetic Plaza, Dhanmondi 27)<br />
                  Dhaka - 1207, Bangladesh
                </p>
                <div className="mt-2 text-xs text-teal-800 font-semibold flex items-center gap-1">
                  <Navigation size={13} />
                  <span>Landmark: Right behind Genetic Plaza on Dhanmondi 27</span>
                </div>
                <a
                  href={clinicInfo.googleMaps.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-700 text-xs font-semibold mt-3 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Hotlines */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-bold text-slate-900 text-base mb-1">
                  Telephone Hotlines
                </h3>
                <div className="space-y-1 text-sm font-semibold text-slate-800">
                  <div>
                    <a href={`tel:${clinicInfo.phones.primaryRaw}`} className="hover:text-teal-700 transition-colors">
                      {clinicInfo.phones.primary}
                    </a>
                    <span className="text-xs text-slate-400 font-normal ml-2">(Primary / Appointments)</span>
                  </div>
                  <div>
                    <a href={`tel:${clinicInfo.phones.secondaryRaw}`} className="hover:text-teal-700 transition-colors">
                      {clinicInfo.phones.secondary}
                    </a>
                    <span className="text-xs text-slate-400 font-normal ml-2">(Reception Desk)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${clinicInfo.whatsapp.number}?text=${encodeURIComponent("Hello Tooth Cure Dental Center, I have an inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:border-teal-300 hover:bg-teal-50/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">WhatsApp</div>
                  <div className="text-xs text-teal-800 font-semibold">{clinicInfo.phones.primary}</div>
                </div>
              </a>

              <a
                href={`mailto:${clinicInfo.email}`}
                className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:border-teal-300 hover:bg-teal-50/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Email Inquiries</div>
                  <div className="text-[11px] text-slate-600 truncate max-w-[120px]">{clinicInfo.email}</div>
                </div>
              </a>
            </div>

            {/* Practice Hours */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-slate-900 text-base mb-1">
                  Consultation Hours
                </h3>
                <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">Saturday – Thursday:</span>
                    <span className="font-semibold text-slate-900">4:30 PM – 9:30 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">Friday:</span>
                    <span className="font-semibold text-teal-800">By Appointment Only</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column — Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
              <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Tooth Cure Dental • Dhanmondi 27 / Lalmatia
                  </span>
                </div>
                <a
                  href={clinicInfo.googleMaps.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-700 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>View Larger Map</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Responsive Map Embed */}
              <div className="aspect-[4/3] sm:aspect-[16/10] w-full">
                <iframe
                  title="Tooth Cure Dental Location Lalmatia Dhanmondi 27"
                  src={clinicInfo.googleMaps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-slate-50 text-xs text-slate-600 border-t border-slate-200/80">
                📍 <strong>Tip for Visitors:</strong> From Dhanmondi 27 Main Road, turn into the lane adjacent to Genetic Plaza to enter Lalmatia Block C.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
