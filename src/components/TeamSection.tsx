import { Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Airoli Aaji',
    role: 'Master Barber',
    desc: 'Premium cuts and fresh fades. Let the results speak for themselves.',
    email: 'contact@samthebarber.com',
    image: 'https://i.ibb.co/VpLwL1JL/Screenshot-2026-05-03-131005.png',
    instagram: 'https://www.instagram.com/sam.the_b?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
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
