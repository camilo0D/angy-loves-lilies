import { useId, useMemo } from "react";

function makeStars(count: number, seed: number) {
  const stars: { x: number; y: number; r: number; delay: number; dur: number }[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  for (let i = 0; i < count; i++) {
    stars.push({
      x: 8 + rand() * 204,
      y: 8 + rand() * 276,
      r: 0.45 + rand() * 1.25,
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
  const stars = useMemo(() => makeStars(56, seed), [seed]);
  const rawId = useId().replace(/:/g, "");
  const ids = {
    sky: `sky-${rawId}`,
    glass: `glass-${rawId}`,
    stem: `stem-${rawId}`,
    petalOuter: `petal-outer-${rawId}`,
    petalInner: `petal-inner-${rawId}`,
    petalFront: `petal-front-${rawId}`,
    glow: `glow-${rawId}`,
  };

  const petals = [
    { rotate: -76, delay: 2.45, kind: "outer" },
    { rotate: 76, delay: 2.55, kind: "outer" },
    { rotate: -43, delay: 2.7, kind: "outer" },
    { rotate: 43, delay: 2.8, kind: "outer" },
    { rotate: -17, delay: 2.95, kind: "inner" },
    { rotate: 17, delay: 3.05, kind: "inner" },
    { rotate: 0, delay: 3.18, kind: "front" },
  ] as const;

  return (
    <svg
      key={playKey}
      viewBox="0 0 220 360"
      className={`enchanted-lily ${className}`}
      role="img"
      aria-label="Un lirio luminoso que nace y abre sus pétalos bajo un cielo estrellado"
    >
      <defs>
        <radialGradient id={ids.sky} cx="50%" cy="38%" r="78%">
          <stop offset="0%" stopColor="oklch(0.27 0.055 315)" />
          <stop offset="55%" stopColor="oklch(0.17 0.04 285)" />
          <stop offset="100%" stopColor="oklch(0.09 0.025 275)" />
        </radialGradient>
        <linearGradient id={ids.glass} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.99 0.01 345 / 0.5)" />
          <stop offset="48%" stopColor="oklch(0.88 0.03 300 / 0.04)" />
          <stop offset="100%" stopColor="oklch(0.94 0.02 260 / 0.18)" />
        </linearGradient>
        <linearGradient id={ids.stem} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.39 0.09 150)" />
          <stop offset="55%" stopColor="oklch(0.64 0.13 150)" />
          <stop offset="100%" stopColor="oklch(0.43 0.1 150)" />
        </linearGradient>
        <linearGradient id={ids.petalOuter} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.99 0.015 345)" />
          <stop offset="48%" stopColor="oklch(0.9 0.07 350)" />
          <stop offset="100%" stopColor="oklch(0.69 0.17 356)" />
        </linearGradient>
        <linearGradient id={ids.petalInner} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.98 0.025 345)" />
          <stop offset="58%" stopColor="oklch(0.86 0.1 350)" />
          <stop offset="100%" stopColor="oklch(0.62 0.18 356)" />
        </linearGradient>
        <linearGradient id={ids.petalFront} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(1 0 0)" />
          <stop offset="55%" stopColor="oklch(0.92 0.065 350)" />
          <stop offset="100%" stopColor="oklch(0.67 0.18 356)" />
        </linearGradient>
        <filter id={ids.glow} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <rect width="220" height="360" rx="22" fill={`url(#${ids.sky})`} />

      {stars.map((star, index) => (
        <circle
          key={index}
          className="lily-star"
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill="oklch(0.98 0.015 345)"
          style={{ animationDelay: `${star.delay}s`, animationDuration: `${star.dur}s` }}
        />
      ))}

      <ellipse className="lily-ground-glow" cx="110" cy="319" rx="74" ry="13" fill="oklch(0.7 0.14 350 / 0.2)" />
      <ellipse cx="110" cy="326" rx="72" ry="10" fill="oklch(0.04 0.01 280 / 0.72)" />
      <rect x="44" y="315" width="132" height="13" rx="6" fill="oklch(0.56 0.025 85)" />

      <path
        className="lily-dome"
        d="M39 315 L39 183 C39 103 72 48 110 48 C148 48 181 103 181 183 L181 315 Z"
        fill={`url(#${ids.glass})`}
        stroke="oklch(0.95 0.025 330 / 0.58)"
        strokeWidth="1.6"
      />
      <path className="lily-dome-shine" d="M61 270 C55 190 70 107 96 72" fill="none" stroke="oklch(1 0 0 / 0.38)" strokeWidth="3" strokeLinecap="round" />

      <ellipse className="lily-glow-halo" cx="110" cy="143" rx="49" ry="56" fill="oklch(0.75 0.16 350 / 0.42)" filter={`url(#${ids.glow})`} />

      <path className="lily-stem" d="M109 316 C108 270 114 221 110 159" pathLength={100} fill="none" stroke={`url(#${ids.stem})`} strokeWidth="4.4" strokeLinecap="round" />
      <path className="lily-leaf lily-leaf--a" d="M110 274 C87 258 65 263 54 285 C76 291 96 284 110 277 Z" fill="oklch(0.55 0.13 150)" />
      <path className="lily-leaf lily-leaf--b" d="M111 244 C132 226 155 229 166 249 C145 258 125 253 111 247 Z" fill="oklch(0.63 0.12 150)" />
      <path className="lily-leaf lily-leaf--c" d="M109 298 C92 286 75 291 68 305 C84 309 99 305 109 300 Z" fill="oklch(0.45 0.11 150)" />

      <g className="lily-bloom">
        {petals.map(({ rotate, delay, kind }) => {
          const fill = kind === "outer" ? ids.petalOuter : kind === "inner" ? ids.petalInner : ids.petalFront;
          return (
            <g key={`${kind}-${rotate}`} transform={`rotate(${rotate} 110 159)`}>
              <path
                className={`lily-petal lily-petal--${kind}`}
                style={{ animationDelay: `${delay}s` }}
                d="M110 159 C91 137 88 100 110 56 C132 100 129 137 110 159 Z"
                fill={`url(#${fill})`}
                stroke="oklch(0.8 0.11 350 / 0.72)"
                strokeWidth="1"
              />
              <path className="lily-petal-vein" style={{ animationDelay: `${delay + 0.28}s` }} d="M110 151 C109 123 110 91 110 67" fill="none" stroke="oklch(0.64 0.16 356 / 0.38)" strokeWidth="0.8" strokeLinecap="round" />
            </g>
          );
        })}

        {[-18, -7, 7, 18].map((rotate, index) => (
          <g key={rotate} className="lily-stamen" style={{ animationDelay: `${3.42 + index * 0.08}s` }} transform={`rotate(${rotate} 110 159)`}>
            <path d="M110 158 C110 144 110 130 110 116" fill="none" stroke="oklch(0.9 0.11 90)" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="110" cy="114" rx="2.5" ry="5" fill="oklch(0.78 0.16 75)" />
          </g>
        ))}
        <circle className="lily-center" cx="110" cy="159" r="7" fill="oklch(0.89 0.15 91)" />
      </g>

      <g className="lily-motes">
        <circle className="lily-mote lily-mote--a" cx="78" cy="166" r="2" fill="oklch(0.96 0.06 350)" />
        <circle className="lily-mote lily-mote--b" cx="145" cy="151" r="1.7" fill="oklch(0.96 0.08 350)" />
        <circle className="lily-mote lily-mote--c" cx="103" cy="105" r="2.2" fill="oklch(0.96 0.07 90)" />
        <circle className="lily-mote lily-mote--d" cx="134" cy="115" r="1.5" fill="oklch(0.98 0.04 345)" />
      </g>
    </svg>
  );
}