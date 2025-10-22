"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SplashCursor from "@/components/SplashCursor";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (isDark) document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <title>Portfolio - Ayush Chauhan</title>
        <meta
          name="description"
          content="Full-stack developer portfolio showcasing projects and skills"
        />
      </head>
      <body
        className={`${inter.className} bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 antialiased transition-colors duration-300`}
      >
        <SplashCursor />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
