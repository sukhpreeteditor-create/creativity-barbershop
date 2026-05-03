import * as React from 'react';
import { motion, PanInfo } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  image: string;
  author: string;
}

export function TestimonialCard ({ handleShuffle, testimonial, position, image, author }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "20%" : "40%",
        scale: position === "front" ? 1 : position === "middle" ? 0.95 : 0.9,
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e, info: PanInfo) => {
        dragRef.current = info.point.x;
      }}
      onDragEnd={(e, info: PanInfo) => {
        if (dragRef.current - info.point.x > 50 || dragRef.current - info.point.x < -50) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[400px] w-full max-w-[300px] sm:max-w-[340px] sm:h-[450px] select-none place-content-center space-y-6 rounded-[2rem] border border-white/10 bg-[#151518] p-6 sm:p-8 shadow-[0_0_30px_rgba(157,78,221,0.15)] ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Quote className="text-white/5 w-16 h-16 absolute top-6 right-6 -z-10" />
      <img
        src={image}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-24 w-24 sm:h-28 sm:w-28 rounded-full border-[6px] border-[#0b0b0e] object-cover shadow-sm bg-black/50"
      />
      <span className="text-center text-base sm:text-lg italic text-gray-300 line-clamp-4 leading-relaxed font-serif">"{testimonial}"</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-center text-sm font-bold uppercase tracking-widest text-white">{author}</span>
        <div className="flex text-yellow-400 gap-1 text-sm">
          ★ ★ ★ ★ ★
        </div>
      </div>
    </motion.div>
  );
};
