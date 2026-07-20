import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { EquipmentSection } from "@/components/equipment-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <WorkSection />
      <PhilosophySection />
      <ServicesSection />
      <AboutSection />
      <EquipmentSection />
      <ContactSection />
    </main>
  )
}
