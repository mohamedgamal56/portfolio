import { AtSign } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-square">
          <img
            src="/images/about.png"
            alt="Portrait of Mohamed Gamal"
            className="size-full object-cover object-[center_20%]"
          />
        </div>

        <div>
          <h2 className="font-display text-4xl font-bold tracking-wide text-primary md:text-5xl">MOHAMED GAMAL</h2>
          <p className="mt-3 font-display text-lg font-medium tracking-widest text-foreground">
            Video Director &amp; Editor
          </p>

          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I believe in the power of visuals to connect, inspire and transform ideas into real impact. Based in Cairo,
            working worldwide.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="#contact"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <AtSign className="size-5" />
            </a>
            <a
              href="#contact"
              aria-label="Behance"
              className="flex size-11 items-center justify-center rounded-sm border border-border font-display text-sm font-semibold tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Be
            </a>
            <a
              href="#contact"
              aria-label="Vimeo"
              className="flex size-11 items-center justify-center rounded-sm border border-border font-display text-sm font-semibold tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Vm
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
