import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    title: 'HAIRCUTS & STYLING',
    items: [
      { name: 'CLASSIC HAIRCUT', price: 'from 50 QAR', desc: 'Expert haircut tailored to your style with a precision finish.' },
      { name: 'EXECUTIVE HAIRCUT', price: 'from 80 QAR', desc: 'Premium haircut including hot towel and styling products.' },
      { name: 'BOYS HAIRCUT', price: 'from 30 QAR', desc: 'Cool cuts for the young ones.' },
    ]
  },
  {
    title: 'BEARD TREATMENT',
    items: [
      { name: 'BEARD TRIM', price: 'from 35 QAR', desc: 'Classic beard trim and edge lineup.' },
      { name: 'HOT TOWEL SHAVE', price: 'from 60 QAR', desc: 'Traditional razor shave experiencing maximum relaxation.' },
    ]
  },
  {
    title: 'COLORING SERVICES',
    items: [
      { name: 'HAIR & BEARD COLOR', price: 'from 100 QAR', desc: 'Professional coloring to cover greys or change your look.' },
    ]
  },
  {
    title: 'FACIAL TREATMENTS',
    items: [
      { name: 'CLEANSING FACIAL', price: 'from 70 QAR', desc: 'Deep cleansing and exfoliating facial treatment.' },
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
                        <a href="https://wa.me/97433348939" target="_blank" rel="noreferrer" className="text-primary hover:underline uppercase">Make an Appointment</a>
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
                Located in the heart of <strong>Qatar</strong> on Al Manara Street, Doha, Creativity Barbershop is your premier destination for exceptional grooming.
              </p>
              
              <div className="flex gap-4 my-8">
                <img 
                  src="https://i.ibb.co/1Y5wHKqG/Screenshot-2026-04-29-165344.png" 
                  alt="Creativity Barbershop Interior" 
                  className="w-2/3 object-cover shadow-md"
                />
                <img 
                  src="https://i.ibb.co/fVFg8kt3/Screenshot-2026-04-29-165244.png" 
                  alt="Barber tools" 
                  className="w-1/3 object-cover shadow-md"
                />
              </div>
              
              <p>
                We are open late from <strong>9 AM to 2 AM</strong> every single day to serve you. You are in trusted hands with our expert stylists and modern equipment. 
              </p>
              <p>
                Call us at <strong>+974 3334 8939</strong> to schedule your appointment, or simply walk in and let us transform your look with unparalleled creativity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
