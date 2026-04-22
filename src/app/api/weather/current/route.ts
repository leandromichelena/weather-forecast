import { NextResponse } from "next/server";

import { isWeatherUnits } from "@/lib/units";
import { getWeatherUnitsFromCookie } from "@/lib/units-server";
import { getCurrentWeather, WeatherDataError } from "@/lib/weather";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("cityId");
  const unitParam = searchParams.get("units");
  const units = isWeatherUnits(unitParam)
    ? unitParam
    : await getWeatherUnitsFromCookie();

  if (!cityId) {
    return NextResponse.json({ error: "Missing cityId" }, { status: 400 });
  }

  try {
    const data = await getCurrentWeather(cityId, units);

    return NextResponse.json(data);
  } catch (error) {
    const status = error instanceof WeatherDataError ? error.status : 500;
    const message =
      error instanceof Error ? error.message : "Unable to fetch current weather";

    return NextResponse.json({ error: message }, { status });
  }
}
