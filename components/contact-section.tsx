import { MessageCircle, Mail, AtSign, ArrowUp } from "lucide-react"

const contacts = [
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "+20 100 123 4567",
    href: "https://wa.me/201001234567",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@ahmedmohamed.com",
    href: "mailto:hello@ahmedmohamed.com",
  },
  {
    icon: AtSign,
    label: "INSTAGRAM",
    value: "@ahmed.mohamed.films",
    href: "https://instagram.com/ahmed.mohamed.films",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            PEOPLE
            <br />
            <span className="text-primary">REMEMBER.</span>
          </h2>

          <div className="md:pl-8">
            <p className="font-display text-sm tracking-widest text-muted-foreground">LET&apos;S TALK</p>
            <div className="mt-6 flex flex-col divide-y divide-border border-y border-border">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-5 transition-colors hover:text-primary"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border text-primary transition-colors group-hover:border-primary">
                    <c.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-display text-xs tracking-widest text-muted-foreground">{c.label}</span>
                    <span className="block text-foreground transition-colors group-hover:text-primary">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs tracking-wide text-muted-foreground">
            © 2025 Ahmed Mohamed. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            BACK TO TOP
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
