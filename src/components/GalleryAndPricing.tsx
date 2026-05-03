import { motion } from 'motion/react';
import { LiquidButton } from './ui/liquid-glass-button';

const galleryImages = [
  { url: 'https://i.ibb.co/MDXVmp1G/Screenshot-2026-05-03-131131.png', alt: 'Premium Fade' },
  { url: 'https://i.ibb.co/Df0T7dT2/Screenshot-2026-05-03-131153.png', alt: 'Clean Cut' },
  { url: 'https://i.ibb.co/pB48JVrr/Screenshot-2026-05-03-131207.png', alt: 'Sharp Lineup' },
  { url: 'https://i.ibb.co/HTmXfwT4/Screenshot-2026-05-03-131234.png', alt: 'Beard Trim' },
  { url: 'https://i.ibb.co/YBkXPSzz/Screenshot-2026-05-03-131259.png', alt: 'Classic Haircut' },
  { url: 'https://i.ibb.co/tM4ZTKQy/Screenshot-2026-05-03-131059.png', alt: 'Modern Styling' },
];

export default function GalleryAndPricing() {
  const prices = [
    { name: 'Hair & Beard', price: '₹200' },
    { name: 'Hair', price: '₹150' },
    { name: 'Shave / Beard Trim', price: '₹100' },
    { name: 'Full Facial', price: '₹100' },
    { name: 'Hot Towel', price: '₹70' },
    { name: 'Wax / Black Mask', price: '₹50' },
  ];

  return (
    <section className="py-20 bg-[#0f0f11]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery Section */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-white mb-4 uppercase">Gallery & Professional Work</h2>
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
              <h2 className="text-3xl font-heading text-white mb-4 uppercase">Check Our Top Prices</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="bg-[#151518] border border-white/10 p-8 shadow-[0_0_30px_rgba(157,78,221,0.15)] rounded-[2rem]">
              <ul className="space-y-6">
                {prices.map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="font-semibold text-white text-lg font-sans">{item.name}</span>
                    <span className="text-primary font-bold text-xl">{item.price}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center flex justify-center">
                <a href="#services" className="relative group block">
                <LiquidButton size="xl" variant="primary" className="text-white">
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
