import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Jonathan Cantora | Full Stack Software Developer",
  description:
    "Senior full-stack developer portfolio showcasing 10+ years of production delivery across web, mobile, backend, and cloud systems.",
  keywords: [
    "Jonathan Cantora",
    "Full Stack Software Developer",
    "Senior Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS"
  ],
  openGraph: {
    title: "Jonathan Cantora | Full Stack Software Developer",
    description:
      "Portfolio of Jonathan Cantora featuring senior full-stack engineering work, leadership experience, and production systems across multiple industries.",
    type: "website"
  }
};

const themeScript = `
(() => {
  try {
    const persisted = localStorage.getItem("theme");
    const dark = persisted === "dark" || (!persisted && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
  } catch {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${sora.variable} font-body antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
