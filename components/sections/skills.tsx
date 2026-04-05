import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Broad technical range, backend-first execution."
            description="Core technologies used in production across web, mobile, cloud, and enterprise delivery."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((group, index) => (
            <Reveal key={group.category} delayMs={index * 70}>
              <article className="h-full rounded-2xl border border-surface-200/80 bg-white/70 p-6 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-surface-300 px-3 py-1.5 text-xs font-medium text-text-secondary"
                    >
                      {skill}
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
