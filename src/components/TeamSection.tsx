import { Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Aalzblendz',
    role: 'Master Barber',
    desc: 'Brums Best Barbers 💈. Make sure to leave a review ⭐⭐⭐⭐⭐',
    email: 'contact@aalzblendz.com',
    image: 'https://i.ibb.co/chXBhNcf/Screenshot-2026-05-02-181131.png',
    threads: 'https://www.tiktok.com/@aalzblendz',
    instagram: 'https://www.tiktok.com/@aalzblendz',
  }
];

export default function TeamSection() {
  return (
    <>
      <section className="py-24 bg-[#0f0f11]" id="stylists">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <p className="text-gray-400 uppercase tracking-widest text-sm mb-2 font-semibold">Meet the grooming professional</p>
            <h2 className="text-4xl md:text-5xl font-heading text-white uppercase">Our Stylist</h2>
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
                <div className="overflow-hidden mb-6 relative shadow-[0_0_30px_rgba(157,78,221,0.15)] rounded-full aspect-square w-full max-w-[280px] mx-auto border-4 border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-xl font-heading font-medium tracking-wide border-b border-white/10 pb-2 mb-2 text-white text-center">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold text-sm uppercase mb-4 font-sans tracking-wide text-center">
                  {member.role}
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed text-center">
                  {member.desc}
                </p>
                <div className="text-sm text-gray-500 mb-6 text-center">
                  Contact: <a href={`mailto:${member.email}`} className="text-primary hover:underline font-medium break-all">{member.email}</a>
                </div>
                
                <div className="flex gap-3 mt-auto pt-4 border-t border-white/10 justify-center">
                  <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href={member.threads} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1f] flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16"><path d="M14.939 12.352c-.179.623-.538 1.127-1.077 1.512-.538.384-1.127.576-1.767.576s-1.229-.192-1.767-.576c-.538-.385-.898-.889-1.077-1.512h5.688zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-3 0c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zM8.905 12h-2.14c.264-1.119.866-2.025 1.808-2.716C9.516 8.592 10.669 8.247 12 8.247s2.484.346 3.427 1.037c.942.69 1.544 1.597 1.808 2.716h-2.14c-.179-.623-.538-1.127-1.077-1.512-.538-.384-1.127-.576-1.767-.576s-1.229.192-1.767.576c-.538.385-.898.889-1.077 1.512z"/></svg>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href={member.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1f] flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
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
