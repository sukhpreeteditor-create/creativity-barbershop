import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed K.',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Creativity Barbershop is a breath of fresh air in Doha. It is bright, modern, stylish and a wonderful environment top-tier cuts. Open late which is perfect.',
  },
  {
    name: 'Omar S.',
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'Top-notch service in Qatar. I couldn\'t have been more pleased. I always leave with a fresh fade and feeling completely relaxed.',
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
            USE COUPON CODE: <span className="font-bold">CREATIVITY20</span>
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start relative border-t-4 border-primary">
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
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
