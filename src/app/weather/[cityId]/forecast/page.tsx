import { Surface } from "@heroui/react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ForecastDayAccordion } from "@/components/city/ForecastDayAccordion";
import { UnitsToggle } from "@/components/ui/UnitsToggle";
import { getWeatherUnitsFromCookie } from "@/lib/units-server";
import {
  getFiveDayForecast,
  groupForecastByDay,
  WeatherDataError,
} from "@/lib/weather";

import type { WeatherUnits } from "@/types/Weather";

interface ForecastPageProps {
  params: Promise<{
    cityId: string;
  }>;
}

export default async function ForecastPage({ params }: ForecastPageProps) {
  const { cityId } = await params;
  const units = await getWeatherUnitsFromCookie();
  const forecast = await getForecastOrNotFound(cityId, units);
  const days = groupForecastByDay(forecast);

  return (
    <main className="p-6">
      <Surface
        variant="secondary"
        className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-lg p-6 shadow-sm"
      >
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-normal">
              5-day Forecast: {forecast.city.name}
            </h1>
            <p className="mt-1 text-sm text-foreground-500">
              Three-hour forecasts grouped by city-local day.
            </p>
          </div>
          <UnitsToggle units={units} />
        </header>

        <ForecastDayAccordion
          days={days}
          timezoneOffsetSeconds={forecast.city.timezone}
          units={units}
        />

        <Link
          href={`/weather/${encodeURIComponent(cityId)}`}
          className="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          View current weather
        </Link>
      </Surface>
    </main>
  );
}

async function getForecastOrNotFound(cityId: string, units: WeatherUnits) {
  try {
    return await getFiveDayForecast(cityId, units);
  } catch (error) {
    if (error instanceof WeatherDataError && error.status === 404) {
      notFound();
    }

    throw error;
  }
}
