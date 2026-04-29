export default function MapSection() {
  return (
    <section id="map" className="relative w-full bg-[#1b1b1b] border-t-4 border-primary">
      <div className="w-full h-[450px]">
        <iframe 
          width="100%" 
          height="100%" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?q=Creativity%20Barbershop,%20Al%20Manara%20St,%20Doha,%20Qatar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0}
          title="Creativity Barbershop Location in Doha"
        ></iframe>
      </div>
    </section>
  );
}
