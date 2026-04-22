import Link from "next/link";
import { notFound } from "next/navigation";

import { getCurrentWeather, WeatherDataError } from "@/lib/weather";

interface CurrentWeatherPageProps {
  params: Promise<{
    cityId: string;
  }>;
}

export default async function CurrentWeatherPage({
  params,
}: CurrentWeatherPageProps) {
  const { cityId } = await params;
  const weather = await getCurrentWeatherOrNotFound(cityId);

  return (
    <main>
      <h1>Current Weather: {weather.name}</h1>
      <p>City ID: {cityId}</p>
      <Link href={`/weather/${encodeURIComponent(cityId)}/forecast`}>
        View 5-day forecast
      </Link>
      <pre className="whitespace-pre-wrap font-mono">
        {JSON.stringify(weather, null, 2)}
      </pre>
    </main>
  );
}

async function getCurrentWeatherOrNotFound(cityId: string) {
  try {
    return await getCurrentWeather(cityId);
  } catch (error) {
    if (error instanceof WeatherDataError && error.status === 404) {
      notFound();
    }

    throw error;
  }
}
