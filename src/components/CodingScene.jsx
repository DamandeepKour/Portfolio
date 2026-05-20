import './CodingScene.css';

/**
 * Motion-graphics style developer-at-laptop scene (SVG + CSS).
 * Inspired by website promo / landing animations (Jitter-style motion graphics).
 */
export default function CodingScene({ compact = false }) {
  const size = compact ? 280 : 380;

  return (
    <div
      className={`coding-scene mx-auto ${compact ? 'max-w-[280px]' : ''}`}
      style={{ maxWidth: size }}
      aria-hidden="true"
    >
      <div className="coding-scene__orbit coding-scene__orbit--outer" />
      <div className="coding-scene__orbit coding-scene__orbit--inner" />
      <div className="coding-scene__glow" />

      <span className="motion-symbol motion-symbol--1">{'</>'}</span>
      <span className="motion-symbol motion-symbol--2">{'{ }'}</span>
      <span className="motion-symbol motion-symbol--3">=&gt;</span>

      <div className="coding-scene__badge coding-scene__badge--tl">
        <span className="coding-scene__badge-dot" />
        npm run dev
      </div>
      <div className="coding-scene__badge coding-scene__badge--tr">
        <span style={{ color: '#5dcaa5' }}>●</span> Live
      </div>
      <div className="coding-scene__badge coding-scene__badge--br">
        React + Node
      </div>

      <svg
        className="coding-scene__float w-full h-auto relative z-[1]"
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

        <ellipse cx="155" cy="248" rx="28" ry="22" fill="#1e1e32" stroke="rgba(255,255,255,0.06)" />
        <circle cx="155" cy="198" r="22" fill="#252538" stroke="rgba(127,119,221,0.4)" strokeWidth="1.5" />
        <path
          d="M133 192 Q155 178 177 192 Q175 210 155 212 Q135 210 133 192"
          fill="#14141f"
        />

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
        <rect x="214" y="214" width="100" height="66" rx="4" fill="url(#screenGlow)" opacity="0.4" />

        <foreignObject x="218" y="220" width="92" height="58">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '7px',
              lineHeight: 1.55,
              color: '#8888a0',
            }}
          >
            <div className="coding-scene__code-line" style={{ color: '#7f77dd' }}>
              <span style={{ color: '#d4537e' }}>const</span> dev = {'{'}
            </div>
            <div className="coding-scene__code-line" style={{ paddingLeft: 8, color: '#5dcaa5' }}>
              role: <span style={{ color: '#ef9f27' }}>&apos;fullstack&apos;</span>,
            </div>
            <div className="coding-scene__code-line" style={{ paddingLeft: 8 }}>
              stack: [<span style={{ color: '#afa9ec' }}>&apos;MERN&apos;</span>],
            </div>
            <div className="coding-scene__code-line" style={{ paddingLeft: 8, color: '#5dcaa5' }}>
              build: <span style={{ color: '#ef9f27' }}>() =&gt;</span> ship()
            </div>
            <div className="coding-scene__code-line">
              {'};'}
              <span className="coding-scene__cursor" style={{ color: '#5dcaa5' }}>
                |
              </span>
            </div>
          </div>
        </foreignObject>

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

        <g opacity="0.85" className="coding-scene__float--delay">
          <rect x="48" y="218" width="56" height="42" rx="4" fill="#14141f" stroke="rgba(93,202,165,0.35)" />
          <rect x="52" y="222" width="48" height="34" rx="2" fill="#0a0a14" />
          <text x="56" y="234" fill="#5dcaa5" fontSize="6" fontFamily="monospace">
            $ git push
          </text>
          <text x="56" y="246" fill="#8888a0" fontSize="5" fontFamily="monospace">
            ✓ deployed
          </text>
          <circle cx="92" cy="226" r="3" fill="#5dcaa5">
            <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>

        <defs>
          <linearGradient id="screenGlow" x1="214" y1="214" x2="314" y2="280">
            <stop stopColor="#7f77dd" />
            <stop offset="1" stopColor="#5dcaa5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
