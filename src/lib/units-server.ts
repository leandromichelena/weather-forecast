import "server-only";

import { cookies } from "next/headers";

import { isWeatherUnits, WEATHER_UNITS_COOKIE } from "@/lib/units";

import type { WeatherUnits } from "@/types/Weather";

export async function getWeatherUnitsFromCookie(): Promise<WeatherUnits> {
  const cookieStore = await cookies();
  const units = cookieStore.get(WEATHER_UNITS_COOKIE)?.value ?? null;

  return isWeatherUnits(units) ? units : "metric";
}
