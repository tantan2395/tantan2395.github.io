import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 sm:pt-28">
      <Container className="relative">
        <div className="grid items-center gap-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
              Full Stack Software Developer
            </p>
            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-text-secondary">
              {profile.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-surface-300 px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-500"
              >
                Contact Me
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center rounded-full border border-surface-300 px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-500"
              >
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
