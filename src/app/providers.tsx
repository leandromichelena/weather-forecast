"use client";

import { ThemeProvider } from "next-themes";

import type { ThemePreference } from "@/lib/theme";

interface ProvidersProps {
  children: React.ReactNode;
  defaultTheme: ThemePreference;
}

export function Providers({ children, defaultTheme }: Readonly<ProvidersProps>) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme={defaultTheme}
      disableTransitionOnChange
      enableSystem
      storageKey="weather-theme"
    >
      {children}
    </ThemeProvider>
  );
}
