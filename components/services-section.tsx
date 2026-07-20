const services = ["VIDEOGRAPHY", "EDITORIAL", "MOTION DESIGN", "COLOR GRADING"]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-border py-20 md:py-28">
      <img
        src="/images/services.png"
        alt="Cinema camera on a gimbal"
        className="absolute inset-y-0 right-0 h-full w-1/2 object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-center gap-6">
          <span className="font-display text-6xl font-bold leading-none text-secondary md:text-8xl">02</span>
          <h2 className="font-display text-2xl font-semibold tracking-widest text-foreground md:text-3xl">WHAT I DO</h2>
        </div>

        <ul className="mt-12 flex flex-col gap-5">
          {services.map((s) => (
            <li
              key={s}
              className="group flex cursor-default items-center gap-4 font-display text-4xl font-semibold tracking-wide text-foreground transition-colors hover:text-primary sm:text-5xl md:text-6xl"
            >
              <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-12" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
