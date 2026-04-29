import { Phone, MapPin, Home, Facebook, Instagram } from 'lucide-react';

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
              Welcome to <span className="font-bold text-white">Creativity Barbershop</span>, top-rated grooming in Doha, Qatar. Our master barbers ensure every client leaves looking sharp and feeling confident.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/108024668694852" target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/barbercreativity" target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
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
              {['fade', 'beard trim', 'hot towel', 'styling', 'shave', 'haircuts', 'doha', 'qatar', 'grooming', 'salon'].map((tag, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`border border-gray-700 hover:border-primary hover:text-primary transition-colors px-3 py-1 text-sm capitalize ${[0,1,6,7].includes(i) ? 'text-base font-bold text-gray-300' : ''}`}
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
              Drop by our salon or call to book your next appointment. Walk-ins are always welcome.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  <a href="https://maps.app.goo.gl/eayyLQtVBzMxRBEv6" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Al Manara St, Plus Code: 7FMW+GP
                    <br /> Doha, Qatar
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+97433348939" className="hover:text-white transition-colors">+974 3334 8939</a>
              </li>
              <li className="flex items-center gap-3">
                <Home size={16} className="text-primary flex-shrink-0" />
                <span className="text-white font-bold">Open Now!</span>
              </li>
            </ul>
          </div>

          {/* Opening Times */}
          <div>
            <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
              Opening Times
            </h3>
            <div className="space-y-3 text-sm">
              {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(day => (
                <div key={day} className="flex justify-between border-b border-gray-800 pb-2">
                  <span>{day}</span><span className="text-white">9:00 AM - 2:00 AM</span>
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
            <span>Trim your beard at</span>
            <span className="text-white font-heading uppercase tracking-widest text-lg ml-2">Creativity Barbershop</span>
          </div>
          <div>
             &copy; {new Date().getFullYear()} Creativity Barbershop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
