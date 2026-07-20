import { Play } from "lucide-react"

const projects = [
  { title: "NIKE", type: "COMMERCIAL CAMPAIGN", year: "2025", img: "/images/work-nike.png" },
  { title: "RED BULL", type: "BRAND FILM", year: "2024", img: "/images/work-redbull.png" },
  { title: "SAMSUNG", type: "PRODUCT VIDEO", year: "2024", img: "/images/work-samsung.png" },
  { title: "EMAAR", type: "EVENT FILM", year: "2024", img: "/images/work-emaar.png" },
  { title: "CAFE IN", type: "SOCIAL MEDIA CAMPAIGN", year: "2025", img: "/images/work-cafe.png" },
  { title: "AZZARO", type: "FRAGRANCE FILM", year: "2023", img: "/images/work-azzaro.png" },
]

export function WorkSection() {
  return (
    <section id="work" className="relative border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="flex items-center gap-6">
            <h2 className="flex items-center gap-3 font-display text-2xl font-semibold tracking-widest text-foreground md:text-3xl">
              <span className="hidden h-px w-8 bg-primary sm:block" />
              SELECTED WORK
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden font-display text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            ALL PROJECTS
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <img
                  src={p.img || "/placeholder.svg"}
                  alt={`${p.title} — ${p.type}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/30 transition-colors group-hover:bg-background/10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex size-12 items-center justify-center rounded-full border border-primary bg-background/50 text-primary backdrop-blur-sm">
                    <Play className="size-4 fill-primary" />
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-wide text-foreground">{p.title}</h3>
                  <p className="mt-0.5 text-xs tracking-wide text-muted-foreground">{p.type}</p>
                </div>
                <span className="font-display text-sm text-primary">{p.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
