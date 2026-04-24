import { formatTemperature } from "@/lib/units";

import type {
  OpenWeatherForecastDay,
  OpenWeatherForecastResponse,
} from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

export interface ForecastDaySummaryView {
  condition: OpenWeatherForecastResponse["list"][number]["weather"][number];
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
  const condition = getDominantCondition(day);

  return {
    condition,
    date: day.date,
    label: formatDayLabel(day.date),
    description: condition.description,
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

function getDominantCondition(day: OpenWeatherForecastDay) {
  const counts = new Map<string, number>();
  const conditions = new Map<
    string,
    OpenWeatherForecastResponse["list"][number]["weather"][number]
  >();

  for (const item of day.items) {
    const condition = item.weather[0];
    counts.set(condition.icon, (counts.get(condition.icon) ?? 0) + 1);
    conditions.set(condition.icon, condition);
  }

  const iconCode = Array.from(counts).sort((a, b) => b[1] - a[1])[0]?.[0];

  return (
    (iconCode ? conditions.get(iconCode) : null) ??
    day.items[0]?.weather[0] ?? {
      description: "forecast",
      icon: "03d",
      id: 802,
      main: "Clouds",
    }
  );
}
