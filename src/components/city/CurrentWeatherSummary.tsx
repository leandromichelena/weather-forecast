import { Surface } from "@heroui/react";
import {
  ArrowDown,
  ArrowUp,
  Cloud,
  CloudRainWind,
  Eye,
  MapPin,
  Wind,
} from "lucide-react";
import Link from "next/link";

import { CityLocalTime } from "@/components/city/CityLocalTime";
import { TemperatureRangeItem } from "@/components/city/TemperatureRangeItem";
import { WeatherDetail } from "@/components/city/WeatherDetail";
import {
  formatNumber,
  formatTemperature,
  formatVisibility,
  formatWindSpeed,
} from "@/lib/units";

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

  return (
    <Surface
      variant="secondary"
      className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-lg p-6 shadow-sm"
    >
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
          <WeatherDetail
            icon={<Wind aria-hidden className="h-5 w-5" />}
            label="Wind"
            value={formatWindSpeed(weather.wind.speed, units)}
          />
          {weather.rain ? (
            <WeatherDetail
              icon={<CloudRainWind aria-hidden className="h-5 w-5" />}
              label="Rain"
              value={`${formatNumber(weather.rain["1h"], {
                maximumFractionDigits: 1,
              })} mm in the last hour`}
            />
          ) : null}
          {weather.snow ? (
            <WeatherDetail
              icon={<CloudRainWind aria-hidden className="h-5 w-5" />}
              label="Snow"
              value={`${formatNumber(weather.snow["1h"], {
                maximumFractionDigits: 1,
              })} mm in the last hour`}
            />
          ) : null}
          {weather.clouds.all > 0 ? (
            <WeatherDetail
              icon={<Cloud aria-hidden className="h-5 w-5" />}
              label="Clouds"
              value={`${weather.clouds.all}% coverage`}
            />
          ) : null}
          {weather.visibility ? (
            <WeatherDetail
              icon={<Eye aria-hidden className="h-5 w-5" />}
              label="Visibility"
              value={formatVisibility(weather.visibility, units)}
            />
          ) : null}
          <WeatherDetail
            icon={<MapPin aria-hidden className="h-5 w-5" />}
            label="Coordinates"
            value={`${weather.coord.lat.toFixed(2)}, ${weather.coord.lon.toFixed(2)}`}
          />
        </dl>
      </section>

      <Link
        href={`/weather/${encodeURIComponent(String(weather.id))}/forecast`}
        className="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        View 5-day forecast
      </Link>
    </Surface>
  );
}
