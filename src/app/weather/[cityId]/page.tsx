import { notFound } from "next/navigation";

import { CurrentWeatherSummary } from "@/components/city/CurrentWeatherSummary";
import { UnitsToggle } from "@/components/ui/UnitsToggle";
import { getWeatherUnitsFromCookie } from "@/lib/units-server";
import { getCurrentWeather, WeatherDataError } from "@/lib/weather";

import type { WeatherUnits } from "@/types/Weather";

interface CurrentWeatherPageProps {
  params: Promise<{
    cityId: string;
  }>;
}

export default async function CurrentWeatherPage({
  params,
}: CurrentWeatherPageProps) {
  const { cityId } = await params;
  const units = await getWeatherUnitsFromCookie();
  const weather = await getCurrentWeatherOrNotFound(cityId, units);

  return (
    <main className="flex flex-col gap-4 p-6">
      <div className="mx-auto flex w-full max-w-4xl justify-end">
        <UnitsToggle units={units} />
      </div>
      <CurrentWeatherSummary
        weather={weather}
        units={units}
      />
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
