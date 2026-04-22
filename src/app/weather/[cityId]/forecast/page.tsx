import { notFound } from "next/navigation";

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
    <main>
      <h1>5-day Forecast: {forecast.city.name}</h1>
      <p>City ID: {cityId}</p>
      <pre className="whitespace-pre-wrap font-mono">
        {JSON.stringify(days, null, 2)}
      </pre>
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
