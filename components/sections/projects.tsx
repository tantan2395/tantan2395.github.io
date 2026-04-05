"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

const ALL_FILTER = "All";

export function ProjectsSection() {
  const tags = useMemo(() => {
    const allTags = projects.flatMap((project) => project.tags);
    return [ALL_FILTER, ...new Set(allTags)];
  }, []);

  const [activeTag, setActiveTag] = useState<string>(ALL_FILTER);

  const visibleProjects = useMemo(() => {
    if (activeTag === ALL_FILTER) return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Production systems delivered across industries."
          description="Selected work highlighting architecture depth, leadership, rescue execution, and measurable business outcomes."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = tag === activeTag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                  isActive
                    ? "border-accent-500 bg-accent-500 text-white"
                    : "border-surface-300 text-text-secondary hover:border-accent-500 hover:text-text-primary"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {visibleProjects.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-surface-300 bg-white/70 p-10 text-center dark:bg-surface-900/30">
            <p className="font-heading text-lg font-semibold text-text-primary">
              No projects in this filter yet.
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Select another tag or update <code>data/projects.ts</code> to add
              matching entries.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
