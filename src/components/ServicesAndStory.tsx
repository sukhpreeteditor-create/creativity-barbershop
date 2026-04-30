import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'HAIRCUTS & STYLING',
    items: [
      { name: 'CLASSIC HAIRCUT', price: 'from €35', desc: 'Expert haircut tailored to your style with a precision finish.' },
      { name: 'EXECUTIVE HAIRCUT', price: 'from €50', desc: 'Premium haircut including hot towel and styling products.' },
      { name: 'BOYS HAIRCUT', price: 'from €25', desc: 'Cool cuts for the young ones.' },
    ]
  },
  {
    title: 'BEARD TREATMENT',
    items: [
      { name: 'BEARD TRIM', price: 'from €25', desc: 'Classic beard trim and edge lineup.' },
      { name: 'HOT TOWEL SHAVE', price: 'from €35', desc: 'Traditional razor shave experiencing maximum relaxation.' },
    ]
  },
  {
    title: 'HOUSECALL SERVICES',
    items: [
      { name: 'PREMIUM HOUSECALL', price: 'Contact Us', desc: 'Certified hairdresser bringing the barbershop to your location.' },
    ]
  }
];

export default function ServicesAndStory() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Services Accordion */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Our Services</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="space-y-4">
              {services.map((service, idx) => (
                <div key={idx} className="border border-gray-200">
                  <button 
                    className={`w-full flex justify-between items-center p-4 font-heading text-lg font-medium transition-colors ${openAccordion === idx ? 'bg-primary text-white' : 'bg-gray-50 text-gray-800 hover:text-primary'}`}
                    onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                  >
                    {service.title}
                    {openAccordion === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  {openAccordion === idx && (
                    <div className="p-6 bg-white border-t border-gray-200">
                      <div className="text-sm font-semibold mb-6 flex gap-2 w-full justify-between sm:justify-start sm:gap-4 md:gap-8 border-b pb-4">
                        <a href="#" className="text-primary hover:underline uppercase">Make an Appointment</a>
                        <a href="#stylists" className="text-gray-500 hover:text-primary hover:underline uppercase">See our Stylists</a>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-6 pb-4 border-b">
                        Our expert barbers provide premium services designed for maximum comfort and style.
                      </p>
                      
                      <div className="space-y-6">
                        {service.items.map((item, i) => (
                          <div key={i}>
                            <h4 className="font-heading text-lg text-gray-800 tracking-wide">
                              {item.name} - <span className="text-primary">{item.price}</span>
                            </h4>
                            <p className="text-gray-600 mt-1">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Our Story Info */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Our Story</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
              <p>
                Located in <strong>Huissen, Netherlands</strong> at Sabelhof 10. Ba.Cutz is a <span className="font-bold text-primary">Certified Hairdresser 🇳🇱</span> offering an exclusive, tailored grooming experience.
              </p>
              
              <div className="flex gap-4 my-8">
                <motion.img 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  src="https://i.ibb.co/679MPTbk/Screenshot-2026-04-30-153423.png" 
                  alt="Ba.Cutz Barbershop" 
                  className="w-2/3 object-cover shadow-md rounded-2xl"
                />
                <motion.img 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  src="https://i.ibb.co/Y4Kh7DSX/Screenshot-2026-04-30-153457.png" 
                  alt="Barber tools" 
                  className="w-1/3 object-cover shadow-md rounded-2xl"
                />
              </div>
              
              <p>
                We specialize in <strong>Housecall Services 📞</strong>, bringing the ultimate premium barbershop directly to your location. Trusted by professional athletes worldwide.
              </p>
              <p>
                Book online through Calendly to schedule your appointment, or <a href="https://www.instagram.com/ba.cutzz" target="_blank" rel="noreferrer" className="text-primary hover:underline">contact us directly</a> for special housecall requests in the Netherlands.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
