import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Galaxy from './components/Galaxy';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080810] text-[#f0f0f5] font-sans overflow-x-hidden">
      {/* Galaxy background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={0.8}
          glowIntensity={0.25}
          saturation={20}
          hueShift={240}
          twinkleIntensity={0.3}
          rotationSpeed={0.05}
          repulsionStrength={1.5}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.7}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
