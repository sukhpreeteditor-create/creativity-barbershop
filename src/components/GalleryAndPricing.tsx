import { motion } from 'motion/react';
import { LiquidButton } from './ui/liquid-glass-button';

const galleryImages = [
  { url: 'https://i.ibb.co/DHNqHL3n/Screenshot-2026-04-30-181014.png', alt: 'Premium Fade' },
  { url: 'https://i.ibb.co/Gvbk3Y9c/Screenshot-2026-04-30-181256.png', alt: 'Clean Cut' },
  { url: 'https://i.ibb.co/TqKX650w/Screenshot-2026-04-30-181115.png', alt: 'Sharp Lineup' },
  { url: 'https://i.ibb.co/WWv1Ffyk/Screenshot-2026-04-30-181458.png', alt: 'Beard Trim' },
  { url: 'https://i.ibb.co/rfRQFzWr/Screenshot-2026-04-30-181220.png', alt: 'Classic Haircut' },
];

export default function GalleryAndPricing() {
  const prices = [
    { name: 'Haircut', price: '70 QAR' },
    { name: 'Hair Dyeing', price: '600 QAR' },
    { name: 'L’Oréal X-Tenso', price: '1000 QAR' },
    { name: 'Highlights', price: '500 QAR' },
    { name: 'Perm', price: '500 QAR' },
    { name: 'Hydra Facial', price: '200 QAR' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery Section */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Gallery & Professional Work</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative overflow-hidden cursor-pointer rounded-full aspect-square"
                >
                  <img 
                    src={img.url}
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center rounded-full">
                    <span className="text-white text-sm font-semibold uppercase tracking-wider">
                      {img.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex-1 lg:max-w-md">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Check Our Top Prices</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="bg-[#f9f9f9] border border-gray-200 p-8 shadow-lg rounded-[2rem]">
              <ul className="space-y-6">
                {prices.map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <span className="font-semibold text-[#333] text-lg font-sans">{item.name}</span>
                    <span className="text-primary font-bold text-xl">{item.price}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center flex justify-center">
                <a href="#services" className="relative group block">
                <LiquidButton size="xl" variant="default" className="text-primary border border-primary/20 bg-white">
                  VIEW ALL PRICES
                </LiquidButton>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
