export default function MapSection() {
  return (
    <section id="map" className="relative w-full bg-[#1b1b1b] border-t-4 border-primary">
      <div className="w-full h-[450px]">
        <iframe 
          width="100%" 
          height="100%" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?q=Sabelhof%2010,%206852%20TH%20Huissen,%20Netherlands&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0}
          title="Ba.Cutz Location in Huissen"
        ></iframe>
      </div>
    </section>
  );
}
