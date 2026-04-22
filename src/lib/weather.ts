import "server-only";

import { getCityDateTimeFromUtc } from "@/lib/time";

import type {
  OpenWeatherCurrentResponse,
  OpenWeatherErrorResponse,
  OpenWeatherForecastDay,
  OpenWeatherForecastResponse,
} from "@/types/OpenWeather";

const APP_ID = process.env.APP_ID;

export class WeatherDataError extends Error {
  status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.name = "WeatherDataError";
    this.status = status;
  }
}

export async function getCurrentWeather(
  cityId: string,
): Promise<OpenWeatherCurrentResponse> {
  if (!APP_ID) {
    throw new WeatherDataError("Missing APP_ID environment variable");
  }

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.set("id", cityId);
  url.searchParams.set("appid", APP_ID);

  const response = await fetch(url, {
    next: {
      revalidate: 300,
      tags: [`openweather:weather:${cityId}`],
    },
  });
  const data = (await response.json()) as
    | OpenWeatherCurrentResponse
    | OpenWeatherErrorResponse;

  if (!response.ok) {
    const message = (data as OpenWeatherErrorResponse).message;

    throw new WeatherDataError(
      typeof message === "string"
        ? message
        : "Unable to fetch current weather data",
      response.status,
    );
  }

  return data as OpenWeatherCurrentResponse;
}

export async function getFiveDayForecast(
  cityId: string,
): Promise<OpenWeatherForecastResponse> {
  if (!APP_ID) {
    throw new WeatherDataError("Missing APP_ID environment variable");
  }

  const url = new URL("https://api.openweathermap.org/data/2.5/forecast");
  url.searchParams.set("id", cityId);
  url.searchParams.set("appid", APP_ID);

  const response = await fetch(url, {
    next: {
      revalidate: 1800,
      tags: [`openweather:forecast:${cityId}`],
    },
  });
  const data = (await response.json()) as
    | OpenWeatherForecastResponse
    | OpenWeatherErrorResponse;

  if (!response.ok) {
    const message = (data as OpenWeatherErrorResponse).message;

    throw new WeatherDataError(
      typeof message === "string" ? message : "Unable to fetch forecast data",
      response.status,
    );
  }

  return data as OpenWeatherForecastResponse;
}

export function groupForecastByDay(
  forecast: OpenWeatherForecastResponse,
): OpenWeatherForecastDay[] {
  const days = new Map<string, OpenWeatherForecastResponse["list"]>();

  for (const item of forecast.list) {
    const { date } = getCityDateTimeFromUtc(
      item.dt_txt,
      forecast.city.timezone,
    );
    const items = days.get(date);

    if (items) {
      items.push(item);
    } else {
      days.set(date, [item]);
    }
  }

  return Array.from(days, ([date, items]) => ({ date, items }));
}
