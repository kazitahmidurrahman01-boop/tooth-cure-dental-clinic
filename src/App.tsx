import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClinicIntro from './components/ClinicIntro';
import Treatments from './components/Treatments';
import OrthodonticsShowcase from './components/OrthodonticsShowcase';
import ImplantShowcase from './components/ImplantShowcase';
import RootCanalAnimation from './components/RootCanalAnimation';
import Doctors from './components/Doctors';
import Equipment from './components/Equipment';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentBooking from './components/AppointmentBooking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { clinicInfo } from './data/clinicInfo';

// Floating WhatsApp Button
function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${clinicInfo.whatsapp.number}?text=${encodeURIComponent("Hello Tooth Cure Dental Center, I would like to book an appointment.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
      style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.45)' }}
      aria-label="Chat with Tooth Cure Dental on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function App() {
  // Cursor effect on desktop
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');

    cursor.style.cssText = `
      position: fixed; top: 0; left: 0; width: 32px; height: 32px;
      border: 1.5px solid rgba(15, 118, 110, 0.4); border-radius: 50%;
      pointer-events: none; z-index: 9999; transform: translate(-50%, -50%);
      transition: width 0.25s, height 0.25s, border-color 0.25s, opacity 0.25s;
      opacity: 0;
    `;
    cursorDot.style.cssText = `
      position: fixed; top: 0; left: 0; width: 6px; height: 6px;
      background: #0F766E; border-radius: 50%;
      pointer-events: none; z-index: 9999; transform: translate(-50%, -50%);
      opacity: 0;
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    let reqId: number;
    const animate = () => {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      cursor.style.left = curX + 'px';
      cursor.style.top = curY + 'px';
      reqId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], [role="slider"], input, select, textarea')) {
        cursor.style.width = '44px';
        cursor.style.height = '44px';
        cursor.style.borderColor = 'rgba(15, 118, 110, 0.8)';
      }
    };
    const handleMouseOut = () => {
      cursor.style.width = '32px';
      cursor.style.height = '32px';
      cursor.style.borderColor = 'rgba(15, 118, 110, 0.4)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(reqId);
      cursor.remove();
      cursorDot.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <ClinicIntro />
        <Treatments />
        <OrthodonticsShowcase />
        <ImplantShowcase />
        <RootCanalAnimation />
        <Doctors />
        <Equipment />
        <Gallery />
        <WhyChooseUs />
        <AppointmentBooking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
