import Orb from '../Orb';
import CodingScene from './CodingScene';
import FloatingMotion from './FloatingMotion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const heroVisualRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-16 max-w-6xl mx-auto"
    >
      <FloatingMotion />
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-1.5 bg-[rgba(127,119,221,0.12)] border border-[rgba(127,119,221,0.3)] text-[#afa9ec] text-xs px-3.5 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5dcaa5] animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-[clamp(36px,6vw,68px)] font-bold leading-[1.1] tracking-tight mb-4">
          Damandeep Kour
          <br />
          <span className="bg-gradient-to-br from-[#afa9ec] via-[#7f77dd] to-[#5dcaa5] bg-clip-text text-transparent">
            Full Stack Engineer
          </span>
        </h1>

        <p className="text-[16px] text-[#8888a0] max-w-[520px] leading-[1.7] mb-8 mx-auto lg:mx-0">
          Crafting scalable SaaS platforms & distributed systems. 3+ years turning complex problems into elegant, production-ready solutions.
        </p>

        <div className="flex flex-wrap gap-2 mb-9 justify-center lg:justify-start">
          {['MERN Stack','Microservices','SaaS Architecture','API Design'].map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-xl border border-white/[0.12] text-[#8888a0]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
          <button
            onClick={() => scrollTo('projects')}
            className="bg-[#7f77dd] text-white border-none px-7 py-2.5 rounded-[24px] text-sm cursor-pointer hover:opacity-[0.88] hover:-translate-y-px transition-all font-medium"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-transparent text-[#f0f0f5] border border-white/[0.12] px-7 py-2.5 rounded-[24px] text-sm cursor-pointer hover:border-white/30 transition-all"
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* Motion graphics: developer + orb */}
      <div
        ref={heroVisualRef}
        className="reveal-on-scroll relative flex-shrink-0 w-full max-w-[420px] lg:max-w-[480px]"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
          <div className="w-[220px] h-[220px] lg:w-[280px] lg:h-[280px]">
            <Orb
              hoverIntensity={2}
              rotateOnHover
              hue={0}
              forceHoverState={false}
              backgroundColor="#080810"
            />
          </div>
        </div>
        <CodingScene />
      </div>
    </section>
  );
}
