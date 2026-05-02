import { motion } from 'motion/react';
import { LiquidButton } from './ui/liquid-glass-button';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(https://i.ibb.co/Y4Kh7DSX/Screenshot-2026-04-30-153457.png)' }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-light tracking-[0.2em] text-xl md:text-2xl lg:text-3xl mb-2 text-white/90 drop-shadow-md uppercase"
        >
          Premium Grooming Experience
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans font-black tracking-tighter text-6xl md:text-8xl lg:text-[110px] text-white mb-2 drop-shadow-2xl uppercase"
          style={{ lineHeight: 1 }}
        >
          Cutchino
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif italic font-light text-4xl md:text-6xl lg:text-[70px] text-primary drop-shadow-xl mb-12"
        >
          Men's Salon
        </motion.h1>

        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group block"
        >
          <LiquidButton size="xxl" className="text-white bg-primary border-none text-base font-semibold tracking-[2px] uppercase">
            Book An Appointment
          </LiquidButton>
        </motion.a>
      </div>
    </div>
  );
}
