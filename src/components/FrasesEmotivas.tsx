import { Heart } from "lucide-react";

const FRASES = [
  { tema: "Apodos cariñosos", frases: [
    "Mi bellota, mi bombón de chocolate, mi negra.",
    "Bellota, ¿sabes lo mucho que te quiero?",
    "Mi negra, contigo mi vida es más dulce.",
  ]},
  { tema: "Para tu corazón", frases: [
    "Eres la razón por la que mis días tienen color.",
    "Contigo aprendí que el amor también se siente como calma.",
    "Si pudiera elegir un lugar para vivir, sería siempre en tus abrazos.",
  ]},
  { tema: "Para tus sueños", frases: [
    "Que florezcas como el lirio: despacio, con luz y sin miedo.",
    "Estaré a tu lado para celebrar cada logro, grande o pequeño.",
  ]},
  { tema: "Para los días difíciles", frases: [
    "Aunque el día esté nublado, yo siempre seré tu refugio.",
    "No tienes que ser fuerte todo el tiempo; aquí puedes descansar.",
  ]},
  { tema: "Para tus besos y abrazos", frases: [
    "Tu beso es mi lugar favorito del mundo.",
    "Cada abrazo tuyo me recuerda por qué elegí quedarme.",
  ]},
  { tema: "Para el futuro", frases: [
    "Quiero construir contigo una vida llena de recuerdos bonitos.",
    "Que sigamos floreciendo juntos, día a día.",
  ]},
  { tema: "En mi tono", frases: [
    "Te amo, mi reina hermosa. Usted está loquita, pero la amo así.",
    "Fea te amo, y lo digo con todo el corazón.",
    "Me quedo nomás viéndote y se me olvida todo lo demás.",
  ]},
];

export function FrasesEmotivas() {
  return (
    <section className="love-card p-8 sm:p-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary">Palabras para ti</p>
      <h2 className="mt-2 text-center font-display text-4xl text-lily-plum sm:text-5xl">Frases de mi corazón</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {FRASES.map((grupo) => (
          <div key={grupo.tema} className="rounded-2xl bg-secondary/60 p-5">
            <h3 className="font-display text-xl text-primary">{grupo.tema}</h3>
            <ul className="mt-3 space-y-2.5">
              {grupo.frases.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[15px] text-lily-plum">
                  <Heart className="mt-1 h-3.5 w-3.5 shrink-0 fill-primary text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
