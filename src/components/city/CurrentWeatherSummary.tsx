import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";

import { CityLocalTime } from "@/components/city/CityLocalTime";
import { TemperatureRangeItem } from "@/components/city/TemperatureRangeItem";
import { WeatherDetail } from "@/components/city/WeatherDetail";
import { formatTemperature, getWeatherUnitsHref } from "@/lib/units";
import { getCurrentWeatherDetails } from "@/lib/weather-detail-view";

import type { OpenWeatherCurrentResponse } from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

interface CurrentWeatherSummaryProps {
  weather: OpenWeatherCurrentResponse;
  units: WeatherUnits;
}

export function CurrentWeatherSummary({
  weather,
  units,
}: CurrentWeatherSummaryProps) {
  const condition = weather.weather[0];
  const details = getCurrentWeatherDetails(weather, units);
  const forecastHref = getWeatherUnitsHref(
    `/weather/${encodeURIComponent(String(weather.id))}/forecast`,
    units,
  );

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-lg bg-content1 p-6 shadow-sm">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-normal">
            {weather.name}
          </h1>
          <p className="mt-1 text-sm capitalize text-foreground-500">
            {condition.description}
          </p>
        </div>
        <CityLocalTime timezoneOffsetSeconds={weather.timezone} />
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
        <div>
          <p className="text-6xl font-semibold">
            {formatTemperature(weather.main.temp, units)}
          </p>
          <p className="mt-2 text-sm text-foreground-500">
            Feels like {formatTemperature(weather.main.feels_like, units)}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <TemperatureRangeItem
              icon={<ArrowUp aria-hidden className="h-4 w-4" />}
              label="High"
              value={formatTemperature(weather.main.temp_max, units)}
            />
            <TemperatureRangeItem
              icon={<ArrowDown aria-hidden className="h-4 w-4" />}
              label="Low"
              value={formatTemperature(weather.main.temp_min, units)}
            />
          </div>
        </div>

        <dl className="grid gap-3">
          {details.map((detail) => (
            <WeatherDetail
              icon={detail.icon}
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </dl>
      </section>

      <Link
        href={forecastHref}
        className="w-fit rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        View 5-day forecast
      </Link>
    </section>
  );
}
