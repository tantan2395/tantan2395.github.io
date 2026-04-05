import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-surface-200/80 bg-white/75 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent-500/60 dark:border-surface-300/20 dark:bg-surface-900/30">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-400/0 via-accent-500/60 to-accent-600/0 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="mb-5 rounded-xl border border-dashed border-surface-300/90 bg-gradient-to-r from-surface-100 to-surface-200/60 px-4 py-3 text-xs text-text-muted dark:from-surface-100/40 dark:to-surface-900/20">
        Visual artifact unavailable due client confidentiality.
      </div>

      <header className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl font-semibold text-text-primary">
            {project.title}
          </h3>
          <span className="rounded-full border border-surface-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            {project.period}
          </span>
        </div>
        <p className="text-sm font-medium text-text-secondary">{project.role}</p>
      </header>

      <p className="mt-4 text-sm leading-7 text-text-secondary">{project.summary}</p>
      <p className="mt-4 text-sm leading-7 text-text-primary">
        <span className="font-semibold">Impact:</span> {project.impact}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-surface-100 px-2.5 py-1 text-xs font-medium text-text-secondary dark:bg-surface-900"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.links.map((link) =>
          link.href ? (
            <a
              key={`${project.title}-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-surface-300 px-3 py-1.5 text-xs font-semibold text-text-primary transition hover:border-accent-500"
            >
              {link.label}
            </a>
          ) : (
            <span
              key={`${project.title}-${link.label}`}
              className="inline-flex cursor-not-allowed items-center rounded-full border border-dashed border-surface-300 px-3 py-1.5 text-xs font-medium text-text-muted"
              title="Link unavailable for this engagement"
            >
              {link.label} Unavailable
            </span>
          )
        )}
      </div>
    </article>
  );
}
