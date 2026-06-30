import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

/* ── Fontes Google ── */
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ── SEO & Meta Tags ── */
export const metadata: Metadata = {
  title: "NEW NOW — Engenharia de Software & Front-End High-End",
  description:
    "Estúdio premium de desenvolvimento de software. Interfaces impecáveis, animações fluidas e código no estado da arte. O padrão mudou.",
  keywords: [
    "engenharia de software",
    "front-end",
    "desenvolvimento web",
    "design high-end",
    "agência digital premium",
    "New Now",
  ],
  authors: [{ name: "New Now" }],
  openGraph: {
    title: "NEW NOW — O Padrão Mudou",
    description:
      "Estúdio premium de desenvolvimento de software e front-end high-end. Interfaces impecáveis, performance brutal.",
    type: "website",
    locale: "pt_BR",
    siteName: "New Now",
  },
};

/* ── Root Layout ── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
