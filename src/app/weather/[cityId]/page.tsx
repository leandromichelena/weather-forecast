import { notFound } from "next/navigation";

import { CurrentWeatherSummary } from "@/components/city/CurrentWeatherSummary";
import { UnitsToggle } from "@/components/ui/UnitsToggle";
import { getWeatherUnitsFromSearchParam } from "@/lib/units";
import { getCurrentWeather, WeatherDataError } from "@/lib/weather";

import type { WeatherUnits } from "@/types/Weather";

interface CurrentWeatherPageProps {
  params: Promise<{
    cityId: string;
  }>;
  searchParams: Promise<{
    units?: string;
  }>;
}

export default async function CurrentWeatherPage({
  params,
  searchParams,
}: CurrentWeatherPageProps) {
  const { cityId } = await params;
  const { units: unitsParam } = await searchParams;
  const units = getWeatherUnitsFromSearchParam(unitsParam);
  const weather = await getCurrentWeatherOrNotFound(cityId, units);

  return (
    <main className="flex flex-col gap-4 px-6 py-6">
      <div className="mx-auto flex w-full max-w-4xl justify-end">
        <UnitsToggle units={units} />
      </div>
      <CurrentWeatherSummary weather={weather} units={units} />
    </main>
  );
}

async function getCurrentWeatherOrNotFound(
  cityId: string,
  units: WeatherUnits,
) {
  try {
    return await getCurrentWeather(cityId, units);
  } catch (error) {
    if (error instanceof WeatherDataError && error.status === 404) {
      notFound();
    }

    throw error;
  }
}
