import { motion } from 'motion/react';
import { LiquidButton } from './ui/liquid-glass-button';

const services = [
  {
    title: 'HAIR SERVICES',
    items: [
      { name: 'Haircut', price: '70 QAR', desc: '25 min' },
      { name: 'Hair Styling', price: '30 QAR', desc: '10 min' },
      { name: 'Hair Dyeing', price: '600 QAR', desc: '2 hrs' },
      { name: 'Children’s Haircut', price: '50 QAR', desc: '20 min' },
      { name: 'L’Oréal X-Tenso (Long Hair)', price: '1000 QAR', desc: '1 hr' },
      { name: 'Hair Coloring', price: '150 QAR', desc: '30 min' },
      { name: 'L’Oréal X-Tenso (Short Hair)', price: '500 QAR', desc: '1 hr' },
      { name: 'Brushing Long Hair', price: '50 QAR', desc: '5 min' },
    ]
  },
  {
    title: 'OTHER SERVICES',
    items: [
      { name: 'Beard Coloring', price: '50 QAR', desc: '15 min' },
      { name: 'Beard Trim', price: '30 QAR', desc: '15 min' },
      { name: 'Highlights', price: '500 QAR', desc: '2 hrs' },
      { name: 'Perm', price: '500 QAR', desc: '3 hrs' },
      { name: 'Oil Treatment', price: '150 QAR', desc: '45 min' },
    ]
  },
  {
    title: 'SPA & WELLNESS',
    items: [
      { name: 'Waxing Medium', price: '20 QAR', desc: '5 min' },
      { name: 'Light Facial', price: '100 QAR', desc: '30 min' },
      { name: 'Hydra Facial', price: '200 QAR', desc: '1 hr' },
      { name: 'Waxing Full Face', price: '50 QAR', desc: '10 min' },
    ]
  }
];

export default function ServicesAndStory() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Services List */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Our Services</h2>
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
                  className="bg-gray-50 rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm"
                >
                  <div className="bg-primary p-6 text-white text-center">
                    <h3 className="font-heading text-xl font-medium tracking-wide uppercase">{service.title}</h3>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="space-y-6">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-start border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                          <div>
                            <h4 className="font-heading text-lg font-medium text-gray-800 tracking-wide">
                              {item.name}
                            </h4>
                            <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
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
                 <LiquidButton size="xl" className="w-full sm:w-auto text-white bg-primary border-none">Make an Appointment</LiquidButton>
               </a>
            </div>
          </div>

          {/* Our Story Info */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Our Story</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
              <p>
                <strong>Barhoumi Barber</strong> is a <span className="font-bold text-primary">Premium Barber Brand</span> offering an exclusive, tailored grooming experience.
              </p>
              
              <div className="flex gap-4 my-8">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  src="https://i.ibb.co/R4Qnvk1q/Screenshot-2026-04-30-181546.png" 
                  alt="Barhoumi Story" 
                  className="w-2/3 object-cover shadow-lg rounded-[2rem]"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  src="https://i.ibb.co/DHNqHL3n/Screenshot-2026-04-30-181014.png" 
                  alt="Premium Fade" 
                  className="w-1/3 object-cover shadow-lg rounded-[2rem]"
                />
              </div>
              
              <p>
                We focus on confidence & style with clean fades, sharp lines, and a full premium grooming experience.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start">
                <a href="#services" className="relative block">
                   <LiquidButton size="xl" className="text-white bg-primary border-none">Book Your Experience</LiquidButton>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
