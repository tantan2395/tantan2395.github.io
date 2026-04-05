import { education } from "@/data/education";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic foundation" />
        </Reveal>
        <Reveal delayMs={80}>
          <article className="mt-8 rounded-2xl border border-surface-200/80 bg-white/70 p-6 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30">
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              {education.school}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">{education.degree}</p>
            <p className="mt-1 text-sm text-text-muted">{education.location}</p>
            <p className="mt-3 inline-flex rounded-full border border-surface-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-text-muted">
              {education.period}
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
