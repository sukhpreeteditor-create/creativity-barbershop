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
            <span className="font-medium tracking-wide">07858324247</span>
          </div>
          <div className="flex items-center space-x-2 flex-1 saturate-150">
            <MapPin size={14} className="text-white" />
            <a href="https://maps.app.goo.gl/maps/birmingham" target="_blank" rel="noreferrer" className="font-medium tracking-wide hover:text-white/80 transition-colors">
              AALZBLENDZ
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.tiktok.com/@aalzblendz" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1 font-medium tracking-wide">
            <svg viewBox="0 0 24 24" fill="currentColor" height="14" width="14"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68l.01.2a6.33 6.33 0 0011.66 2.66 6.35 6.35 0 001.07-3.56V8.16c1.65.65 3.36 1.08 5.25 1.15V5.88a7.07 7.07 0 01-3.4-1.19z"/></svg> TikTok
          </a>
          <a href="https://www.instagram.com/aalzblendz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1 font-medium tracking-wide">
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
              src="https://i.ibb.co/chXBhNcf/Screenshot-2026-05-02-181131.png" 
              alt="AAlzblendz Logo" 
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
            <a href="#services" className="relative group">
              <LiquidButton variant="primary" className="text-white" size="sm">
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
              className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[#0b0b0e]/90 backdrop-blur-3xl text-white shadow-[0_10px_40px_rgba(157,78,221,0.15)] border border-white/10 flex flex-col py-4 px-6 space-y-2 rounded-3xl mt-4 max-h-[80vh] overflow-y-auto"
            >
              <a href="#" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Home</a>
              <a href="#services" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Services</a>
              <a href="#" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Gallery</a>
              <a href="#stylists" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Stylist</a>
              <a href="#map" className="font-medium text-sm hover:bg-white/5 rounded-xl px-4 py-3 transition-colors">Location</a>
              <div className="pt-2 pb-1">
                 <LiquidButton variant="primary" className="w-full text-white" size="lg">
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
