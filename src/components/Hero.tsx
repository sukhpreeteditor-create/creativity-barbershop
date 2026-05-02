import ScrollExpandMedia from './ui/scroll-expansion-hero';
import { LiquidButton } from './ui/liquid-glass-button';

export default function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://i.ibb.co/Y4Kh7DSX/Screenshot-2026-04-30-153457.png"
      bgImageSrc="https://i.ibb.co/Y4Kh7DSX/Screenshot-2026-04-30-153457.png"
      title="Barhoumi Barber Salon"
      date="Premium Grooming Experience"
      scrollToExpand="Scroll to Expand"
      textBlend={false}
    >
      <div className="flex justify-center mt-[-60px] md:mt-[-80px] mb-16 relative z-30">
        <a href="#services" className="relative group block">
          <LiquidButton size="xxl" className="text-white bg-primary border-none text-sm md:text-base font-semibold tracking-[2px] uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Book An Appointment
          </LiquidButton>
        </a>
      </div>
    </ScrollExpandMedia>
  );
}
