import { Phone, MapPin, Home, Instagram } from 'lucide-react';

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
              Welcome to <span className="font-bold text-white">Ba.Cutz</span>, the top-rated certified hairdresser in Huissen, Netherlands. Housecall services available to bring premium grooming to you.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@bacutz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" height="18" width="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/ba.cutzz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Tags Widget */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Our Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {['fade', 'housecalls', 'styling', 'haircuts', 'netherlands', 'huissen', 'certified', 'grooming'].map((tag, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`border border-gray-700 hover:border-primary hover:text-primary transition-colors rounded-full px-3 py-1 text-sm capitalize ${[0,1,5].includes(i) ? 'text-base font-bold text-gray-300' : ''}`}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Book your next appointment online or request a housecall service.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  <a href="https://maps.app.goo.gl/355r1aR5V3" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Sabelhof 10, Huissen 6852TH
                    <br /> Netherlands
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>Housecalls Available 📞</span>
              </li>
              <li className="flex items-center gap-3">
                <Home size={16} className="text-primary flex-shrink-0" />
                <a href="https://calendly.com/bacutz/ba-cutz-knippen" target="_blank" rel="noreferrer" className="text-white font-bold hover:text-primary transition-colors">Book Online!</a>
              </li>
            </ul>
          </div>

          {/* Story Highlights */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Highlights
            </h3>
            <div className="space-y-3 text-sm">
              {[
                { name: 'Housecalls 📞', val: 'Available' },
                { name: 'Brazilië U17', val: 'Br' },
                { name: 'Oostenrijk U17', val: 'At' },
                { name: 'Frankrijk U17', val: 'Fr' },
                { name: 'Duitsland U17', val: 'De' },
                { name: 'Engeland U17', val: 'En' },
                { name: 'Portugal U17', val: 'Pt' },
                { name: 'België U17', val: 'Be' },
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
            <span className="text-white font-heading uppercase tracking-widest text-lg ml-2">Ba.Cutz</span>
          </div>
          <div>
             &copy; {new Date().getFullYear()} Ba.Cutz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
