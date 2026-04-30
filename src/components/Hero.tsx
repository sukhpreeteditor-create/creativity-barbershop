import { motion } from 'motion/react';

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
          Certified hairdresser 🇳🇱
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans font-black tracking-tighter text-6xl md:text-8xl lg:text-[130px] text-white mb-2 drop-shadow-2xl"
          style={{ lineHeight: 1 }}
        >
          Ba.Cutz
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif italic font-light text-4xl md:text-6xl lg:text-[70px] text-primary drop-shadow-xl mb-12"
        >
          Housecall Service
        </motion.h1>

        <motion.a
          href="https://calendly.com/bacutz/ba-cutz-knippen"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-primary hover:bg-[#406852] transition-colors text-white text-sm md:text-base font-semibold px-8 py-4 rounded-full tracking-[2px] uppercase shadow-lg shadow-black/30"
        >
          Book An Appointment
        </motion.a>
      </div>
    </div>
  );
}
