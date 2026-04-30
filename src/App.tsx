import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalleryAndPricing from './components/GalleryAndPricing';
import ParallaxBanner from './components/ParallaxBanner';
import ServicesAndStory from './components/ServicesAndStory';
import Testimonials from './components/Testimonials';
import TeamSection from './components/TeamSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import { ParticleTextEffect } from './components/ui/particle-text-effect';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <GalleryAndPricing />
      <ParallaxBanner />
      <ServicesAndStory />
      <Testimonials />
      <TeamSection />
      <MapSection />
      <ParticleTextEffect />
      <Footer />
    </div>
  );
}
