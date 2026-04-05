import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen py-24">
      <Container className="max-w-3xl">
        <section className="rounded-2xl border border-surface-200/80 bg-white/70 p-8 shadow-soft dark:border-surface-300/20 dark:bg-surface-900/30">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Message Received
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold text-text-primary">
            Thanks for reaching out.
          </h1>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            Your submission was sent successfully through Netlify Forms. I will
            get back to you soon.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Back to Portfolio
          </Link>
        </section>
      </Container>
    </main>
  );
}
