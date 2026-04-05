"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center rounded-full border border-surface-300 bg-white/70 px-4 text-sm font-medium text-text-secondary transition hover:border-accent-500 hover:text-text-primary dark:bg-surface-900/80"
      aria-label="Toggle color theme"
    >
      Toggle Theme
    </button>
  );
}
