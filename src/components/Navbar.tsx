import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center bg-black/40 backdrop-blur-md text-gray-300 text-xs py-2 px-8 border-b border-white/10 relative z-50">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-primary" />
            <span>Housecall service 📞</span>
          </div>
          <div className="flex items-center space-x-2 flex-1">
            <MapPin size={14} className="text-primary" />
            <a href="https://maps.app.goo.gl/355r1aR5V3" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Sabelhof 10, Huissen 6852TH
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.youtube.com/@bacutz" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" height="14" width="14"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> YouTube
          </a>
          <a href="https://www.instagram.com/ba.cutzz" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <Instagram size={14} /> Instagram
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed w-[95%] lg:w-[90%] left-1/2 -translate-x-1/2 z-40 transition-all duration-300 rounded-full ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2 md:py-3 top-4 border border-white/10' 
            : 'bg-transparent py-2 md:py-5 top-2 md:top-8'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.ibb.co/zTw9srVn/Chat-GPT-Image-Apr-30-2026-03-53-29-PM.png" 
              alt="Ba.Cutz Logo" 
              className="h-10 md:h-16 rounded-full object-cover aspect-square shadow-lg bg-white"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Home</a>
            <a href="#" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Services</a>
            <a href="#" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Gallery</a>
            <a href="#stylists" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Stylist</a>
            <a href="#map" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Location</a>
            <a href="https://calendly.com/bacutz/ba-cutz-knippen" target="_blank" rel="noreferrer" className="bg-primary hover:bg-[#406852] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider transition-colors uppercase shadow-md">
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white drop-shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg text-gray-900 shadow-xl border border-gray-100 flex flex-col py-4 px-6 space-y-4 rounded-3xl mt-4 max-h-[80vh] overflow-y-auto">
            <a href="#" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Home</a>
            <a href="#" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Services</a>
            <a href="#" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Gallery</a>
            <a href="#stylists" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Stylist</a>
            <a href="#map" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Location</a>
            <a href="https://calendly.com/bacutz/ba-cutz-knippen" target="_blank" rel="noreferrer" className="bg-primary text-center text-white px-6 py-3 rounded-full text-sm font-semibold uppercase mt-4 shadow-md">
              Book Appointment
            </a>
          </div>
        )}
      </header>
    </>
  );
}
