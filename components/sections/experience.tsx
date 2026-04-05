import { experiences } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Built for production. Trusted for critical delivery."
            description="A decade of execution across web, mobile, and backend systems in fast-moving product environments."
          />
        </Reveal>

        <div className="mt-10 space-y-6 border-l border-surface-300 pl-5 dark:border-surface-300/40">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delayMs={index * 70}>
              <article className="relative rounded-2xl border border-surface-200/80 bg-white/70 p-6 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30">
                <span className="absolute -left-[1.65rem] top-8 size-3 rounded-full bg-accent-500" />
                <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-text-primary">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-text-secondary">
                      {item.company}
                    </p>
                    <p className="text-sm text-text-muted">{item.location}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
                    {item.period}
                  </p>
                </header>
                <ul className="mt-5 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-sm leading-7 text-text-secondary before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-accent-500/80"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
