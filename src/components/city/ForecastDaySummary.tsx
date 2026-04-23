import { ArrowDown, ArrowUp } from "lucide-react";

import { getForecastDaySummaryView } from "@/lib/forecast-view";

import type { OpenWeatherForecastDay } from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

interface ForecastDaySummaryProps {
  day: OpenWeatherForecastDay;
  units: WeatherUnits;
}

export function ForecastDaySummary({ day, units }: ForecastDaySummaryProps) {
  const summary = getForecastDaySummaryView(day, units);

  return (
    <div className="flex w-full flex-col gap-1 text-left sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="text-base font-medium">{summary.label}</span>
        <p className="text-sm capitalize text-foreground-500">
          {summary.description}
        </p>
      </div>
      <div className="flex items-center gap-3 text-sm text-foreground-500">
        <span className="inline-flex items-center gap-1">
          <ArrowDown aria-hidden className="h-4 w-4" />
          {summary.low}
        </span>
        <span className="inline-flex items-center gap-1">
          <ArrowUp aria-hidden className="h-4 w-4" />
          {summary.high}
        </span>
      </div>
    </div>
  );
}
