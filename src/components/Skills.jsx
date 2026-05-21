import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'React / Frontend', pct: 92, fill: 'linear-gradient(90deg, #7f77dd, #afa9ec)' },
  { name: 'Node.js / Backend', pct: 90, fill: 'linear-gradient(90deg, #7f77dd, #afa9ec)' },
  { name: 'MongoDB / Databases', pct: 85, fill: 'linear-gradient(90deg, #5dcaa5, #9fe1cb)' },
  { name: 'Docker', pct: 75, fill: 'linear-gradient(90deg, #ef9f27, #fac775)' },
  { name: 'Go (Golang)', pct: 65, fill: 'linear-gradient(90deg, #ef9f27, #fac775)' },
];

const strengths = [
  { icon: '🏗', label: 'Architecture', desc: 'Scalable system design from day one', bg: 'rgba(127,119,221,0.07)', border: 'rgba(127,119,221,0.15)' },
  { icon: '🔍', label: 'Code Quality', desc: 'Reviews, testing & clean patterns', bg: 'rgba(93,202,165,0.07)', border: 'rgba(93,202,165,0.15)' },
  { icon: '📊', label: 'Performance', desc: 'Profiling, caching & optimization', bg: 'rgba(239,159,39,0.07)', border: 'rgba(239,159,39,0.15)' },
  { icon: '🤝', label: 'Leadership', desc: 'Mentoring & technical ownership', bg: 'rgba(212,83,126,0.07)', border: 'rgba(212,83,126,0.15)' },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs text-[#5dcaa5] uppercase tracking-widest mb-2.5">Expertise Level</div>
        <div className="text-[32px] font-bold">Core Skills</div>
      </div>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Skill bars */}
        <div className="flex flex-col gap-[18px]">
          {skills.map(s => (
            <div key={s.name}>
              <div className="flex justify-between mb-1.5 text-[13px]">
                <span className="text-[#f0f0f5]">{s.name}</span>
                <span className="text-[#8888a0] text-xs">{s.pct}%</span>
              </div>
              <div className="h-[5px] bg-white/[0.06] rounded overflow-hidden">
                <div
                  className="h-full rounded transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${s.pct}%` : '0%',
                    background: s.fill,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Strengths grid */}
        <div className="bg-[#14141f] border border-white/[0.07] rounded-[20px] p-7">
          <div className="text-[13px] text-[#8888a0] mb-5 leading-[1.6]">
            Beyond code — I bring a senior engineer's mindset to every project.
          </div>
          <div className="grid grid-cols-2 gap-4">
            {strengths.map(s => (
              <div
                key={s.label}
                className="p-3.5 rounded-xl"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="text-xl mb-1.5">{s.icon}</div>
                <div className="text-[13px] font-medium mb-1">{s.label}</div>
                <div className="text-[12px] text-[#8888a0]">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
