import Link from "next/link";
import { notFound } from "next/navigation";

import { ForecastDayAccordion } from "@/components/city/ForecastDayAccordion";
import { UnitsToggle } from "@/components/ui/UnitsToggle";
import {
  getWeatherUnitsFromSearchParam,
  getWeatherUnitsHref,
} from "@/lib/units";
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
  searchParams: Promise<{
    units?: string | string[];
  }>;
}

export default async function ForecastPage({
  params,
  searchParams,
}: ForecastPageProps) {
  const { cityId } = await params;
  const { units: unitsParam } = await searchParams;
  const units = getWeatherUnitsFromSearchParam(
    Array.isArray(unitsParam) ? unitsParam[0] : unitsParam,
  );
  const forecast = await getForecastOrNotFound(cityId, units);
  const days = groupForecastByDay(forecast);
  const currentHref = getWeatherUnitsHref(
    `/weather/${encodeURIComponent(cityId)}`,
    units,
  );

  return (
    <main className="px-6 py-6">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-lg bg-content1 p-6 shadow-sm">
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
          href={currentHref}
          className="w-fit rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View current weather
        </Link>
      </section>
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
