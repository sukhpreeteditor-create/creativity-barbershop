const hours = [
  { day: 'MON', time: '9:00 AM - 2:00 AM', bg: 'bg-[#5b8068]' },
  { day: 'TUE', time: '9:00 AM - 2:00 AM', bg: 'bg-[#5b8068]' },
  { day: 'WED', time: '9:00 AM - 2:00 AM', bg: 'bg-[#5b8068]' },
  { day: 'THU', time: '9:00 AM - 2:00 AM', bg: 'bg-[#5b8068]' },
  { day: 'FRI', time: '9:00 AM - 2:00 AM', bg: 'bg-[#5b8068]' },
  { day: 'SAT', time: '9:00 AM - 2:00 AM', bg: 'bg-[#5b8068]' },
  { day: 'SUN', time: '9:00 AM - 2:00 AM', bg: 'bg-[#5b8068]' },
];

export default function ParallaxBanner() {
  return (
    <section 
      className="relative py-24 bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url(https://i.ibb.co/2V4FXsn/Screenshot-2026-04-29-165137.png)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-heading tracking-wide uppercase">Open Now</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {hours.map((h, i) => (
            <div key={i} className={`${h.bg} text-white flex flex-col items-center justify-center w-32 h-32 rounded-sm shadow-md transition-transform hover:-translate-y-2`}>
              <div className="font-heading text-2xl font-bold mb-2">{h.day}</div>
              <div className="text-xs tracking-wider opacity-90">{h.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
