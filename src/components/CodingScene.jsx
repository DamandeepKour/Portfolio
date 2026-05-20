import './CodingScene.css';

const VARIANTS = {
  hero: {
    symbols: [
      { className: 'motion-symbol--1', content: '</>' },
      { className: 'motion-symbol--2', content: '{ }' },
      { className: 'motion-symbol--3', content: '=>' },
    ],
    badges: [
      { pos: 'tl', dot: true, text: 'npm run dev' },
      { pos: 'tr', live: true, text: 'Live' },
      { pos: 'br', text: 'React + Node' },
    ],
    monitor: { title: '$ git push', sub: '✓ deployed' },
    code: [
      { line: 1, content: <> <span className="code-kw">const</span> dev = {'{'} </> },
      { line: 2, indent: 8, content: <>role: <span className="code-str">&apos;fullstack&apos;</span>,</> },
      { line: 3, indent: 8, content: <>stack: [<span className="code-accent">&apos;MERN&apos;</span>],</> },
      { line: 4, indent: 8, content: <>build: <span className="code-str">()</span> =&gt; ship()</> },
      { line: 5, content: <>{'};'}<span className="coding-scene__cursor">|</span></> },
    ],
  },
  stats: {
    symbols: [
      { className: 'motion-symbol--1', content: '12+' },
      { className: 'motion-symbol--2', content: 'SaaS' },
    ],
    badges: [
      { pos: 'tr', live: true, text: 'Shipping' },
      { pos: 'br', text: 'Production' },
    ],
    monitor: { title: '$ deploy', sub: '✓ live' },
    code: [
      { line: 1, content: <> <span className="code-kw">const</span> metrics = {'{'} </> },
      { line: 2, indent: 8, content: <>projects: <span className="code-accent">12</span>,</> },
      { line: 3, indent: 8, content: <>uptime: <span className="code-str">&apos;99%&apos;</span></> },
      { line: 4, content: <>{'};'}<span className="coding-scene__cursor">|</span></> },
    ],
  },
};

function CodeLines({ lines }) {
  return (
    <foreignObject x="218" y="220" width="92" height="58">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        className="coding-scene__code-block"
      >
        {lines.map(({ line, indent, content }) => (
          <div
            key={line}
            className="coding-scene__code-line"
            style={indent ? { paddingLeft: indent } : undefined}
          >
            {content}
          </div>
        ))}
      </div>
    </foreignObject>
  );
}

/**
 * Motion-graphics developer-at-laptop scene (SVG + CSS).
 * @param {'hero'|'stats'} variant
 */
export default function CodingScene({ compact = false, variant = 'hero' }) {
  const size = compact ? 260 : variant === 'stats' ? 200 : 380;
  const config = VARIANTS[variant] ?? VARIANTS.hero;
  const glowId = `screenGlow-${variant}`;

  return (
    <div
      className={`coding-scene mx-auto ${compact ? 'coding-scene--compact' : ''} coding-scene--${variant}`}
      style={{ maxWidth: size }}
      aria-hidden="true"
    >
      <div className="coding-scene__orbit coding-scene__orbit--outer" />
      <div className="coding-scene__orbit coding-scene__orbit--inner" />

      {variant !== 'stats' && <div className="coding-scene__glow" />}

      {config.symbols.map((sym, i) => (
        <span key={i} className={`motion-symbol ${sym.className}`}>
          {sym.content}
        </span>
      ))}

      {config.badges.map((b) => (
        <div
          key={b.text}
          className={`coding-scene__badge coding-scene__badge--${b.pos}`}
        >
          {b.dot && <span className="coding-scene__badge-dot" />}
          {b.live && <span style={{ color: '#5dcaa5' }}>● </span>}
          {b.text}
        </div>
      ))}

      <svg
        className={`coding-scene__float w-full h-auto relative z-[1] ${config.figureClass ?? ''}`}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="60" y="298" width="280" height="12" rx="4" fill="#1a1a2e" stroke="rgba(255,255,255,0.08)" />
        <rect x="80" y="306" width="8" height="48" rx="2" fill="#14141f" />
        <rect x="312" y="306" width="8" height="48" rx="2" fill="#14141f" />

        <path
          d="M118 268 Q108 220 128 200 L148 200 Q138 230 142 268 Z"
          fill="#14141f"
          stroke="rgba(127,119,221,0.3)"
          strokeWidth="1"
        />

        <g className="coding-scene__person">
          <ellipse cx="155" cy="248" rx="28" ry="22" fill="#1e1e32" stroke="rgba(255,255,255,0.06)" />
          <circle cx="155" cy="198" r="22" fill="#252538" stroke="rgba(127,119,221,0.4)" strokeWidth="1.5" />
          <path
            d="M133 192 Q155 178 177 192 Q175 210 155 212 Q135 210 133 192"
            fill="#14141f"
          />
        </g>

        <g className="coding-scene__hand">
          <path
            d="M178 238 Q210 250 235 268 L228 274 Q200 258 175 248 Z"
            fill="#252538"
          />
          <ellipse cx="232" cy="272" rx="10" ry="6" fill="#7f77dd" opacity="0.9" />
        </g>

        <path
          d="M200 278 L320 278 L328 292 L192 292 Z"
          fill="#14141f"
          stroke="rgba(255,255,255,0.1)"
        />
        <rect x="208" y="208" width="112" height="78" rx="6" fill="#0d0d1a" stroke="rgba(127,119,221,0.5)" strokeWidth="2" />
        <rect x="214" y="214" width="100" height="66" rx="4" fill="#0a0a14" />
        <rect x="214" y="214" width="100" height="66" rx="4" fill={`url(#${glowId})`} opacity="0.4" />

        <CodeLines lines={config.code} />

        <rect x="218" y="278" width="14" height="6" rx="1" fill="rgba(127,119,221,0.25)" />
        <rect x="236" y="278" width="14" height="6" rx="1" fill="rgba(127,119,221,0.2)" />
        <rect x="254" y="278" width="14" height="6" rx="1" fill="rgba(93,202,165,0.25)" />
        <rect x="272" y="278" width="14" height="6" rx="1" fill="rgba(127,119,221,0.2)" />

        <g className="coding-scene__float--delay">
          <rect x="72" y="268" width="22" height="26" rx="3" fill="#14141f" stroke="rgba(239,159,39,0.4)" />
          <path d="M94 276 Q102 276 102 284 Q102 292 94 292" stroke="rgba(239,159,39,0.5)" fill="none" />
          <path
            d="M78 262 Q80 255 82 262 M86 260 Q88 252 90 260"
            stroke="rgba(239,159,39,0.35)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.8"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
          </path>
        </g>

        {config.monitor && (
          <g opacity="0.85" className="coding-scene__float--delay">
            <rect x="48" y="218" width="56" height="42" rx="4" fill="#14141f" stroke="rgba(93,202,165,0.35)" />
            <rect x="52" y="222" width="48" height="34" rx="2" fill="#0a0a14" />
            <text x="56" y="234" fill="#5dcaa5" fontSize="6" fontFamily="monospace">
              {config.monitor.title}
            </text>
            <text x="56" y="246" fill="#8888a0" fontSize="5" fontFamily="monospace">
              {config.monitor.sub}
            </text>
            <circle cx="92" cy="226" r="3" fill="#5dcaa5">
              <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        <defs>
          <linearGradient id={glowId} x1="214" y1="214" x2="314" y2="280">
            <stop stopColor="#7f77dd" />
            <stop offset="1" stopColor="#5dcaa5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
