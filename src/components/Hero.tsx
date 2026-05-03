import ScrollExpandMedia from './ui/scroll-expansion-hero';
import { LiquidButton } from './ui/liquid-glass-button';

export default function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://i.ibb.co/zhCddYfm/Screenshot-2026-05-02-180708.png"
      bgImageSrc="https://i.ibb.co/zhCddYfm/Screenshot-2026-05-02-180708.png"
      title="AALZBLENDZ Brums_Best Barbers"
      date="Book appointments via DM ⬇️"
      scrollToExpand="Scroll to Expand"
      textBlend={false}
    >
      <div className="flex justify-center mt-[-60px] md:mt-[-80px] mb-16 relative z-30">
        <a href="#services" className="relative group block">
          <LiquidButton variant="primary" size="xxl" className="text-white text-sm md:text-base font-semibold tracking-[2px] uppercase">
            Book An Appointment
          </LiquidButton>
        </a>
      </div>
    </ScrollExpandMedia>
  );
}
