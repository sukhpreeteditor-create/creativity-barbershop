import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(https://i.ibb.co/HpNm6YyT/Screenshot-2026-04-29-165053.png)' }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-3xl md:text-5xl lg:text-[60px] mb-4 text-white drop-shadow-md"
        >
          experience the best at
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic font-bold text-5xl md:text-7xl lg:text-[84px] text-primary mb-6 py-2 border-y-4 border-primary px-8 drop-shadow-lg"
          style={{ lineHeight: 1.1 }}
        >
          Creativity
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading font-medium text-4xl md:text-7xl lg:text-[90px] tracking-widest uppercase mb-10 drop-shadow-xl"
        >
          Barbershop
        </motion.h1>

        <motion.a
          href="https://wa.me/97433348939"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-primary hover:bg-[#406852] transition-colors text-white text-sm md:text-base font-semibold px-8 py-4 rounded tracking-[2px] uppercase"
        >
          Book An Appointment
        </motion.a>
      </div>
    </div>
  );
}
