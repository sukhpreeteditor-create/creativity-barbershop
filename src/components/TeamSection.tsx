import { Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Sam',
    role: 'Master Barber',
    desc: 'Specializing in clean fades, sharp lines, and creating a premium grooming experience that boosts your confidence.',
    email: 'contact@cutchino.com',
    image: 'https://i.ibb.co/SXCs085P/Chat-GPT-Image-Apr-30-2026-06-26-33-PM.png',
    tiktok: 'https://www.tiktok.com/@sam_da_barber?_t=ZS-90I4rtWXH0&_r=1',
    instagram: 'https://www.instagram.com/cutchino_qatar/?utm_source=ig_web_button_share_sheet',
  }
];

export default function TeamSection() {
  return (
    <>
      <section className="py-24 bg-white" id="stylists">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm mb-2 font-semibold">Meet the grooming professional</p>
            <h2 className="text-4xl md:text-5xl font-heading text-[#333] uppercase">Our Stylist</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 max-w-sm mx-auto gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col pt-4"
              >
                <div className="overflow-hidden mb-6 relative shadow-xl rounded-full aspect-square w-full max-w-[280px] mx-auto border-4 border-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-xl font-heading font-medium tracking-wide border-b border-gray-200 pb-2 mb-2 text-[#333] text-center">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold text-sm uppercase mb-4 font-sans tracking-wide text-center">
                  {member.role}
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                  {member.desc}
                </p>
                <div className="text-sm text-gray-500 mb-6 text-center">
                  Contact: <a href={`mailto:${member.email}`} className="text-primary hover:underline font-medium break-all">{member.email}</a>
                </div>
                
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 justify-center">
                  <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href={member.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href={member.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                    <Instagram size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
