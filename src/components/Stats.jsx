import { useScrollReveal } from '../hooks/useScrollReveal';
import CodingScene from './CodingScene';

const stats = [
  { num: '3', suffix: '+', label: 'Years Experience' },
  { num: '12', suffix: '+', label: 'Projects Shipped' },
  { num: '5', suffix: '+', label: 'SaaS Products Built' },
  { num: '99', suffix: '%', label: 'Uptime Maintained' },
];

export default function Stats() {
  const statsRef = useScrollReveal({ threshold: 0.3 });

  return (
    <div
      ref={statsRef}
      className="reveal-on-scroll border-y border-white/[0.07] bg-[#0d0d1a]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 px-4 py-4 sm:py-2">
        {/* <div className="flex justify-center sm:flex-shrink-0 sm:w-[160px] sm:py-2">
          <CodingScene variant="stats" compact />
        </div> */}
        <div className="flex flex-1 justify-center min-w-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex-1 max-w-[200px] text-center px-3 sm:px-4 py-5 sm:py-7 ${i < stats.length - 1 ? 'border-r border-white/[0.07]' : ''}`}
            >
              <div className="text-[24px] sm:text-[28px] font-bold text-[#f0f0f5]">
                {s.num}<span className="text-[#7f77dd]">{s.suffix}</span>
              </div>
              <div className="text-[11px] sm:text-xs text-[#8888a0] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
