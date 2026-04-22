import type { WeatherUnits } from "@/types/Weather";

export const WEATHER_UNITS_COOKIE = "weather-units";

export function isWeatherUnits(value: string | null): value is WeatherUnits {
  return value === "metric" || value === "imperial";
}

export function getTemperatureUnitLabel(units: WeatherUnits) {
  return units === "metric" ? "C" : "F";
}

export function getWindSpeedUnitLabel(units: WeatherUnits) {
  return units === "metric" ? "m/s" : "mph";
}

export function formatTemperature(value: number, units: WeatherUnits) {
  return `${Math.round(value)}°${getTemperatureUnitLabel(units)}`;
}

export function formatWindSpeed(value: number, units: WeatherUnits) {
  return `${formatNumber(value, {
    maximumFractionDigits: 1,
  })} ${getWindSpeedUnitLabel(units)}`;
}

export function formatVisibility(visibilityMeters: number, units: WeatherUnits) {
  if (units === "imperial") {
    return `${formatNumber(visibilityMeters / 1609.344, {
      maximumFractionDigits: 1,
    })} mi`;
  }

  return `${formatNumber(visibilityMeters / 1000, {
    maximumFractionDigits: 1,
  })} km`;
}

export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
) {
  return new Intl.NumberFormat("en", options).format(value);
}
