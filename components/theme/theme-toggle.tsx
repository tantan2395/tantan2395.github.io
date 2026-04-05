"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const persisted = window.localStorage.getItem("theme");
    if (persisted === "dark" || persisted === "light") return persisted;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center rounded-full border border-surface-300 bg-white/70 px-4 text-sm font-medium text-text-secondary transition hover:border-accent-500 hover:text-text-primary dark:bg-surface-900/80"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
