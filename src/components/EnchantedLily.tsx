import { useMemo } from "react";

/**
 * Lirio encantado bajo una cúpula de cristal, sobre un cielo
 * estrellado — inspirado en la animación de referencia.
 * Se usa tanto en la intro como en la sección "Un lirio para ti".
 */

function makeStars(count: number, seed: number) {
  const stars: { x: number; y: number; r: number; delay: number; dur: number }[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < count; i++) {
    stars.push({
      x: rand() * 220,
      y: rand() * 230,
      r: 0.5 + rand() * 1.3,
      delay: rand() * 4,
      dur: 2.2 + rand() * 2.4,
    });
  }
  return stars;
}

export function EnchantedLily({
  playKey = 0,
  className = "",
  seed = 7,
}: {
  playKey?: number | string;
  className?: string;
  seed?: number;
}) {
  const stars = useMemo(() => makeStars(46, seed), [seed]);

  const outerPetal = (rotate: number, delay: number) => (
    <path
      key={`o-${rotate}`}
      className="lily-petal-outer"
      style={{ animationDelay: `${delay}s`, transformOrigin: "110px 150px" }}
      transform={`rotate(${rotate} 110 150)`}
      d="M110 150 C 98 120, 92 82, 110 40 C 128 82, 122 120, 110 150 Z"
      fill="oklch(0.9 0.045 350)"
      stroke="oklch(0.75 0.14 356 / 0.8)"
      strokeWidth="1.3"
    />
  );

  const innerPetal = (rotate: number, delay: number) => (
    <path
      key={`i-${rotate}`}
      className="lily-petal-inner"
      style={{ animationDelay: `${delay}s`, transformOrigin: "110px 150px" }}
      transform={`rotate(${rotate} 110 150)`}
      d="M110 150 C 103 126, 100 98, 110 66 C 120 98, 117 126, 110 150 Z"
      fill="oklch(0.8 0.09 30)"
      stroke="oklch(0.7 0.15 40 / 0.7)"
      strokeWidth="0.9"
    />
  );

  return (
    <svg
      key={playKey}
      viewBox="0 0 220 340"
      className={`enchanted-lily ${className}`}
      role="img"
      aria-label="Un lirio encantado floreciendo bajo una cúpula de cristal, en una noche estrellada"
    >
      <defs>
        <radialGradient id="night-sky" cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="oklch(0.28 0.05 280)" />
          <stop offset="60%" stopColor="oklch(0.18 0.045 275)" />
          <stop offset="100%" stopColor="oklch(0.1 0.03 270)" />
        </radialGradient>
        <linearGradient id="plinth-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.75 0.02 90)" />
          <stop offset="100%" stopColor="oklch(0.45 0.02 90)" />
        </linearGradient>
        <filter id="lily-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
          </feMerge>
        </filter>
      </defs>

      {/* Cielo nocturno */}
      <rect x="0" y="0" width="220" height="340" rx="24" fill="url(#night-sky)" />

      {/* Estrellas */}
      {stars.map((s, i) => (
        <circle
          key={i}
          className="lily-star"
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="white"
          style={{ animationDelay: `${s.delay}s`, animationDuration: `${s.dur}s` }}
        />
      ))}

      {/* Mesa / base */}
      <ellipse cx="110" cy="300" rx="70" ry="9" fill="oklch(0 0 0 / 0.35)" />
      <rect x="52" y="286" width="116" height="12" rx="5" fill="url(#plinth-gradient)" />

      {/* Cúpula de cristal */}
      <path
        className="lily-dome"
        d="M46 288 L46 190 C 46 118, 78 66, 110 66 C 142 66, 174 118, 174 190 L174 288"
        fill="oklch(0.9 0.02 250 / 0.06)"
        stroke="oklch(0.92 0.02 250 / 0.55)"
        strokeWidth="2"
      />
      <path
        className="lily-dome-shine"
        d="M70 250 C 66 190, 78 130, 100 92"
        fill="none"
        stroke="oklch(0.98 0.01 250 / 0.35)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Resplandor detrás de la flor */}
      <ellipse
        className="lily-glow-halo"
        cx="110"
        cy="130"
        rx="34"
        ry="46"
        fill="oklch(0.85 0.12 350 / 0.55)"
        filter="url(#lily-glow)"
      />

      {/* Tallo */}
      <path
        className="lily-stem"
        d="M110 286 C 110 240, 109 190, 110 150"
        pathLength={100}
        fill="none"
        strokeWidth="3.4"
        strokeLinecap="round"
        stroke="oklch(0.55 0.12 150)"
      />

      {/* Hojas */}
      <path className="lily-leaf lily-leaf--a" d="M110 260 C 90 252, 76 258, 68 272 C 86 276, 102 270, 110 262 Z" fill="oklch(0.58 0.11 150)" />
      <path className="lily-leaf lily-leaf--b" d="M110 232 C 130 224, 146 230, 154 244 C 134 250, 118 244, 110 236 Z" fill="oklch(0.64 0.1 150)" />

      {/* Pétalos exteriores e interiores */}
      {[0, 72, 144, 216, 288].map((r, i) => outerPetal(r, 2.2 + i * 0.13))}
      {[36, 108, 180, 252, 324].map((r, i) => innerPetal(r, 2.55 + i * 0.11))}

      {/* Centro */}
      <circle className="lily-center" cx="110" cy="150" r="5" fill="oklch(0.85 0.14 90)" />

      {/* Motas de luz */}
      <circle className="lily-mote lily-mote--a" cx="86" cy="150" r="1.6" fill="oklch(0.95 0.05 350)" />
      <circle className="lily-mote lily-mote--b" cx="136" cy="140" r="1.3" fill="oklch(0.95 0.05 350)" />
      <circle className="lily-mote lily-mote--c" cx="112" cy="112" r="1.8" fill="oklch(0.95 0.05 350)" />
    </svg>
  );
}
