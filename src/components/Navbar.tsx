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
      <div className="hidden lg:flex justify-between items-center bg-[#141414] text-gray-300 text-xs py-2 px-8 border-b border-[#333]">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-primary" />
            <span>+974 3334 8939</span>
          </div>
          <div className="flex items-center space-x-2 flex-1">
            <MapPin size={14} className="text-primary" />
            <a href="https://maps.app.goo.gl/eayyLQtVBzMxRBEv6" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Al Manara St, Doha, Qatar
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/108024668694852" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <Facebook size={14} /> Facebook
          </a>
          <a href="https://www.instagram.com/barbercreativity" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <Instagram size={14} /> Instagram
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.ibb.co/qYsVYrmm/Screenshot-2026-04-29-165532.png" 
              alt="Creativity Barbershop Logo" 
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center bg-black/50"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Home</a>
            <a href="#" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Services</a>
            <a href="#" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Gallery</a>
            <a href="#stylists" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Stylists</a>
            <a href="#map" className="text-white hover:text-primary text-sm font-semibold tracking-wider transition-colors uppercase">Location</a>
            <a href="https://wa.me/97433348939" target="_blank" rel="noreferrer" className="bg-primary hover:bg-[#406852] text-white px-6 py-2 rounded text-sm font-semibold tracking-wider transition-colors uppercase">
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white text-gray-900 shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 space-y-4">
            <a href="#" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Home</a>
            <a href="#" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Services</a>
            <a href="#" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Gallery</a>
            <a href="#stylists" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Stylists</a>
            <a href="#map" className="uppercase font-semibold text-sm hover:text-primary py-2 border-b border-gray-100">Location</a>
            <a href="https://wa.me/97433348939" target="_blank" rel="noreferrer" className="bg-primary text-center text-white px-6 py-3 rounded text-sm font-semibold uppercase mt-4">
              Book Appointment
            </a>
          </div>
        )}
      </header>
    </>
  );
}
