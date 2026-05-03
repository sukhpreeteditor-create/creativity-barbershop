import { Phone, MapPin, Home, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0e] text-gray-400">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Info Widget */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Information
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Welcome to <span className="font-bold text-white">Airoli Aaji</span>. Premium cuts and fresh fades. Book your appointment via DM. Let the results speak for themselves.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/sam.the_b?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Tags Widget */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Services
            </h3>
            <p className="text-white">Premium Quality & Detail</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Skin Fade', 'Scissor Cut', 'Beard Trim', 'Line Up', 'Styling'].map((tag, i) => (
                <span 
                  key={i} 
                  className="border border-gray-700 rounded-full px-3 py-1 text-sm capitalize text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Location
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Check out our location on Maps
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  <a href="https://maps.app.goo.gl/2jC1RB7EXZnf7dG99" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Find us on Google Maps<br/> Airoli Aaji
                  </a>
                </span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Lower Footer */}
      <div className="bg-[#050508] py-8 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-white font-heading uppercase tracking-widest text-lg ml-2">Airoli Aaji</span>
          </div>
          <div>
             &copy; {new Date().getFullYear()} Airoli Aaji. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
