const gear = [
  { name: "SONY FX3", type: "CAMERA", img: "/images/gear-camera.png" },
  { name: "DJI RS4 PRO", type: "GIMBAL", img: "/images/gear-gimbal.png" },
  { name: "SIGMA ART", type: "LENSES", img: "/images/gear-lens.png" },
  { name: "DJI MIC 2", type: "AUDIO", img: "/images/gear-mic.png" },
  { name: "NANLITE", type: "LIGHTING", img: "/images/gear-light.png" },
]

export function EquipmentSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-center gap-6">
          <span className="font-display text-6xl font-bold leading-none text-secondary md:text-8xl">03</span>
          <h2 className="font-display text-2xl font-semibold tracking-widest text-foreground md:text-3xl">EQUIPMENT</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {gear.map((g) => (
            <div key={g.name} className="group border-l border-border pl-4">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-sm bg-card">
                <img
                  src={g.img || "/placeholder.svg"}
                  alt={g.name}
                  className="size-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-base font-semibold tracking-wide text-foreground">{g.name}</h3>
              <p className="mt-0.5 text-xs tracking-widest text-muted-foreground">{g.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
