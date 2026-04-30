import { motion } from 'motion/react';

const galleryImages = [
  { url: 'https://i.ibb.co/0Wb275f/Screenshot-2026-04-30-153410.png', alt: 'Housecall Service' },
  { url: 'https://i.ibb.co/679MPTbk/Screenshot-2026-04-30-153423.png', alt: 'Housecall Service' },
  { url: 'https://i.ibb.co/Y4Kh7DSX/Screenshot-2026-04-30-153457.png', alt: 'Housecall Service' },
  { url: 'https://i.ibb.co/yFDNQyrw/Screenshot-2026-04-30-153756.png', alt: 'Brazilië U17' },
  { url: 'https://i.ibb.co/BX3NCZD/Screenshot-2026-04-30-153835.png', alt: 'Brazilië U17' },
  { url: 'https://i.ibb.co/0pHwTpBk/Screenshot-2026-04-30-154037.png', alt: 'Oostenrijk U17' },
  { url: 'https://i.ibb.co/W4gD6hxy/Screenshot-2026-04-30-154054.png', alt: 'Oostenrijk U17' },
  { url: 'https://i.ibb.co/wFWvLfPH/Screenshot-2026-04-30-154205.png', alt: 'Frankrijk U17' },
  { url: 'https://i.ibb.co/wFqmVH2S/Screenshot-2026-04-30-154229.png', alt: 'Frankrijk U17' },
  { url: 'https://i.ibb.co/zTJt3939/Screenshot-2026-04-30-154405.png', alt: 'Duitsland U17' },
  { url: 'https://i.ibb.co/7fVTXKG/Screenshot-2026-04-30-154415.png', alt: 'Duitsland U17' },
  { url: 'https://i.ibb.co/B5LCRt80/Screenshot-2026-04-30-154616.png', alt: 'Engeland U17' },
  { url: 'https://i.ibb.co/35RNr7Lz/Screenshot-2026-04-30-154632.png', alt: 'Engeland U17' },
  { url: 'https://i.ibb.co/9HPNmM1X/Screenshot-2026-04-30-154734.png', alt: 'Portugal U17' },
  { url: 'https://i.ibb.co/KjK8Yk6M/Screenshot-2026-04-30-154747.png', alt: 'Portugal U17' },
  { url: 'https://i.ibb.co/LdkGc9k6/Screenshot-2026-04-30-155004.png', alt: 'België U17' },
  { url: 'https://i.ibb.co/vSTVD5s/Screenshot-2026-04-30-155018.png', alt: 'België U17' },
];

export default function GalleryAndPricing() {
  const prices = [
    { name: 'Classic Haircut', price: 'from €35' },
    { name: 'Executive Haircut', price: 'from €50' },
    { name: 'Beard Trim', price: 'from €25' },
    { name: 'Hot Towel Shave', price: 'from €35' },
    { name: 'Kids Haircut', price: 'from €25' },
    { name: 'Housecall Service', price: 'Contact Us' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery Section */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Gallery & Professional Work</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 border-[6px] border-white shadow-xl rounded-xl overflow-hidden bg-white">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <img 
                    src={img.url}
                    alt={img.alt} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold uppercase tracking-wider text-center px-2">
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
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="bg-[#f9f9f9] border border-gray-200 p-8">
              <ul className="space-y-6">
                {prices.map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <span className="font-semibold text-[#333] text-lg font-sans">{item.name}</span>
                    <span className="text-primary font-bold text-xl">{item.price}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <a href="#" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full px-6 py-3 font-semibold uppercase text-sm tracking-wider">
                  View All Prices
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
