"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encoded = new URLSearchParams();
    formData.forEach((value, key) => encoded.append(key, String(value)));

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString()
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(`HTTP ${response.status}: ${details.slice(0, 220)}`);
      }

      window.location.href = "/thank-you";
    } catch (error) {
      // Keep details in console to speed up debugging in production.
      console.error("Netlify form submission failed:", error);
      setSubmitError(
        "Submission failed. Please try again, or email me directly at tantancantora@gmail.com."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something high-impact."
          description="Open to full-stack, frontend, backend, and broader software engineering opportunities."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-4 rounded-2xl border border-surface-200/80 bg-white/70 p-6 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30">
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              Direct Details
            </h3>
            <dl className="space-y-3 text-sm text-text-secondary">
              <div>
                <dt className="font-semibold text-text-primary">Email</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="transition hover:text-accent-500"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">GitHub</dt>
                <dd>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-accent-500"
                  >
                    {profile.github}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <form
            name="portfolio-contact"
            method="POST"
            action="/__forms.html"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-surface-200/80 bg-white/70 p-6 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30"
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <p className="hidden">
              <label>
                Do not fill this out if you are human:
                <input name="bot-field" />
              </label>
            </p>
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              This form submits directly to Netlify Forms.
            </p>
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-text-primary">
                  Name
                </span>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="w-full rounded-xl border border-surface-300 bg-transparent px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-500"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-text-primary">
                  Email
                </span>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="w-full rounded-xl border border-surface-300 bg-transparent px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-500"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-text-primary">
                  Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-surface-300 bg-transparent px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-500"
                />
              </label>
            </div>
            {submitError ? (
              <p className="mt-4 text-sm text-red-500">{submitError}</p>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
