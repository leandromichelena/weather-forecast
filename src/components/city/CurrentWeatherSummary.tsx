import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";

import { CityLocalTime } from "@/components/city/CityLocalTime";
import { DaylightArc } from "@/components/city/DaylightArc";
import { TemperatureRangeItem } from "@/components/city/TemperatureRangeItem";
import { WeatherDetail } from "@/components/city/WeatherDetail";
import { WeatherConditionIcon } from "@/components/weather-icons/WeatherConditionIcon";
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
    <div className="flex w-full flex-col gap-5">
      <section className="flex w-full flex-col gap-8 rounded-lg border border-divider bg-content1 p-6 md:gap-10 md:p-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {weather.name}
          </h1>
          <CityLocalTime timezoneOffsetSeconds={weather.timezone} />
        </header>

        <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] md:gap-10 md:items-start">
          <div className="flex flex-col gap-8">
            <div className="flex min-w-0 flex-col items-start gap-3 text-left">
              <WeatherConditionIcon
                condition={condition}
                size="lg"
                className="text-foreground"
              />
              <p className="max-w-[14ch] text-lg capitalize leading-tight text-foreground-500">
                {condition.description}
              </p>
            </div>

            <div className="min-w-0">
              <p className="text-6xl font-semibold tracking-tight md:text-7xl">
                {formatTemperature(weather.main.temp, units)}
              </p>
              <p className="mt-3 text-lg text-foreground-500 md:text-xl">
                Feels like {formatTemperature(weather.main.feels_like, units)}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3 text-md">
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

              <div className="rounded-xl border border-divider/70 bg-background/25 px-4 py-5 md:hidden">
                <DaylightArc
                  sunriseUnixSeconds={weather.sys.sunrise}
                  sunsetUnixSeconds={weather.sys.sunset}
                  timezoneOffsetSeconds={weather.timezone}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-divider pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-1">
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

            <div className="hidden border-t border-divider pt-5 md:block">
              <DaylightArc
                className="max-w-none"
                sunriseUnixSeconds={weather.sys.sunrise}
                sunsetUnixSeconds={weather.sys.sunset}
                timezoneOffsetSeconds={weather.timezone}
              />
            </div>
          </div>
        </section>
      </section>

      <Link
        href={forecastHref}
        className="w-fit rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        View 5-day forecast
      </Link>
    </div>
  );
}
