import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Camera } from 'lucide-react';

const CATEGORIES = ['All', 'Clinic Operatory', 'Clinical Results', 'Specialist Care'];

interface GalleryItem {
  id: number;
  category: string;
  label: string;
  imageUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: 'Clinic Operatory',
    label: 'Modern Operatory Suite in Lalmatia',
    imageUrl: '/images/clinic-interior.jpg',
    description: 'Fully equipped clinical operatory with ergonomic dental chair, LED shadowless examination lighting, and integrated digital sensors.',
  },
  {
    id: 2,
    category: 'Clinical Results',
    label: 'Orthodontic Teeth Realignment Result',
    imageUrl: '/images/cases/braces-after.webp',
    description: 'Finished orthodontic treatment under Dr. Ornisha Urmi achieving ideal arch form, incisor alignment, and balanced occlusion.',
  },
  {
    id: 3,
    category: 'Specialist Care',
    label: 'Smile Architecture Consultation',
    imageUrl: '/images/hero-orthodontic.webp',
    description: 'One-on-one diagnostic consultation, digital imaging assessment, and step-by-step treatment planning session.',
  },
  {
    id: 4,
    category: 'Clinical Results',
    label: 'Laser In-Office Smile Whitening',
    imageUrl: '/images/cases/whitening-after.webp',
    description: 'Brightened enamel shade achieved following safe, chairside dental bleaching in Lalmatia.',
  },
  {
    id: 5,
    category: 'Specialist Care',
    label: 'Consultant-Led Dental Surgery',
    imageUrl: '/images/clinic-interior.jpg',
    description: 'Guided dental implantology and surgical wisdom tooth removal directed by Dr. Pritam Sarker Ratul.',
  },
  {
    id: 6,
    category: 'Clinic Operatory',
    label: 'Infection Control & Sterilization Suite',
    imageUrl: '/images/clinic-interior.jpg',
    description: 'Sterile instruments sealed in medical grade pouches following Class-B vacuum autoclave processing.',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="cases" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5 text-teal-700" />
            <span>Visual Evidence &amp; Operatory</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Clinic Atmosphere &amp; <span className="text-teal-700">Patient Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Take a look inside our modern Dhanmondi/Lalmatia practice, our sterilization protocols, and completed smile transformations.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-semibold">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn size={18} />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline font-bold text-slate-900 text-base mb-1 group-hover:text-teal-700 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900 transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="relative aspect-[16/10] bg-slate-900">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-2">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-headline font-bold text-xl text-slate-900 mb-2">
                    {selectedItem.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
