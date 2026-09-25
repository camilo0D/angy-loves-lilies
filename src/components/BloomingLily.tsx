import { useState } from "react";

/**
 * Lirio SVG que florece al tocarlo: los pétalos se abren
 * desde el centro y aparecen destellos alrededor.
 */
export function BloomingLily() {
  const [bloomed, setBloomed] = useState(false);

  const petal = (rotate: number) => (
    <g key={rotate} transform={`rotate(${rotate} 100 110)`}>
      <path
        d="M100 110 C 92 70, 92 42, 100 26 C 108 42, 108 70, 100 110 Z"
        fill="oklch(0.78 0.11 352)"
        stroke="oklch(0.66 0.14 356)"
        strokeWidth="1.5"
        style={{
          transformOrigin: "100px 110px",
          transform: bloomed ? "scaleY(1)" : "scaleY(0.35)",
          opacity: bloomed ? 1 : 0.85,
          transition: `transform 1s cubic-bezier(0.34,1.4,0.5,1) ${
            Math.abs(rotate) * 6
          }ms, opacity 0.8s ease`,
        }}
      />
    </g>
  );

  return (
    <section className="love-card flex flex-col items-center p-8 text-center sm:p-10">
      <h2 className="font-display text-3xl text-lily-plum sm:text-4xl">
        Tu lirio
      </h2>
      <p className="mt-2 text-muted-foreground">
        {bloomed
          ? "Cada día florezco más, gracias a ti 🌸"
          : "Tócalo y mira cómo florece"}
      </p>

      <button
        onClick={() => setBloomed((b) => !b)}
        aria-label="Florecer el lirio"
        className="relative mt-6 cursor-pointer rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {bloomed && (
          <>
            <span className="animate-sparkle-pop absolute -top-2 left-2 text-xl">
              ✨
            </span>
            <span
              className="animate-sparkle-pop absolute top-8 -right-3 text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              ✨
            </span>
            <span
              className="animate-sparkle-pop absolute bottom-10 -left-3 text-lg"
              style={{ animationDelay: "0.35s" }}
            >
              💫
            </span>
          </>
        )}
        <svg
          viewBox="0 0 200 200"
          className={`h-56 w-56 ${bloomed ? "" : "animate-float-gentle"}`}
          role="img"
          aria-hidden
        >
          {/* Tallo y hojas */}
          <path
            d="M100 118 C 100 150, 98 170, 96 196"
            stroke="oklch(0.62 0.12 150)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M98 160 C 76 152, 62 158, 52 172 C 70 176, 86 172, 98 162 Z"
            fill="oklch(0.75 0.12 150)"
          />
          <path
            d="M100 178 C 122 172, 138 178, 146 190 C 128 194, 112 190, 100 182 Z"
            fill="oklch(0.7 0.12 152)"
          />
          {/* Pétalos */}
          {[-72, -36, 0, 36, 72].map(petal)}
          {/* Centro */}
          <circle
            cx="100"
            cy="110"
            r="7"
            fill="oklch(0.85 0.13 95)"
            style={{
              opacity: bloomed ? 1 : 0,
              transition: "opacity 0.7s ease 0.5s",
            }}
          />
        </svg>
      </button>
    </section>
  );
}
