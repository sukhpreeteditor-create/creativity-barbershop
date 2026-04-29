import { Instagram, Facebook } from 'lucide-react';

const team = [
  {
    name: 'Ahmed Maestro',
    role: 'Master Barber',
    desc: 'Specializing in precision fades and classic styling in Doha.',
    email: 'ahmed@creativitybarbershop.com',
    image: 'https://i.ibb.co/CsTgdHd4/Screenshot-2026-04-29-165628.png'
  },
  {
    name: 'Zaid T.',
    role: 'Beard Specialist',
    desc: 'Years of experience crafting the perfect sharp beard edges.',
    email: 'zaid@creativitybarbershop.com',
    image: 'https://i.ibb.co/xt8QdcDx/Screenshot-2026-04-29-165648.png'
  }
];

export default function TeamSection() {
  return (
    <>
      <section className="py-24 bg-white" id="stylists">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm mb-2 font-semibold">Meet our team of grooming professionals</p>
            <h2 className="text-4xl md:text-5xl font-heading text-[#333] uppercase">Our Barbers and Stylists</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col pt-4">
                <div className="overflow-hidden mb-6 relative shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-xl font-heading font-medium tracking-wide border-b border-gray-200 pb-2 mb-2 text-[#333]">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold text-sm uppercase mb-4 font-sans tracking-wide">
                  {member.role}
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.desc}
                </p>
                <div className="text-sm text-gray-500 mb-6">
                  Email: <a href={`mailto:${member.email}`} className="text-primary hover:underline font-medium break-all">{member.email}</a>
                </div>
                
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                  <a href="https://www.facebook.com/108024668694852" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors"><Facebook size={14} /></a>
                  <a href="https://www.instagram.com/barbercreativity" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors"><Instagram size={14} /></a>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
