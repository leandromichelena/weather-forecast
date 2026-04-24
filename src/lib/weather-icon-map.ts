import type {
  WeatherCondition,
  WeatherIconKey,
} from "@/components/weather-icons/types";

const weatherIconCodeMap: Partial<Record<WeatherCondition["icon"], WeatherIconKey>> = {
  "01d": "clear-day",
  "01n": "clear-night",
  "02d": "few-clouds",
  "02n": "few-clouds-night",
  "03d": "scattered-clouds",
  "03n": "scattered-clouds",
  "04d": "overcast",
  "04n": "overcast",
  "09d": "shower-rain",
  "09n": "shower-rain",
  "10d": "rain",
  "10n": "rain",
  "11d": "thunderstorm",
  "11n": "thunderstorm",
  "13d": "snow",
  "13n": "snow",
  "50d": "atmosphere",
  "50n": "atmosphere",
};

const weatherMainMap: Record<WeatherCondition["main"], WeatherIconKey> = {
  Ash: "atmosphere",
  Clear: "clear-day",
  Clouds: "overcast",
  Drizzle: "shower-rain",
  Dust: "atmosphere",
  Fog: "atmosphere",
  Haze: "atmosphere",
  Mist: "atmosphere",
  Rain: "rain",
  Sand: "atmosphere",
  Smoke: "atmosphere",
  Snow: "snow",
  Squall: "atmosphere",
  Thunderstorm: "thunderstorm",
  Tornado: "atmosphere",
};

export function getWeatherIconKey(condition: WeatherCondition): WeatherIconKey {
  return weatherIconCodeMap[condition.icon] ?? weatherMainMap[condition.main];
}
