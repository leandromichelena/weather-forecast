import { ArrowDown, ArrowUp } from "lucide-react";

import { formatTemperature } from "@/lib/units";

import type { OpenWeatherForecastDay } from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

interface ForecastDaySummaryProps {
  day: OpenWeatherForecastDay;
  units: WeatherUnits;
}

export function ForecastDaySummary({ day, units }: ForecastDaySummaryProps) {
  const temperatures = day.items.map((item) => item.main.temp);
  const low = Math.min(...temperatures);
  const high = Math.max(...temperatures);
  const description = getDominantDescription(day);

  return (
    <div className="flex w-full flex-col gap-1 text-left sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="text-base font-medium">{formatDayLabel(day.date)}</span>
        <p className="text-sm capitalize text-foreground-500">{description}</p>
      </div>
      <div className="flex items-center gap-3 text-sm text-foreground-500">
        <span className="inline-flex items-center gap-1">
          <ArrowDown aria-hidden className="h-4 w-4" />
          {formatTemperature(low, units)}
        </span>
        <span className="inline-flex items-center gap-1">
          <ArrowUp aria-hidden className="h-4 w-4" />
          {formatTemperature(high, units)}
        </span>
      </div>
    </div>
  );
}

function formatDayLabel(date: string) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getDominantDescription(day: OpenWeatherForecastDay) {
  const counts = new Map<string, number>();

  for (const item of day.items) {
    const description = item.weather[0].description;
    counts.set(description, (counts.get(description) ?? 0) + 1);
  }

  return Array.from(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "Forecast";
}
