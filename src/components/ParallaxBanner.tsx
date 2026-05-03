import { motion } from 'motion/react';

const hours = [
  { day: 'MON', time: '10 AM - 11 PM', bg: 'bg-gradient-to-br from-primary/80 to-primary-hover shadow-[0_0_20px_rgba(157,78,221,0.2)] border border-primary/20' },
  { day: 'TUE', time: '10 AM - 11 PM', bg: 'bg-gradient-to-br from-primary/80 to-primary-hover shadow-[0_0_20px_rgba(157,78,221,0.2)] border border-primary/20' },
  { day: 'WED', time: '10 AM - 10 PM', bg: 'bg-gradient-to-br from-primary/80 to-primary-hover shadow-[0_0_20px_rgba(157,78,221,0.2)] border border-primary/20' },
  { day: 'THU', time: '10 AM - 11 PM', bg: 'bg-gradient-to-br from-primary/80 to-primary-hover shadow-[0_0_20px_rgba(157,78,221,0.2)] border border-primary/20' },
  { day: 'FRI', time: '12:30 PM - 11 PM', bg: 'bg-gradient-to-br from-primary/80 to-primary-hover shadow-[0_0_20px_rgba(157,78,221,0.2)] border border-primary/20' },
  { day: 'SAT', time: '10 AM - 11 PM', bg: 'bg-gradient-to-br from-primary/80 to-primary-hover shadow-[0_0_20px_rgba(157,78,221,0.2)] border border-primary/20' },
  { day: 'SUN', time: '10 AM - 11 PM', bg: 'bg-gradient-to-br from-primary/80 to-primary-hover shadow-[0_0_20px_rgba(157,78,221,0.2)] border border-primary/20' },
];

export default function ParallaxBanner() {
  return (
    <section 
      className="relative py-24 bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-heading tracking-wide uppercase">Opening Hours</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {hours.map((h, i) => (
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }} 
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
              key={i} 
              className={`${h.bg} text-white flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-lg`}
            >
              <div className="font-heading text-2xl font-bold mb-2">{h.day}</div>
              <div className="text-xs tracking-wider opacity-90 text-center px-2">{h.time}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
