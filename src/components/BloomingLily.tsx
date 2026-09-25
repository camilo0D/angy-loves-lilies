import { useState } from "react";
import { Heart, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Lirio SVG que florece al tocarlo: los pétalos se abren
 * desde el centro y aparecen destellos alrededor.
 */
export function BloomingLily() {
  const [stage, setStage] = useState(0);
  const messages = [
    "Hay flores que tardan en abrirse, pero siempre guardan algo hermoso.",
    "Bellota, así llegaste a mi vida: llenándola poco a poco de color.",
    "Tu amor hace florecer las mejores partes de mí.",
    "Mi bombón de chocolate, mi deseo es verte florecer y acompañarte en cada nueva primavera.",
  ];
  const bloomed = stage > 0;

  const petal = (rotate: number) => (
    <g key={rotate} transform={`rotate(${rotate} 100 110)`}>
      <path
        d="M100 110 C 92 70, 92 42, 100 26 C 108 42, 108 70, 100 110 Z"
        strokeWidth="1.5"
        className="fill-lily-soft stroke-primary"
        style={{
          transformOrigin: "100px 110px",
          transform: bloomed ? `scaleY(${0.42 + stage * 0.19})` : "scaleY(0.22)",
          opacity: bloomed ? 1 : 0.85,
          transition: `transform 1s cubic-bezier(0.34,1.4,0.5,1) ${
            Math.abs(rotate) * 6
          }ms, opacity 0.8s ease`,
        }}
      />
    </g>
  );

  return (
    <section className="love-card relative flex flex-col items-center overflow-hidden px-5 py-10 text-center sm:px-10 sm:py-14">
      <div aria-hidden className="absolute inset-x-8 top-1/3 h-1/2 rounded-full bg-secondary/55 blur-3xl" />
      <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-primary">Un deseo que florece</p>
      <h2 className="relative mt-2 font-display text-4xl text-lily-plum sm:text-5xl">El lirio de Angy</h2>
      <p className="relative mt-3 max-w-md text-muted-foreground">Toca el lirio varias veces y descubre todo lo que guarda para ti.</p>

      <Button
        type="button"
        variant="ghost"
        onClick={() => setStage((current) => Math.min(current + 1, 4))}
        aria-label={stage === 4 ? "Lirio completamente florecido" : "Hacer florecer el lirio"}
        className="relative mt-3 h-auto w-full max-w-md rounded-full p-0 hover:bg-transparent"
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
          className={`h-auto w-full max-w-[380px] drop-shadow-xl ${stage === 4 ? "animate-lily-sway" : "animate-float-gentle"}`}
          role="img"
          aria-hidden
        >
          {/* Tallo y hojas */}
          <path
            d="M100 118 C 100 150, 98 170, 96 196"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            className="stroke-lily-leaf"
          />
          <path
            d="M98 160 C 76 152, 62 158, 52 172 C 70 176, 86 172, 98 162 Z"
            className="fill-lily-leaf-soft"
          />
          <path
            d="M100 178 C 122 172, 138 178, 146 190 C 128 194, 112 190, 100 182 Z"
            className="fill-lily-leaf"
          />
          {/* Pétalos */}
          {[-72, -36, 0, 36, 72].map(petal)}
          {/* Centro */}
          <circle
            cx="100"
            cy="110"
            r="7"
            className="fill-lily-gold"
            style={{
              opacity: bloomed ? 1 : 0,
              transition: "opacity 0.7s ease 0.5s",
            }}
          />
        </svg>
      </Button>

      <div className="relative mt-2 min-h-32 w-full max-w-xl rounded-2xl border border-border bg-background/70 px-6 py-5 backdrop-blur">
        <div className="mb-3 flex justify-center gap-2" aria-label={`Etapa ${stage} de 4`}>
          {[1, 2, 3, 4].map((step) => <span key={step} className={`h-1.5 w-10 rounded-full transition-colors ${step <= stage ? "bg-primary" : "bg-secondary"}`} />)}
        </div>
        {stage === 0 ? (
          <p className="font-display text-xl italic text-muted-foreground">Hazlo florecer con tu toque, mi amor.</p>
        ) : (
          <p key={stage} className="animate-fade-up font-display text-xl leading-relaxed text-lily-plum sm:text-2xl">{messages[stage - 1]}</p>
        )}
      </div>

      <div className="relative mt-5 flex flex-wrap justify-center gap-3">
        {stage < 4 ? (
          <Button type="button" size="lg" onClick={() => setStage((current) => Math.min(current + 1, 4))} className="rounded-full px-7 shadow-soft">
            <Sparkles /> {stage === 0 ? "Comenzar a florecer" : "Seguir floreciendo"}
          </Button>
        ) : (
          <Button type="button" variant="secondary" size="lg" onClick={() => setStage(0)} className="rounded-full px-7">
            <RotateCcw /> Volver a florecer
          </Button>
        )}
        {stage === 4 && <span className="animate-fade-up inline-flex items-center gap-2 font-display text-lg text-primary"><Heart className="fill-primary" /> Feliz cumpleaños, Angy</span>}
      </div>
    </section>
  );
}
