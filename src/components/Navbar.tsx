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
              Barhoumi Barber
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.threads.net/@barhoumi.tarek.56" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1 font-medium tracking-wide">
            <svg viewBox="0 0 24 24" fill="currentColor" height="14" width="14"><path d="M14.939 12.352c-.179.623-.538 1.127-1.077 1.512-.538.384-1.127.576-1.767.576s-1.229-.192-1.767-.576c-.538-.385-.898-.889-1.077-1.512h5.688zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-3 0c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zM8.905 12h-2.14c.264-1.119.866-2.025 1.808-2.716C9.516 8.592 10.669 8.247 12 8.247s2.484.346 3.427 1.037c.942.69 1.544 1.597 1.808 2.716h-2.14c-.179-.623-.538-1.127-1.077-1.512-.538-.384-1.127-.576-1.767-.576s-1.229.192-1.767.576c-.538.385-.898.889-1.077 1.512z"/></svg> Threads
          </a>
          <a href="https://www.instagram.com/barhoumi.tarek.56?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1 font-medium tracking-wide">
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
          <a href="#" className={`flex-shrink-0 flex items-center rounded-full overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-500 ${isScrolled ? 'h-10 md:h-12 w-10 md:w-12' : 'h-12 md:h-16 w-12 md:w-16'}`}>
            <img 
              src="https://i.ibb.co/8GzRP3j/Screenshot-2026-05-02-151628.png" 
              alt="Barhoumi Logo" 
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
