import { useState } from 'react';
import { Star } from 'lucide-react';
import { TestimonialCard } from './ui/testimonial-cards';

const testimonials = [
  {
    author: 'Kevin D.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    testimonial: 'Very professional barbers and a friendly team. Clean, modern shop with strong customer satisfaction. The premium experience is worth every penny.',
  },
  {
    author: 'Jeroen M.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200',
    testimonial: 'Top-notch service! I couldn\'t have been more pleased. I always leave with a fresh, high-quality fade and feeling completely relaxed.',
  },
  {
    author: 'Ahmed S.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    testimonial: 'Best barber shop in the city! Clean lines, great atmosphere, and the stylists really know what they are doing. Highly recommended.',
  }
];

export default function Testimonials() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const first = newPositions.pop();
    if(first) newPositions.unshift(first);
    setPositions(newPositions);
  };

  return (
    <section className="bg-[#f4f4f4] py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Banner */}
        <div className="bg-primary text-center py-10 px-4 shadow-lg rounded-[2rem] mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-2">
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
             <Star fill="currentColor" strokeWidth={0} size={28} />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-heading tracking-wide mb-2 uppercase">
            Rated 5.0 ⭐ <span className="text-xl md:text-2xl opacity-90">(600+ Reviews)</span>
          </h2>
          <p className="text-white text-sm font-medium uppercase tracking-widest mt-4 bg-black/20 px-6 py-3 rounded-full inline-block">
            USE COUPON CODE: <span className="font-bold underline underline-offset-4">BARHOUMI20</span>
          </p>
        </div>
        
        {/* Shuffle Cards Testimonials Stack */}
        <div className="grid place-content-center">
          <div className="text-center mb-8">
             <h3 className="text-3xl font-heading uppercase text-[#333]">What Our Clients Say</h3>
             <p className="text-gray-500 mt-2 text-sm max-w-sm mx-auto uppercase tracking-wider font-semibold">Swipe to see more reviews</p>
             <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4"></div>
          </div>
          
          {/* Centering container for the cards */}
          <div className="relative h-[450px] w-full max-w-[340px] md:max-w-none md:w-[500px] flex justify-center translate-x-[-10%] md:translate-x-[-20%] isolate touch-none">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
