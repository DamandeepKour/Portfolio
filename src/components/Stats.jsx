import { useScrollReveal } from '../hooks/useScrollReveal';

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
      className="reveal-on-scroll flex justify-center border-y border-white/[0.07] bg-[#0d0d1a]"
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex-1 max-w-[200px] text-center px-4 py-7 ${i < stats.length - 1 ? 'border-r border-white/[0.07]' : ''}`}
        >
          <div className="text-[28px] font-bold text-[#f0f0f5]">
            {s.num}<span className="text-[#7f77dd]">{s.suffix}</span>
          </div>
          <div className="text-xs text-[#8888a0] mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
