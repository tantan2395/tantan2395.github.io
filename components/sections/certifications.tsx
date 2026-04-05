import { certifications } from "@/data/certifications";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Validated expertise in cloud and security."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delayMs={index * 80}>
              <article className="h-full rounded-2xl border border-surface-200/80 bg-white/70 p-6 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{cert.issuer}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-text-muted">
                  Issued {cert.issued}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
