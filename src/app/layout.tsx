import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { Suspense } from "react";

import { Providers } from "./providers";
import { AppNav } from "@/components/ui/AppNav";
import {
  getThemePreferenceFromCookie,
  WEATHER_THEME_COOKIE,
} from "@/lib/theme";

import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LM - Weather Forecast",
  description: "Weather forecast dashboard using OpenWeatherMap API",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultTheme = getThemePreferenceFromCookie(
    cookieStore.get(WEATHER_THEME_COOKIE)?.value,
  );

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers defaultTheme={defaultTheme}>
          <Suspense fallback={<div className="h-20 border-b border-divider" />}>
            <AppNav />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
