"use client";

import Link from "next/link";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";

import {
  getWeatherUnitsFromSearchParam,
  getWeatherUnitsHref,
} from "@/lib/units";

interface WeatherNavProps {
  cityId: string;
}

const linkClassName =
  "rounded-md px-3 py-2 text-sm font-medium text-foreground-600 underline-offset-4 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-[current=page]:bg-foreground aria-[current=page]:text-background";

export function WeatherNav({ cityId }: WeatherNavProps) {
  const segment = useSelectedLayoutSegment();
  const searchParams = useSearchParams();
  const units = getWeatherUnitsFromSearchParam(searchParams.get("units"));
  const encodedCityId = encodeURIComponent(cityId);
  const currentHref = `/weather/${encodedCityId}`;
  const forecastHref = `${currentHref}/forecast`;

  return (
    <nav
      aria-label="Weather views"
      className="mx-auto flex w-full max-w-5xl items-center gap-1 px-6 pt-4"
    >
      <Link className={linkClassName} href="/">
        Cities
      </Link>
      <Link
        aria-current={segment === null ? "page" : undefined}
        className={linkClassName}
        href={getWeatherUnitsHref(currentHref, units)}
      >
        Current
      </Link>
      <Link
        aria-current={segment === "forecast" ? "page" : undefined}
        className={linkClassName}
        href={getWeatherUnitsHref(forecastHref, units)}
      >
        Forecast
      </Link>
    </nav>
  );
}
