import './CodingScene.css';

const particles = [
  { label: 'API', x: '8%', y: '15%', delay: '0s', color: '#7f77dd' },
  { label: 'SaaS', x: '88%', y: '25%', delay: '-1.5s', color: '#5dcaa5' },
  { label: 'Docker', x: '92%', y: '70%', delay: '-3s', color: '#ef9f27' },
  { label: 'React', x: '5%', y: '75%', delay: '-2s', color: '#afa9ec' },
];

export default function FloatingMotion() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.label}
          className="motion-symbol absolute text-[11px] font-semibold tracking-wide px-2 py-1 rounded-lg border border-white/[0.06] bg-[#14141f]/60 backdrop-blur-sm"
          style={{
            left: p.x,
            top: p.y,
            color: p.color,
            animationDelay: p.delay,
          }}
        >
          {p.label}
        </span>
      ))}
    </div>
  );
}
