const galleryImages = [
  { url: 'https://i.ibb.co/HpNm6YyT/Screenshot-2026-04-29-165053.png', alt: 'Precision Fade' },
  { url: 'https://i.ibb.co/2V4FXsn/Screenshot-2026-04-29-165137.png', alt: 'Sharp Edges' },
  { url: 'https://i.ibb.co/zTyZ1sRT/Screenshot-2026-04-29-165221.png', alt: 'Clean Cut' },
  { url: 'https://i.ibb.co/fVFg8kt3/Screenshot-2026-04-29-165244.png', alt: 'Classic Pompadour' },
  { url: 'https://i.ibb.co/35mCpTKS/Screenshot-2026-04-29-164930.png', alt: 'Modern Style' },
  { url: 'https://i.ibb.co/M5p5zjcq/Screenshot-2026-04-29-165010.png', alt: 'Textured Crop' },
  { url: 'https://i.ibb.co/kpLHY7P/Screenshot-2026-04-29-165026.png', alt: 'Full Beard Trim' },
  { url: 'https://i.ibb.co/HpNm6YyT/Screenshot-2026-04-29-165053.png', alt: 'Executive Look' },
];

export default function GalleryAndPricing() {
  const prices = [
    { name: 'Classic Haircut', price: 'from 50 QAR' },
    { name: 'Executive Haircut', price: 'from 80 QAR' },
    { name: 'Beard Trim', price: 'from 35 QAR' },
    { name: 'Hot Towel Shave', price: 'from 60 QAR' },
    { name: 'Kids Haircut', price: 'from 30 QAR' },
    { name: 'Complete Package', price: 'from 120 QAR' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery Section */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-[#333] mb-4 uppercase">Popular Beard Styles</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2">
              {galleryImages.map((img, i) => (
                <div key={i} className="group relative overflow-hidden cursor-pointer">
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
                </div>
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
                <a href="#" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 font-semibold uppercase text-sm tracking-wider">
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
