import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LiquidButton } from './ui/liquid-glass-button';

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
      {/* Top Bar - Apple Style frosted glass */}
      <div className="hidden lg:flex justify-between items-center bg-black/20 backdrop-blur-2xl text-gray-200 text-xs py-2 px-8 border-b border-white/10 relative z-50">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 flex-1 saturate-150">
            <MapPin size={14} className="text-white" />
            <a href="https://maps.app.goo.gl/2jC1RB7EXZnf7dG99" target="_blank" rel="noreferrer" className="font-medium tracking-wide hover:text-white/80 transition-colors">
              Airoli Aaji
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/sam.the_b?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1 font-medium tracking-wide">
            <Instagram size={14} /> Instagram
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed w-[95%] lg:w-[90%] left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out rounded-full ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] py-2 top-4 border border-white/10' 
            : 'bg-transparent py-4 top-4 md:top-8'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className={`flex-shrink-0 flex items-center rounded-full overflow-hidden bg-transparent shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-500 ${isScrolled ? 'h-10 md:h-12 w-10 md:w-12' : 'h-12 md:h-16 w-12 md:w-16'}`}>
            <img 
              src="https://i.ibb.co/VpLwL1JL/Screenshot-2026-05-03-131005.png" 
              alt="Airoli Aaji Logo" 
              className="object-cover w-full h-full scale-[1.35]"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Services</a>
            <a href="#" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Gallery</a>
            <a href="#stylists" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Stylist</a>
            <a href="#map" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Location</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white drop-shadow-md active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[#0b0b0e]/90 backdrop-blur-3xl text-white shadow-[0_10px_40px_rgba(157,78,221,0.15)] border border-white/10 flex flex-col py-4 px-6 space-y-2 rounded-3xl mt-4 max-h-[80vh] overflow-y-auto"
            >
              <a href="#" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Home</a>
              <a href="#services" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Services</a>
              <a href="#" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Gallery</a>
              <a href="#stylists" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Stylist</a>
              <a href="#map" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Location</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
