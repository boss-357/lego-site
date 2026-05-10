import { HeaderSection } from '@/components/sections/header-section'
import { HeroSection } from '@/components/sections/hero-section'
import { MethodologySection } from '@/components/sections/methodology-section'
import { ServicesSection } from '@/components/sections/services-section'
import { CasesSection } from '@/components/sections/cases-section'
import { ScheduleSection } from '@/components/sections/schedule-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FooterSection } from '@/components/sections/footer-section'
import { StatsSection } from '@/components/sections/stats-section'

export default function HomePage() {
  return (
    <main>
      <HeaderSection />
      <HeroSection />
      <StatsSection />
      <MethodologySection />
      <ServicesSection />
      <CasesSection />
      <ScheduleSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
