import { Phone, MapPin, Home, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0e] text-gray-400">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Info Widget */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Information
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Welcome to <span className="font-bold text-white">AALZBLENDZ</span> | Brums Best Barbers 💈. Book appointments via DM ⬇️ Make sure to leave a review ⭐⭐⭐⭐⭐
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.tiktok.com/@aalzblendz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" height="18" width="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68l.01.2a6.33 6.33 0 0011.66 2.66 6.35 6.35 0 001.07-3.56V8.16c1.65.65 3.36 1.08 5.25 1.15V5.88a7.07 7.07 0 01-3.4-1.19z"/></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/aalzblendz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Tags Widget */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Payments
            </h3>
            <p className="text-white">Cash & Bank Transfer only</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['hair', 'beard', 'shave', 'hot towel', 'facial', 'wax'].map((tag, i) => (
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
              Contact today for bookings.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  <a href="#" className="hover:text-white transition-colors">
                    117b Pottery Road, Birmingham,<br/> United Kingdom B689HE
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>07858324247</span>
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
                { name: 'Hair & Beard', val: '£20' },
                { name: 'Hair', val: '£15' },
                { name: 'Shave / Beard Trim', val: '£10' },
                { name: 'Full Facial', val: '£10' },
                { name: 'Hot Towel', val: '£7' },
                { name: 'Wax / Black Mask', val: '£5' },
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
      <div className="bg-[#050508] py-8 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>Trim your hair at</span>
            <span className="text-white font-heading uppercase tracking-widest text-lg ml-2">AALZBLENDZ</span>
          </div>
          <div>
             &copy; {new Date().getFullYear()} AALZBLENDZ. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
