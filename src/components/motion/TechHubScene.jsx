import './TechHubScene.css';

const NODES = [
  { id: 'fe', label: 'React', icon: '⚛', color: '#afa9ec', x: '18%', y: '22%', delay: '0s' },
  { id: 'be', label: 'Node', icon: '⚡', color: '#5dcaa5', x: '78%', y: '18%', delay: '-0.5s' },
  { id: 'db', label: 'MongoDB', icon: '🗄', color: '#ef9f27', x: '82%', y: '72%', delay: '-1s' },
  { id: 'cloud', label: 'AWS', icon: '☁', color: '#d4537e', x: '12%', y: '68%', delay: '-1.5s' },
];

const BARS = [40, 65, 85, 55, 72, 90];

/** Data / architecture hub motion graphic — distinct from developer-at-laptop hero. */
export default function TechHubScene() {
  return (
    <div className="tech-hub" aria-hidden="true">
      <div className="tech-hub__grid" />
      <div className="tech-hub__pulse" />

      <svg className="tech-hub__lines" viewBox="0 0 320 280" preserveAspectRatio="none">
        <line x1="160" y1="140" x2="64" y2="70" className="tech-hub__line" />
        <line x1="160" y1="140" x2="256" y2="60" className="tech-hub__line tech-hub__line--delay" />
        <line x1="160" y1="140" x2="260" y2="210" className="tech-hub__line tech-hub__line--delay2" />
        <line x1="160" y1="140" x2="50" y2="200" className="tech-hub__line tech-hub__line--delay3" />
        <circle cx="160" cy="140" r="36" className="tech-hub__core-ring" fill="none" />
      </svg>

      <div className="tech-hub__core">
        <span className="tech-hub__core-icon">◈</span>
        <span className="tech-hub__core-label">Stack</span>
      </div>

      {NODES.map((n) => (
        <div
          key={n.id}
          className="tech-hub__node"
          style={{
            left: n.x,
            top: n.y,
            '--node-color': n.color,
            animationDelay: n.delay,
          }}
        >
          <span className="tech-hub__node-icon">{n.icon}</span>
          <span className="tech-hub__node-label">{n.label}</span>
        </div>
      ))}

      <div className="tech-hub__chart">
        <span className="tech-hub__chart-title">Throughput</span>
        <div className="tech-hub__bars">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="tech-hub__bar"
              style={{
                height: `${h}%`,
                animationDelay: `${i * 0.12}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="tech-hub__flow tech-hub__flow--1" />
      <div className="tech-hub__flow tech-hub__flow--2" />
    </div>
  );
}
