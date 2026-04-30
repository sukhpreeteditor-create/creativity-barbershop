import { Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Ba.Cutz',
    role: 'Certified Hairdresser',
    desc: 'Specializing in precision cuts and premium housecall services across the Netherlands.',
    email: 'contact@bacutz.com',
    image: 'https://i.ibb.co/0Wb275f/Screenshot-2026-04-30-153410.png',
    instagram: 'https://www.instagram.com/ba.cutzz',
    youtube: 'https://www.youtube.com/@bacutz'
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
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
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
                  Email: <a href={`mailto:${member.email}`} className="text-primary hover:underline font-medium break-all">{member.email}</a>
                </div>
                
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 justify-center">
                  <a href={member.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors"><Youtube size={14} /></a>
                  <a href={member.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors"><Instagram size={14} /></a>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
