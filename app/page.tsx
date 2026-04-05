import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutSection } from "@/components/sections/about";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { StrengthsStrip } from "@/components/sections/strengths-strip";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl"
      />

      <SiteHeader />

      <main>
        <HeroSection />
        <StrengthsStrip />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
