export default function MapSection() {
  return (
    <section id="map" className="relative w-full bg-[#0b0b0e] border-t-4 border-primary">
      <div className="w-full h-[450px]">
        <iframe 
          width="100%" 
          height="100%" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?q=117b%20Pottery%20Road,%20Birmingham&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0}
          title="AAlzblendz Location"
        ></iframe>
      </div>
    </section>
  );
}
