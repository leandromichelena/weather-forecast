"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import {
  getWeatherUnitsFromSearchParam,
  getWeatherUnitsHref,
} from "@/lib/units";

const linkClassName =
  "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground-600 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary aria-[current=page]:bg-foreground aria-[current=page]:text-background";

export function AppNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const units = getWeatherUnitsFromSearchParam(searchParams.get("units"));
  const cityId = getCityIdFromPathname(pathname);
  const currentHref = cityId ? `/weather/${encodeURIComponent(cityId)}` : null;
  const forecastHref = currentHref ? `${currentHref}/forecast` : null;
  const isForecast = pathname.endsWith("/forecast");

  return (
    <header className="border-b border-divider bg-background/95">
      <div className="mx-auto flex min-h-20 w-full max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            className="text-base font-semibold tracking-normal text-foreground focus-visible:rounded-md focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            href="/"
          >
            Weather Forecast
          </Link>
          <nav aria-label="Weather views" className="flex flex-wrap gap-1">
            <Link
              aria-current={pathname === "/" ? "page" : undefined}
              className={linkClassName}
              href="/"
            >
              Cities
            </Link>
            {currentHref ? (
              <>
                <Link
                  aria-current={!isForecast ? "page" : undefined}
                  className={linkClassName}
                  href={getWeatherUnitsHref(currentHref, units)}
                >
                  Current
                </Link>
                <Link
                  aria-current={isForecast ? "page" : undefined}
                  className={linkClassName}
                  href={getWeatherUnitsHref(forecastHref ?? currentHref, units)}
                >
                  Forecast
                </Link>
              </>
            ) : null}
          </nav>
        </div>
        <div className="flex shrink-0 items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

function getCityIdFromPathname(pathname: string) {
  const [, firstSegment, secondSegment] = pathname.split("/");

  if (firstSegment !== "weather" || !secondSegment) {
    return null;
  }

  return decodeURIComponent(secondSegment);
}
