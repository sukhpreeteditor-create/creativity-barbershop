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
              Welcome to <span className="font-bold text-white">Barhoumi Barber</span>, the top-rated premium barber brand. Experience clean fades and sharp lines.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://www.threads.net/@barhoumi.tarek.56" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16"><path d="M14.939 12.352c-.179.623-.538 1.127-1.077 1.512-.538.384-1.127.576-1.767.576s-1.229-.192-1.767-.576c-.538-.385-.898-.889-1.077-1.512h5.688zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-3 0c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zM8.905 12h-2.14c.264-1.119.866-2.025 1.808-2.716C9.516 8.592 10.669 8.247 12 8.247s2.484.346 3.427 1.037c.942.69 1.544 1.597 1.808 2.716h-2.14c-.179-.623-.538-1.127-1.077-1.512-.538-.384-1.127-.576-1.767-.576s-1.229.192-1.767.576c-.538.385-.898.889-1.077 1.512z"/></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/barhoumi.tarek.56?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
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
              {['fades', 'highlights', 'styling', 'haircuts', 'premium', 'facial'].map((tag, i) => (
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
                  <a href="#" className="hover:text-white transition-colors">
                    Find us on Instagram
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
            <span className="text-white font-heading uppercase tracking-widest text-lg ml-2">Barhoumi</span>
          </div>
          <div>
             &copy; {new Date().getFullYear()} Barhoumi Barber. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
