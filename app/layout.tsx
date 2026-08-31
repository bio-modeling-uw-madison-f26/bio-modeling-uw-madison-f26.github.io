import type { Metadata } from "next";
import "./globals.css";
import GameOfLife from "./game-of-life";

export const metadata: Metadata = {
  title: "BME 603/606 | Fall 2026",
  description: "Computational Methods for Biological Modeling and Simulation at UW–Madison.",
  icons: {
    icon: "/course-logo.png",
    shortcut: "/course-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><GameOfLife />{children}</body>
    </html>
  );
}
