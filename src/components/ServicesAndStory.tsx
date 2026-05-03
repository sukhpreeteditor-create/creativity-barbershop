import { motion } from 'motion/react';
import { LiquidButton } from './ui/liquid-glass-button';

const services = [
  {
    title: 'HAIR SERVICES',
    items: [
      { name: 'Hair & Beard', price: '£20', desc: 'Premium grooming' },
      { name: 'Hair', price: '£15', desc: 'Clean fade or cut' },
    ]
  },
  {
    title: 'GROOMING',
    items: [
      { name: 'Shave / Beard Trim', price: '£10', desc: 'Sharp lines' },
      { name: 'Hot Towel', price: '£7', desc: 'Relaxing finish' },
    ]
  },
  {
    title: 'SPA & WELLNESS',
    items: [
      { name: 'Full Facial', price: '£10', desc: 'Deep clean' },
      { name: 'Wax / Black Mask', price: '£5', desc: 'Revitalizing treatment' },
    ]
  }
];

export default function ServicesAndStory() {
  return (
    <section className="py-20 bg-[#0f0f11]" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Services List */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-white mb-4 uppercase">Our Services</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              {services.map((service, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="bg-[#151518] rounded-[2rem] border border-white/5 overflow-hidden shadow-[0_4px_30px_rgba(157,78,221,0.08)]"
                >
                  <div className="bg-gradient-to-r from-primary to-[#7b2cbf] p-6 text-white text-center">
                    <h3 className="font-heading text-xl font-medium tracking-wide uppercase">{service.title}</h3>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="space-y-6">
                       {service.items.map((item, i) => (
                         <div key={i} className="flex justify-between items-start border-b border-white/10 pb-4 last:border-0 last:pb-0">
                           <div>
                             <h4 className="font-heading text-lg font-medium text-white tracking-wide">
                               {item.name}
                             </h4>
                             <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                           </div>
                           <div className="text-primary font-bold text-lg">{item.price}</div>
                         </div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
               <a href="#" className="relative block">
                 <LiquidButton variant="primary" size="xl" className="w-full sm:w-auto text-white">Make an Appointment</LiquidButton>
               </a>
            </div>
          </div>

          {/* Our Story Info */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-white mb-4 uppercase">Our Story</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="text-gray-300 leading-relaxed space-y-6 text-lg">
              <p>
                <strong>AALZBLENDZ</strong> is <span className="font-bold text-primary">Brums Best Barbers 💈</span> offering an exclusive, tailored grooming experience.
              </p>
              
              <div className="flex gap-4 my-8">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  src="https://i.ibb.co/5h1qQM27/Screenshot-2026-05-02-180650.png" 
                  alt="AALZBLENDZ Story" 
                  className="w-2/3 object-cover shadow-lg rounded-[2rem]"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  src="https://i.ibb.co/5gjFLSkD/Screenshot-2026-05-02-180735.png"  
                  alt="Premium Fade" 
                  className="w-1/3 object-cover shadow-lg rounded-[2rem]"
                />
              </div>
              
              <p>
                We focus on confidence & style with clean fades, sharp lines, and a full premium grooming experience.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start">
                <a href="#services" className="relative block">
                   <LiquidButton variant="primary" size="xl" className="text-white">Book Your Experience</LiquidButton>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
