import { formatTemperature } from "@/lib/units";

import type { OpenWeatherForecastDay } from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

export interface ForecastDaySummaryView {
  date: string;
  label: string;
  description: string;
  low: string;
  high: string;
}

export function getForecastDaySummaryView(
  day: OpenWeatherForecastDay,
  units: WeatherUnits,
): ForecastDaySummaryView {
  const temperatures = day.items.map((item) => item.main.temp);

  return {
    date: day.date,
    label: formatDayLabel(day.date),
    description: getDominantDescription(day),
    low: formatTemperature(Math.min(...temperatures), units),
    high: formatTemperature(Math.max(...temperatures), units),
  };
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
