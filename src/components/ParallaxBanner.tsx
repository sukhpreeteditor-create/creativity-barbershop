const hours = [
  { day: 'MON', time: '10:00 AM - 8:00 PM', bg: 'bg-[#5b8068]' },
  { day: 'TUE', time: '10:00 AM - 8:00 PM', bg: 'bg-[#5b8068]' },
  { day: 'WED', time: '10:00 AM - 8:00 PM', bg: 'bg-[#5b8068]' },
  { day: 'THU', time: '10:00 AM - 8:00 PM', bg: 'bg-[#5b8068]' },
  { day: 'FRI', time: '10:00 AM - 8:00 PM', bg: 'bg-[#5b8068]' },
  { day: 'SAT', time: '10:00 AM - 6:00 PM', bg: 'bg-[#5b8068]' },
  { day: 'SUN', time: 'Closed', bg: 'bg-gray-700' },
];

export default function ParallaxBanner() {
  return (
    <section 
      className="relative py-24 bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url(https://i.ibb.co/0Wb275f/Screenshot-2026-04-30-153410.png)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-heading tracking-wide uppercase">Housecall & Salon Hours</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {hours.map((h, i) => (
            <div key={i} className={`${h.bg} text-white flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-md transition-transform hover:-translate-y-2`}>
              <div className="font-heading text-2xl font-bold mb-2">{h.day}</div>
              <div className="text-xs tracking-wider opacity-90 text-center px-2">{h.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
