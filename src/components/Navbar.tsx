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
          <div className="flex items-center space-x-2 saturate-150">
            <Phone size={14} className="text-white" />
            <span className="font-medium tracking-wide">+974 5513 7732</span>
          </div>
          <div className="flex items-center space-x-2 flex-1 saturate-150">
            <MapPin size={14} className="text-white" />
            <a href="https://maps.app.goo.gl/mJFqW23Gz4F1PLxb8" target="_blank" rel="noreferrer" className="font-medium tracking-wide hover:text-white/80 transition-colors">
              Doha, Qatar
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.tiktok.com/@sam_da_barber?_t=ZS-90I4rtWXH0&_r=1" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1 font-medium tracking-wide">
            <svg viewBox="0 0 24 24" fill="currentColor" height="14" width="14"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg> TikTok
          </a>
          <a href="https://www.instagram.com/cutchino_qatar/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1 font-medium tracking-wide">
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
          <a href="#" className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.ibb.co/WNjSyGkN/Chat-GPT-Image-Apr-30-2026-06-20-23-PM.png" 
              alt="Cutchino Logo" 
              className={`rounded-full object-cover aspect-square bg-white transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.1)] ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Services</a>
            <a href="#" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Gallery</a>
            <a href="#stylists" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Stylist</a>
            <a href="#map" className="text-white hover:text-white/70 text-sm font-medium tracking-wide transition-colors">Location</a>
            <a href="#services" className="relative group">
              <LiquidButton className="text-white bg-primary border-none" size="sm">
                 Book Now
              </LiquidButton>
            </a>
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
              className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white/70 backdrop-blur-3xl text-black shadow-2xl border border-white/50 flex flex-col py-4 px-6 space-y-2 rounded-3xl mt-4 max-h-[80vh] overflow-y-auto"
            >
              <a href="#" className="font-medium text-sm hover:bg-black/5 rounded-xl px-4 py-3 transition-colors">Home</a>
              <a href="#services" className="font-medium text-sm hover:bg-black/5 rounded-xl px-4 py-3 transition-colors">Services</a>
              <a href="#" className="font-medium text-sm hover:bg-black/5 rounded-xl px-4 py-3 transition-colors">Gallery</a>
              <a href="#stylists" className="font-medium text-sm hover:bg-black/5 rounded-xl px-4 py-3 transition-colors">Stylist</a>
              <a href="#map" className="font-medium text-sm hover:bg-black/5 rounded-xl px-4 py-3 transition-colors">Location</a>
              <div className="pt-2 pb-1">
                 <LiquidButton className="w-full text-white bg-primary border-none" size="lg">
                   Book Now
                 </LiquidButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
