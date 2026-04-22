import { notFound } from "next/navigation";

import {
  getFiveDayForecast,
  groupForecastByDay,
  WeatherDataError,
} from "@/lib/weather";

interface ForecastPageProps {
  params: Promise<{
    cityId: string;
  }>;
}

export default async function ForecastPage({ params }: ForecastPageProps) {
  const { cityId } = await params;
  const forecast = await getForecastOrNotFound(cityId);
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

async function getForecastOrNotFound(cityId: string) {
  try {
    return await getFiveDayForecast(cityId);
  } catch (error) {
    if (error instanceof WeatherDataError && error.status === 404) {
      notFound();
    }

    throw error;
  }
}
