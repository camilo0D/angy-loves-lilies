import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Heart } from "lucide-react";
import liliesHero from "@/assets/lilies-hero.jpg";
import { FallingPetals } from "@/components/FallingPetals";
import { LoveLetter } from "@/components/LoveLetter";
import { MemoryGallery } from "@/components/MemoryGallery";
import { LoveReasons } from "@/components/LoveReasons";
import { BloomingLily } from "@/components/BloomingLily";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feliz Cumpleaños, Angy 💐" },
      {
        name: "description",
        content:
          "Una página de cumpleaños llena de lirios, cartas de amor y sorpresas para Angy.",
      },
      { property: "og:title", content: "Feliz Cumpleaños, Angy 💐" },
      {
        property: "og:description",
        content:
          "Lirios, mensajes de amor y sorpresas interactivas para celebrar a Angy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Feliz Cumpleaños, Angy 💐" },
      {
        name: "twitter:description",
        content: "Lirios, mensajes de amor y sorpresas interactivas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <FallingPetals count={18} />

      {/* ---------- Portada ---------- */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-background to-background"
        />
        <div className="relative z-10 flex max-w-3xl flex-col items-center">
          <img
            src={liliesHero}
            alt="Ramillete de lirios rosados y blancos"
            width={912}
            height={1200}
            className="animate-float-gentle h-56 w-auto rounded-4xl object-cover shadow-soft sm:h-72"
          />
          <p className="animate-fade-up mt-8 text-sm font-semibold tracking-[0.3em] text-accent uppercase">
            Hoy celebramos a
          </p>
          <h1 className="animate-fade-up delay-1 mt-3 font-display text-6xl leading-tight text-lily-plum sm:text-8xl">
            Angy
          </h1>
          <p className="animate-fade-up delay-2 mt-4 max-w-xl font-display text-2xl italic text-primary sm:text-3xl">
            Feliz cumpleaños, mi amor. Que florezcan tus sueños como un jardín
            de lirios.
          </p>
          <a
            href="#sorpresas"
            className="animate-fade-up delay-3 mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-105"
          >
            Descubre tus sorpresas
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ---------- Collage de recuerdos (bento) ---------- */}
      <section id="sorpresas" className="relative z-10 mx-auto max-w-5xl scroll-mt-10 px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <LoveLetter />
          </div>
          <div className="md:col-span-2">
            <MemoryGallery />
          </div>
          <BloomingLily />
          <LoveReasons />
        </div>
      </section>

      {/* ---------- Cierre ---------- */}
      <footer className="relative z-10 px-6 pb-16 pt-6 text-center">
        <div className="mx-auto max-w-xl rounded-4xl border border-border bg-card/80 p-10 shadow-card backdrop-blur">
          <Heart className="mx-auto h-8 w-8 animate-heartbeat fill-primary text-primary" />
          <p className="mt-4 font-display text-2xl text-lily-plum">
            Que este año te regale tanto como tú me regalas a mí cada día.
          </p>
          <p className="mt-3 text-sm tracking-widest text-muted-foreground uppercase">
            Con amor, siempre tuyo
          </p>
        </div>
      </footer>
    </main>
  );
}
