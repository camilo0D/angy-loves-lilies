import { useState } from "react";
import { Heart, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import memory1 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.52_PM_1.jpeg.asset.json";
import memory2 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.52_PM.jpeg.asset.json";
import memory3 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.53_PM_1.jpeg.asset.json";
import memory4 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.53_PM_2.jpeg.asset.json";
import memory5 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.53_PM.jpeg.asset.json";
import memory6 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.55_PM_1.jpeg.asset.json";
import memory7 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.55_PM_2.jpeg.asset.json";
import memory8 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.55_PM_3.jpeg.asset.json";
import memory9 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.55_PM_4.jpeg.asset.json";
import memory10 from "@/assets/memories/WhatsApp_Image_2026-09-24_at_8.12.55_PM.jpeg.asset.json";

const MEMORIES = [
  {
    src: memory1.url,
    alt: "Angy y Camilo juntos bajo luces cálidas",
    hidden: "A tu lado, hasta una noche sencilla se convierte en uno de mis lugares favoritos.",
  },
  {
    src: memory2.url,
    alt: "Angy y Camilo compartiendo una tarde juntos",
    hidden: "Amo nuestra complicidad, nuestras ocurrencias y esa forma tan nuestra de disfrutarlo todo.",
  },
  {
    src: memory3.url,
    alt: "Angy y Camilo sonriendo en un día de paseo",
    hidden: "Quiero seguir coleccionando contigo días felices, risas sinceras y aventuras inesperadas.",
  },
  {
    src: memory4.url,
    alt: "Angy y Camilo en un paseo al aire libre",
    hidden: "Tu alegría le pone luz a mis días y tu cariño hace que todo se sienta más bonito.",
  },
  {
    src: memory5.url,
    alt: "Angy y Camilo sonriendo juntos",
    hidden: "Verte sonreír es uno de esos regalos que nunca dejan de hacerme feliz.",
  },
  {
    src: memory6.url,
    alt: "Angy y Camilo descansando juntos",
    hidden: "Mi paz también tiene tu nombre: está en los momentos tranquilos que compartimos.",
  },
  {
    src: memory7.url,
    alt: "Angy abrazando a Camilo",
    hidden: "En tus brazos siento ese hogar que no es un lugar, sino una persona.",
  },
  {
    src: memory8.url,
    alt: "Angy y Camilo posando juntos",
    hidden: "Me encanta que podamos ser nosotros mismos, reírnos y querernos sin medida.",
  },
  {
    src: memory9.url,
    alt: "Angy y Camilo juntos en el parque",
    hidden: "De todas las casualidades de la vida, encontrarte sigue siendo mi favorita.",
  },
  {
    src: memory10.url,
    alt: "Angy y Camilo sonriendo en una salida",
    hidden: "Esto apenas comienza: todavía nos esperan incontables recuerdos hermosos por vivir.",
  },
];

export function MemoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-8 sm:py-12">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Nuestra historia</p>
        <h2 className="mt-3 font-display text-4xl text-lily-plum sm:text-5xl">Diez pedacitos de nosotros</h2>
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

      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-lily-plum/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Recuerdo especial">
          <div className="animate-bloom-open relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-card shadow-soft sm:grid-cols-[1.05fr_0.95fr]">
            <img src={MEMORIES[selected].src} alt={MEMORIES[selected].alt} className="h-72 w-full object-cover sm:h-full sm:min-h-[520px]" />
            <div className="flex flex-col justify-center p-7 text-center sm:p-10">
              <Heart className="mx-auto h-7 w-7 fill-primary text-primary" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Para Angy</p>
              <p className="mt-4 font-display text-2xl leading-relaxed text-lily-plum sm:text-3xl">“{MEMORIES[selected].hidden}”</p>
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
