import { Phone, MapPin, Home, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-400">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Info Widget */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Information
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Welcome to <span className="font-bold text-white">Cutchino Men's Salon</span>, the top-rated premium barber brand in Doha, Qatar. Experience clean fades and sharp lines.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://www.tiktok.com/@sam_da_barber?_t=ZS-90I4rtWXH0&_r=1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" height="18" width="18"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/cutchino_qatar/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Tags Widget */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Our Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {['fades', 'highlights', 'styling', 'haircuts', 'doha', 'qatar', 'premium', 'facial'].map((tag, i) => (
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={i} 
                  href="#" 
                  className={`border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-full px-3 py-1 text-sm capitalize ${[0,1,5].includes(i) ? 'text-base font-bold text-gray-300' : ''}`}
                >
                  {tag}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Book your next appointment and experience premium grooming.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  <a href="https://maps.app.goo.gl/mJFqW23Gz4F1PLxb8" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Doha, Qatar
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+974 5513 7732</span>
              </li>
              <li className="flex items-center gap-3">
                <Home size={16} className="text-primary flex-shrink-0" />
                <a href="#services" className="text-white font-bold hover:text-primary transition-colors">View Services</a>
              </li>
            </ul>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Popular
            </h3>
            <div className="space-y-3 text-sm">
              {[
                { name: 'Hair Dyeing', val: '600 QAR' },
                { name: 'L’Oréal X-Tenso', val: '1000 QAR' },
                { name: 'Highlights', val: '500 QAR' },
                { name: 'Perm', val: '500 QAR' },
                { name: 'Hydra Facial', val: '200 QAR' },
                { name: 'Haircut', val: '70 QAR' },
              ].map(highlight => (
                <div key={highlight.name} className="flex justify-between border-b border-gray-800 pb-2">
                  <span>{highlight.name}</span><span className="text-white">{highlight.val}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Lower Footer */}
      <div className="bg-[#141414] py-8 border-t border-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>Trim your hair at</span>
            <span className="text-white font-heading uppercase tracking-widest text-lg ml-2">Cutchino</span>
          </div>
          <div>
             &copy; {new Date().getFullYear()} Cutchino Men's Salon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
