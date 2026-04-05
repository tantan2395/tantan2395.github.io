import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-200/80 py-10 dark:border-surface-300/20">
      <Container className="flex flex-col gap-6 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
        <p>
          Senior full-stack engineer delivering reliable software for complex,
          high-impact products.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-text-primary"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-text-primary"
          >
            Email
          </a>
          <span>© {year} {profile.name}</span>
        </div>
      </Container>
    </footer>
  );
}
