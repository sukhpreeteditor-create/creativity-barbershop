import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Kevin D.',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Ba.Cutz is a breath of fresh air. It is bright, modern, stylish and a wonderful environment for top-tier cuts. The housecall service is perfect for my busy schedule.',
  },
  {
    name: 'Jeroen M.',
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'Top-notch service in the Netherlands. I couldn\'t have been more pleased. I always leave with a fresh fade and feeling completely relaxed.',
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#f4f4f4] py-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Banner */}
        <div className="bg-primary text-center py-10 px-4 shadow-lg mb-20 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-2">
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-heading tracking-wide mb-2">
            RATED 4.8 ⭐ <span className="text-xl md:text-2xl opacity-90">(19 REVIEWS)</span>
          </h2>
          <p className="text-white font-medium uppercase tracking-wider mt-2 bg-black/20 px-4 py-2 rounded-full inline-block">
            USE COUPON CODE: <span className="font-bold">BACUTZ20</span>
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 shadow-xl rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start relative border-t-4 border-primary"
            >
              <img 
                src={t.image} 
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <Quote className="text-gray-200 w-10 h-10 mb-2 mx-auto md:mx-0" />
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="font-semibold text-gray-800 uppercase tracking-widest text-xs font-sans">
                  {t.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
