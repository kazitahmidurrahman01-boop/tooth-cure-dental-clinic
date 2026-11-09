import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, RotateCcw, Calendar, ArrowRight } from 'lucide-react';

const IMPLANT_STEPS = [
  {
    id: 0,
    label: '1. 3D Digital Assessment',
    title: 'Precision RVG & Bone Mapping',
    color: '#0F766E',
    description: 'High-resolution digital radiography evaluates bone density, canal distance, and alveolar width to plan the ideal implant position with zero guesswork.',
  },
  {
    id: 1,
    label: '2. Titanium Fixture Placement',
    title: 'Biocompatible Titanium Post',
    color: '#0284C7',
    description: 'Under gentle local anesthesia, a medical-grade Grade-4 titanium root is placed into the jawbone, triggering biological osseointegration.',
  },
  {
    id: 2,
    label: '3. Custom Abutment Fit',
    title: 'Anatomical Emergence Profile',
    color: '#475569',
    description: 'After bone integration, a precision-milled titanium or zirconia abutment is fastened to form the anatomical connection above the gumline.',
  },
  {
    id: 3,
    label: '4. Full Zirconia Crown',
    title: 'Permanent Aesthetic Restoration',
    color: '#0A2540',
    description: 'A custom CAD/CAM zirconia crown matching the exact shade and translucency of your neighboring teeth is cemented, restoring 100% chew force.',
  },
];

export default function ImplantShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAutoPlay(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    if (activeStep >= IMPLANT_STEPS.length - 1) return;
    const timer = setTimeout(() => setActiveStep(s => s + 1), 1200);
    return () => clearTimeout(timer);
  }, [autoPlay, activeStep]);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="implants"
      className="py-20 lg:py-28 bg-slate-50/80 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Shield className="w-3.5 h-3.5 text-teal-700" />
            <span>Center of Implantology • Dr. Pritam Sarker Ratul</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Permanent Tooth Replacement with{' '}
            <span className="text-teal-700">Dental Implants</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Eat, laugh, and smile with zero hesitation. Our dental implants fuse directly with your natural jawbone to deliver lifetime durability and bite strength.
          </motion.p>
        </div>

        {/* Step-by-Step Interactive Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Visual Diagram */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              {/* Stepper Progress Bar */}
              <div className="flex items-center justify-between gap-2">
                {IMPLANT_STEPS.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(idx)}
                    className={`flex-1 text-center py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      activeStep === idx
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Step {idx + 1}
                  </button>
                ))}
              </div>

              {/* Graphic Representation */}
              <div className="relative rounded-2xl bg-gradient-to-b from-sky-50 to-teal-50/50 p-6 sm:p-8 border border-teal-100 min-h-[260px] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                    {IMPLANT_STEPS[activeStep].label}
                  </span>
                  <button
                    onClick={() => setActiveStep(0)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                    title="Restart flow"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>

                <div className="my-6">
                  <h4 className="text-xl sm:text-2xl font-bold font-headline text-slate-900 mb-2">
                    {IMPLANT_STEPS[activeStep].title}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {IMPLANT_STEPS[activeStep].description}
                  </p>
                </div>

                {/* Micro indicators */}
                <div className="flex items-center gap-2 pt-2 border-t border-teal-200/50 text-xs text-teal-900 font-medium">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  <span>Surgical Protocol Guided by Dr. Pritam Sarker Ratul [BDS (DU), PGT (OMFS)]</span>
                </div>
              </div>

              {/* Stepper controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(s => Math.max(0, s - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep === IMPLANT_STEPS.length - 1}
                  onClick={() => setActiveStep(s => Math.min(IMPLANT_STEPS.length - 1, s + 1))}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 disabled:opacity-40 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clinical Advantages */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Why Dental Implants Outperform Traditional Bridges
              </span>
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-slate-900">
                Preserve Adjacent Teeth &amp; Prevent Bone Loss
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When a tooth is lost, the surrounding jawbone naturally resorbs over time. Dental implants provide biological stimulation to the bone, halting shrinkage while avoiding the need to shave down healthy neighboring teeth.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: '100% Natural Chewing Efficiency', desc: 'Enjoy any food without shifting, discomfort, or dental adhesives.' },
                { title: 'Adjacent Tooth Protection', desc: 'No cutting or grinding down of neighboring virgin teeth as required by bridges.' },
                { title: 'Lifetime Bone Integration', desc: 'Titanium fixtures chemically fuse with bone matrix (osseointegration) for decades of stability.' },
                { title: 'Flawless Aesthetic Profile', desc: 'Custom CAD/CAM zirconia emergence profile indistinguishable from natural teeth.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-slate-900 text-sm">{item.title}</h5>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-sm hover:shadow-md transition-all active:scale-95 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Dental Implant Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
