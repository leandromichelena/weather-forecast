import type {
  OpenWeatherCurrentResponse,
  OpenWeatherForecastResponse,
} from "@/types/OpenWeather";

export type WeatherCondition =
  | OpenWeatherCurrentResponse["weather"][number]
  | OpenWeatherForecastResponse["list"][number]["weather"][number];

export type WeatherIconKey =
  | "clear-day"
  | "clear-night"
  | "few-clouds"
  | "few-clouds-night"
  | "scattered-clouds"
  | "overcast"
  | "rain"
  | "shower-rain"
  | "snow"
  | "thunderstorm"
  | "atmosphere";

export type WeatherIconSize = "sm" | "md" | "lg";

export interface WeatherSvgProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}
