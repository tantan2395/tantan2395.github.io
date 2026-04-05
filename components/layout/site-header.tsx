import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-200/70 bg-surface-50/85 backdrop-blur-xl dark:border-surface-300/20 dark:bg-surface-100/60">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-text-primary"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 font-heading text-xs font-bold text-white shadow-soft">
            JC
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-4 md:gap-6">
            {profile.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-medium text-text-secondary transition hover:text-text-primary md:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </Container>
    </header>
  );
}
