import { damandeepImg } from '../assets/damandeepImg';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs text-[#5dcaa5] uppercase tracking-widest mb-2.5">Who I Am</div>
        <div className="text-[32px] font-bold text-[#f0f0f5]">About Me</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative w-[240px] h-[240px]">
            {/* Spinning ring */}
            <div
              className="absolute inset-[-4px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #7f77dd, #5dcaa5, #7f77dd)',
                animation: 'spin 8s linear infinite',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
                padding: '2px',
              }}
            />
            <div className="w-[240px] h-[240px] rounded-full overflow-hidden border-2 border-white/[0.12]">
              <img
                src={damandeepImg}
                alt="Damandeep Kour"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Badges */}
            <div className="absolute bottom-2 -right-2 flex flex-col gap-1.5">
              {[
                { color: '#5dcaa5', label: 'Open to work' },
                { color: '#7f77dd', label: 'MERN Expert' },
                { color: '#ef9f27', label: 'Chandigarh, IN' },
              ].map(b => (
                <div key={b.label} className="bg-[#14141f] border border-white/[0.12] rounded-lg px-2.5 py-1 text-[11px] text-[#8888a0] flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: b.color }} />
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-[24px] font-bold mb-3.5">Senior Developer & SaaS Architect</h3>
          <p className="text-[#8888a0] leading-[1.75] text-[15px] mb-4">
            I'm a results-driven Full Stack Developer with 3+ years building production-grade web applications. I specialize in designing scalable microservices architectures, high-performance REST APIs, and multi-tenant SaaS platforms that handle real workloads.
          </p>
          <p className="text-[#8888a0] leading-[1.75] text-[15px] mb-5">
            My approach blends clean code philosophy with pragmatic engineering — shipping fast without sacrificing quality, security, or maintainability. I care deeply about developer experience, system reliability, and writing code that teams can understand six months later.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {['System Design','API Architecture','Performance Tuning','Code Reviews','Agile / Scrum'].map(pill => (
              <span key={pill} className="bg-[rgba(127,119,221,0.1)] border border-[rgba(127,119,221,0.25)] text-[#afa9ec] text-xs px-3 py-1 rounded-[16px]">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
