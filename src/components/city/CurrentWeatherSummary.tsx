import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";

import { CityLocalTime } from "@/components/city/CityLocalTime";
import { DaylightArc } from "@/components/city/DaylightArc";
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
    <section className="flex w-full flex-col gap-8 rounded-lg border border-divider bg-content1 p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-normal">
            {weather.name}
          </h1>
          <p className="mt-1 text-lg capitalize text-foreground-500">
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
          <p className="mt-2 text-md text-foreground-500">
            Feels like {formatTemperature(weather.main.feels_like, units)}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-md">
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

          <DaylightArc
            sunriseUnixSeconds={weather.sys.sunrise}
            sunsetUnixSeconds={weather.sys.sunset}
            timezoneOffsetSeconds={weather.timezone}
          />
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
        className="w-fit rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        View 5-day forecast
      </Link>
    </section>
  );
}
