import './WalkingBusinessScene.css';

/** Business professional walking left → right (Lottie-style motion graphic, SVG + CSS). */
export default function WalkingBusinessScene({ wide = false }) {
  return (
    <div className={`walk-scene ${wide ? 'walk-scene--wide' : ''}`} aria-hidden="true">
      <div className="walk-scene__floor" />
      <div className="walk-scene__buildings">
        <span className="walk-scene__bld walk-scene__bld--1" />
        <span className="walk-scene__bld walk-scene__bld--2" />
        <span className="walk-scene__bld walk-scene__bld--3" />
      </div>

      <div className="walk-scene__walker">
        <svg viewBox="0 0 120 200" className="walk-scene__svg" fill="none">
          {/* Briefcase */}
          <rect x="78" y="108" width="28" height="20" rx="3" fill="#14141f" stroke="#7f77dd" strokeWidth="1.5" />
          <path d="M88 108 L88 100 Q92 96 96 100 L96 108" stroke="#7f77dd" strokeWidth="1.5" fill="none" />

          {/* Body / blazer */}
          <path
            d="M42 95 L78 95 L82 145 L38 145 Z"
            fill="#252538"
            stroke="rgba(127,119,221,0.45)"
            strokeWidth="1"
          />
          <path d="M52 95 L60 78 L68 95" fill="#1e1e32" stroke="rgba(127,119,221,0.3)" />

          {/* Head */}
          <circle cx="60" cy="58" r="18" fill="#2a2a40" stroke="rgba(127,119,221,0.5)" strokeWidth="1.5" />
          <path d="M44 52 Q60 42 76 52" fill="#14141f" />
          {/* Hair bun */}
          <circle cx="72" cy="48" r="6" fill="#14141f" stroke="rgba(127,119,221,0.35)" />

          {/* Legs — walk cycle via CSS classes */}
          <g className="walk-scene__leg walk-scene__leg--left">
            <path d="M48 145 L44 175 L40 178" stroke="#252538" strokeWidth="10" strokeLinecap="round" />
            <ellipse cx="40" cy="180" rx="8" ry="4" fill="#7f77dd" />
          </g>
          <g className="walk-scene__leg walk-scene__leg--right">
            <path d="M72 145 L76 175 L80 178" stroke="#252538" strokeWidth="10" strokeLinecap="round" />
            <ellipse cx="80" cy="180" rx="8" ry="4" fill="#7f77dd" />
          </g>

          {/* Arms */}
          <g className="walk-scene__arm walk-scene__arm--left">
            <path d="M42 100 L28 115 L26 125" stroke="#252538" strokeWidth="8" strokeLinecap="round" />
          </g>
          <g className="walk-scene__arm walk-scene__arm--right">
            <path d="M78 102 L88 118 L90 128" stroke="#252538" strokeWidth="8" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <span className="walk-scene__label walk-scene__label--1">Career</span>
      <span className="walk-scene__label walk-scene__label--2">Growth →</span>
    </div>
  );
}
