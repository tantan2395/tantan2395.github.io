import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function StrengthsStrip() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {profile.strengths.map((strength, index) => (
            <Reveal key={strength.label} delayMs={index * 80}>
              <article className="h-full rounded-2xl border border-surface-200/80 bg-white/70 p-5 shadow-soft backdrop-blur dark:border-surface-300/20 dark:bg-surface-900/30">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {strength.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {strength.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
