import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering leadership with hands-on delivery."
            description={profile.summary}
          />
        </Reveal>
        <Reveal delayMs={100}>
          <div className="mt-8 rounded-2xl border border-surface-200/80 bg-white/70 p-7 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30">
            <p className="text-base leading-8 text-text-secondary">
              I specialize in backend-heavy full-stack development and mobile
              delivery, with repeated success launching and stabilizing systems
              under real production pressure. From architecture and API design
              to implementation and team mentorship, I focus on building
              software that is reliable, maintainable, and tied to measurable
              business outcomes.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
