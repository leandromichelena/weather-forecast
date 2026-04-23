import {
  Cloud,
  CloudRainWind,
  Eye,
  MapPin,
  Wind,
} from "lucide-react";

import {
  formatNumber,
  formatPop,
  formatPrecipitation,
  formatVisibility,
  formatWindSpeed,
} from "@/lib/units";

import type {
  OpenWeatherCurrentResponse,
  OpenWeatherForecastResponse,
} from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

export interface WeatherDetailItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

type ForecastSlot = OpenWeatherForecastResponse["list"][number];

export function getCurrentWeatherDetails(
  weather: OpenWeatherCurrentResponse,
  units: WeatherUnits,
): WeatherDetailItem[] {
  const details: WeatherDetailItem[] = [
    {
      icon: <Wind aria-hidden className="h-5 w-5" />,
      label: "Wind",
      value: formatWindSpeed(weather.wind.speed, units),
    },
  ];

  if (weather.rain) {
    details.push({
      icon: <CloudRainWind aria-hidden className="h-5 w-5" />,
      label: "Rain",
      value: `${formatNumber(weather.rain["1h"], {
        maximumFractionDigits: 1,
      })} mm in the last hour`,
    });
  }

  if (weather.snow) {
    details.push({
      icon: <CloudRainWind aria-hidden className="h-5 w-5" />,
      label: "Snow",
      value: `${formatNumber(weather.snow["1h"], {
        maximumFractionDigits: 1,
      })} mm in the last hour`,
    });
  }

  if (weather.clouds.all > 0) {
    details.push({
      icon: <Cloud aria-hidden className="h-5 w-5" />,
      label: "Clouds",
      value: `${weather.clouds.all}% coverage`,
    });
  }

  if (weather.visibility) {
    details.push({
      icon: <Eye aria-hidden className="h-5 w-5" />,
      label: "Visibility",
      value: formatVisibility(weather.visibility, units),
    });
  }

  details.push({
    icon: <MapPin aria-hidden className="h-5 w-5" />,
    label: "Coordinates",
    value: `${weather.coord.lat.toFixed(2)}, ${weather.coord.lon.toFixed(2)}`,
  });

  return details;
}

export function getForecastSlotDetails(
  item: ForecastSlot,
  units: WeatherUnits,
): WeatherDetailItem[] {
  const details: WeatherDetailItem[] = [
    {
      icon: <Wind aria-hidden className="h-5 w-5" />,
      label: "Wind",
      value: formatWindSpeed(item.wind.speed, units),
    },
  ];

  if (item.clouds.all > 0) {
    details.push({
      icon: <Cloud aria-hidden className="h-5 w-5" />,
      label: "Clouds",
      value: `${item.clouds.all}% coverage`,
    });
  }

  if (item.pop > 0) {
    details.push({
      icon: <CloudRainWind aria-hidden className="h-5 w-5" />,
      label: "Precipitation",
      value: formatPop(item.pop),
    });
  }

  if (item.rain) {
    details.push({
      icon: <CloudRainWind aria-hidden className="h-5 w-5" />,
      label: "Rain",
      value: `${formatPrecipitation(item.rain["3h"])} in 3 hours`,
    });
  }

  if (item.snow) {
    details.push({
      icon: <CloudRainWind aria-hidden className="h-5 w-5" />,
      label: "Snow",
      value: `${formatPrecipitation(item.snow["3h"])} in 3 hours`,
    });
  }

  if (item.visibility) {
    details.push({
      icon: <Eye aria-hidden className="h-5 w-5" />,
      label: "Visibility",
      value: formatVisibility(item.visibility, units),
    });
  }

  return details;
}
