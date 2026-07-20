export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <img
        src="/images/philosophy.png"
        alt="Silhouette of Ahmed Mohamed"
        className="absolute inset-0 size-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-bold tracking-wide text-foreground md:text-5xl">PHILOSOPHY</h2>
          <p dir="rtl" className="mt-8 text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
            كل فيديو له سبب. أنا لا أصوّر فقط للحصول على لقطة جميلة، بل لأحكي قصة، أنقل إحساس، وأخلق تأثير. التفاصيل تصنع
            الفرق.
          </p>
        </div>
      </div>
    </section>
  )
}
