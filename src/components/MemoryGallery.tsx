import { useState } from "react";
import { Heart, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import memoria1 from "@/assets/memories2/memoria-01.jpg";
import memoria2 from "@/assets/memories2/memoria-02.jpg";
import memoria3 from "@/assets/memories2/memoria-03.jpg";
import memoria4 from "@/assets/memories2/memoria-04.jpg";
import memoria5 from "@/assets/memories2/memoria-05.jpeg";
import memoria6 from "@/assets/memories2/memoria-06.jpeg";
import memoria7 from "@/assets/memories2/memoria-07.jpeg";
import memoria8 from "@/assets/memories2/memoria-08.jpeg";
import memoria9 from "@/assets/memories2/memoria-09.jpeg";
import memoria10 from "@/assets/memories2/memoria-10.jpeg";
import memoria11 from "@/assets/memories2/memoria-11.jpeg";
import memoria12 from "@/assets/memories2/memoria-12.jpeg";
import memoria13 from "@/assets/memories2/memoria-13.jpeg";
import memoria14 from "@/assets/memories2/memoria-14.jpeg";
import memoria15 from "@/assets/memories2/memoria-15.jpeg";
import memoria16 from "@/assets/memories2/memoria-16.jpeg";
import memoria17 from "@/assets/memories2/memoria-17.jpeg";
import memoria18 from "@/assets/memories2/memoria-18.jpeg";
import memoria19 from "@/assets/memories2/memoria-19.jpeg";
import memoria20 from "@/assets/memories2/memoria-20.jpeg";
import memoria21 from "@/assets/memories2/memoria-21.jpeg";
import memoria22 from "@/assets/memories2/memoria-22.jpeg";
import memoria23 from "@/assets/memories2/memoria-23.jpeg";

const MEMORIES = [
  { src: memoria1, alt: "Angy y Camilo, recuerdo 1", hidden: "A tu lado, hasta una noche sencilla se convierte en uno de mis lugares favoritos." },
  { src: memoria2, alt: "Angy y Camilo, recuerdo 2", hidden: "Bombón de chocolate, amo nuestra complicidad y esa forma tan nuestra de disfrutarlo todo." },
  { src: memoria3, alt: "Angy y Camilo, recuerdo 3", hidden: "Quiero seguir coleccionando contigo días felices, risas sinceras y aventuras inesperadas." },
  { src: memoria4, alt: "Angy y Camilo, recuerdo 4", hidden: "Mi negra, tu alegría le pone luz a mis días y tu cariño hace que todo se sienta más bonito." },
  { src: memoria5, alt: "Angy y Camilo, recuerdo 5", hidden: "Verte sonreír es uno de esos regalos que nunca dejan de hacerme feliz." },
  { src: memoria6, alt: "Angy y Camilo, recuerdo 6", hidden: "Mi paz también tiene tu nombre: está en los momentos tranquilos que compartimos." },
  { src: memoria7, alt: "Angy y Camilo, recuerdo 7", hidden: "Bellota, en tus brazos siento ese hogar que no es un lugar, sino una persona." },
  { src: memoria8, alt: "Angy y Camilo, recuerdo 8", hidden: "Me encanta que podamos ser nosotros mismos, reírnos y querernos sin medida." },
  { src: memoria9, alt: "Angy y Camilo, recuerdo 9", hidden: "De todas las casualidades de la vida, encontrarte sigue siendo mi favorita." },
  { src: memoria10, alt: "Angy y Camilo, recuerdo 10", hidden: "Esto apenas comienza: todavía nos esperan incontables recuerdos hermosos por vivir." },
  { src: memoria11, alt: "Angy y Camilo, recuerdo 11", hidden: "Mi bombón, contigo hasta el silencio es una buena conversación." },
  { src: memoria12, alt: "Angy y Camilo, recuerdo 12", hidden: "Contigo aprendí que el amor también se siente como paz." },
  { src: memoria13, alt: "Angy y Camilo, recuerdo 13", hidden: "Cada foto contigo es un pedacito de felicidad que quiero guardar para siempre." },
  { src: memoria14, alt: "Angy y Camilo, recuerdo 14", hidden: "Mi negra, admiro tu fuerza y la mujer maravillosa que eres." },
  { src: memoria15, alt: "Angy y Camilo, recuerdo 15", hidden: "Bellota, gracias por dejarme ser parte de tu historia." },
  { src: memoria16, alt: "Angy y Camilo, recuerdo 16", hidden: "Contigo cualquier plan es el plan perfecto." },
  { src: memoria17, alt: "Angy y Camilo, recuerdo 17", hidden: "Tu forma de cuidar a quienes amas habla de la belleza de tu corazón." },
  { src: memoria18, alt: "Angy y Camilo, recuerdo 18", hidden: "Mi bombón de chocolate, simplemente eres tú. Y eso lo es todo." },
  { src: memoria19, alt: "Angy y Camilo, recuerdo 19", hidden: "A tu lado quiero celebrar muchos cumpleaños y construir miles de recuerdos." },
  { src: memoria20, alt: "Angy y Camilo, recuerdo 20", hidden: "Bellota, tu risa es mi sonido favorito en el mundo." },
  { src: memoria21, alt: "Angy y Camilo, recuerdo 21", hidden: "Mi negra, tu sonrisa ilumina hasta mis días grises." },
  { src: memoria22, alt: "Angy y Camilo, recuerdo 22", hidden: "Contigo hasta lo difícil se vuelve más ligero." },
  { src: memoria23, alt: "Angy y Camilo, recuerdo 23", hidden: "Gracias por cada sonrisa, cada abrazo y cada recuerdo que hemos construido juntos." },
];

export function MemoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedMemory = selected === null ? undefined : MEMORIES[selected];

  const showPrev = () =>
    setSelected((current) => (current === null ? null : (current - 1 + MEMORIES.length) % MEMORIES.length));
  const showNext = () =>
    setSelected((current) => (current === null ? null : (current + 1) % MEMORIES.length));

  return (
    <section className="py-8 sm:py-12">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Nuestra historia</p>
        <h2 className="mt-3 font-display text-4xl text-lily-plum sm:text-5xl">Pedacitos de nosotros</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Toca cada foto. Guardé una pequeña verdad de mi corazón detrás de cada recuerdo.</p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {MEMORIES.map((m, i) => {
          return (
            <Button
              key={i}
              type="button"
              variant="ghost"
              onClick={() => setSelected(i)}
              aria-label={`Abrir recuerdo ${i + 1}`}
              className={`group relative h-auto aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border p-0 shadow-card hover:-translate-y-1.5 hover:bg-transparent ${i === 0 || i === 7 ? "sm:row-span-2 sm:aspect-auto" : ""}`}
            >
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lily-plum/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-primary-foreground">
                <span className="font-display text-lg">Recuerdo {i + 1}</span>
                <Sparkles className="h-4 w-4" />
              </div>
            </Button>
          );
        })}
      </div>

      {selected !== null && selectedMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-lily-plum/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Recuerdo especial">
          <div className="animate-bloom-open relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-card shadow-soft sm:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <img src={selectedMemory.src} alt={selectedMemory.alt} className="h-72 w-full object-cover sm:h-full sm:min-h-[520px]" />
              <Button type="button" variant="secondary" size="icon" onClick={showPrev} aria-label="Recuerdo anterior" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full shadow-card">
                <ChevronLeft />
              </Button>
              <Button type="button" variant="secondary" size="icon" onClick={showNext} aria-label="Siguiente recuerdo" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full shadow-card">
                <ChevronRight />
              </Button>
            </div>
            <div className="flex flex-col justify-center p-7 text-center sm:p-10">
              <Heart className="mx-auto h-7 w-7 fill-primary text-primary" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Para Angy · {selected + 1}/{MEMORIES.length}</p>
              <p key={selected} className="animate-fade-up mt-4 font-display text-2xl leading-relaxed text-lily-plum sm:text-3xl">"{selectedMemory.hidden}"</p>
              <p className="mt-6 text-sm italic text-muted-foreground">Con amor, Camilo</p>
            </div>
            <Button type="button" variant="secondary" size="icon" onClick={() => setSelected(null)} aria-label="Cerrar recuerdo" className="absolute right-3 top-3 rounded-full shadow-card">
              <X />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
