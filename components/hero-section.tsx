import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="/images/hero.png"
        alt="Ahmed Mohamed filming with a cinema camera on a city street at night"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl pt-24">
          <h1 className="font-display text-6xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            MOHAMED
            <br />
            GAMAL
          </h1>

          <p className="mt-6 font-display text-lg font-medium tracking-[0.2em] text-primary sm:text-xl">
            VIDEOGRAPHER • EDITOR • STORYTELLER
          </p>

          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Not just visuals. Lasting impressions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-display text-sm font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-7 py-3.5 font-display text-sm font-semibold tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="font-display text-xs tracking-[0.3em]">SCROLL</span>
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
