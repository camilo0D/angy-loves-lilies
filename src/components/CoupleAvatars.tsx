import besoPhoto from "@/assets/couple/beso.jpeg";

/**
 * Su foto favorita, recortada en forma de corazón, con
 * corazones flotando alrededor.
 */
export function CoupleAvatars() {
  return (
    <section className="love-card relative flex flex-col items-center overflow-hidden px-5 py-10 text-center sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Nosotros</p>
      <h2 className="mt-2 font-display text-4xl text-lily-plum sm:text-5xl">Un corazón para ti</h2>

      <div className="relative mt-6 w-full max-w-sm">
        <svg viewBox="0 0 320 300" className="w-full">
          <defs>
            <clipPath id="heart-avatar-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0.94 C0.15,0.72,0,0.5,0,0.32 C0,0.12,0.16,0,0.32,0 C0.42,0,0.5,0.06,0.5,0.18 C0.5,0.06,0.58,0,0.68,0 C0.84,0,1,0.12,1,0.32 C1,0.5,0.85,0.72,0.5,0.94 Z" />
            </clipPath>
          </defs>

          <circle cx="160" cy="150" r="132" fill="oklch(0.92 0.042 350)" />

          <g clipPath="url(#heart-avatar-clip)" transform="translate(60 22)">
            <image
              href={besoPhoto}
              x="0"
              y="0"
              width="200"
              height="256"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
          {/* Mismo contorno del corazón, escalado igual que el recorte, para que calce exacto */}
          <path
            transform="translate(60 22) scale(200 256)"
            vectorEffect="non-scaling-stroke"
            d="M0.5,0.94 C0.15,0.72,0,0.5,0,0.32 C0,0.12,0.16,0,0.32,0 C0.42,0,0.5,0.06,0.5,0.18 C0.5,0.06,0.58,0,0.68,0 C0.84,0,1,0.12,1,0.32 C1,0.5,0.85,0.72,0.5,0.94 Z"
            fill="none"
            stroke="oklch(0.99 0.01 345)"
            strokeWidth="5"
          />

          <path className="avatar-heart" style={{ animationDelay: "0s" }} d="M40 60 C 30 40, 55 30, 60 48 C 65 30, 90 40, 80 60 L 60 80 Z" fill="oklch(0.71 0.15 356)" />
          <path className="avatar-heart" style={{ animationDelay: "0.8s" }} d="M250 40 C 240 22, 265 14, 270 32 C 275 14, 300 22, 290 42 L 270 62 Z" fill="oklch(0.63 0.13 305)" />
          <path className="avatar-heart" style={{ animationDelay: "1.6s" }} d="M270 226 C 260 208, 285 200, 290 218 C 295 200, 320 208, 310 228 L 290 248 Z" fill="oklch(0.71 0.15 356)" />
          <path className="avatar-heart" style={{ animationDelay: "2.3s" }} d="M18 220 C 10 205, 30 199, 34 214 C 38 199, 58 205, 50 222 L 34 238 Z" fill="oklch(0.82 0.14 90)" />
        </svg>
      </div>
      <p className="mt-4 font-display text-lg italic text-primary">Este beso resume todo lo que siento por ti.</p>
    </section>
  );
}
