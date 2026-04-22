type UnixTimestamp = number;
type IsoDateTimeText = string;

type OpenWeatherConditionGroup =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Mist"
  | "Smoke"
  | "Haze"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Ash"
  | "Squall"
  | "Tornado"
  | "Clear"
  | "Clouds";

type OpenWeatherIconCode =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

interface OpenWeatherCoordinates {
  lon: number;
  lat: number;
}

interface OpenWeatherCondition {
  id: number;
  main: OpenWeatherConditionGroup;
  description: string;
  icon: OpenWeatherIconCode;
}

interface OpenWeatherMeasurements {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface OpenWeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

interface OpenWeatherCurrentPrecipitation {
  "1h": number;
}

interface OpenWeatherForecastPrecipitation {
  "3h": number;
}

interface OpenWeatherClouds {
  all: number;
}

interface OpenWeatherSystem {
  type?: number;
  id?: number;
  message?: string;
  country: string;
  sunrise: UnixTimestamp;
  sunset: UnixTimestamp;
}

interface OpenWeatherForecastItemSystem {
  pod: "d" | "n";
}

interface OpenWeatherForecastCity {
  id: number;
  name: string;
  coord: OpenWeatherCoordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: UnixTimestamp;
  sunset: UnixTimestamp;
}

interface OpenWeatherForecastMeasurements extends OpenWeatherMeasurements {
  temp_kf: number;
}

interface OpenWeatherForecastItem {
  dt: UnixTimestamp;
  main: OpenWeatherForecastMeasurements;
  weather: [OpenWeatherCondition, ...OpenWeatherCondition[]];
  clouds: OpenWeatherClouds;
  wind: OpenWeatherWind;
  visibility?: number;
  pop: number;
  rain?: OpenWeatherForecastPrecipitation;
  snow?: OpenWeatherForecastPrecipitation;
  sys: OpenWeatherForecastItemSystem;
  dt_txt: IsoDateTimeText;
}

export interface OpenWeatherCurrentResponse {
  coord: OpenWeatherCoordinates;
  weather: [OpenWeatherCondition, ...OpenWeatherCondition[]];
  base: string;
  main: OpenWeatherMeasurements;
  visibility?: number;
  wind: OpenWeatherWind;
  rain?: OpenWeatherCurrentPrecipitation;
  snow?: OpenWeatherCurrentPrecipitation;
  clouds: OpenWeatherClouds;
  dt: UnixTimestamp;
  sys: OpenWeatherSystem;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface OpenWeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: OpenWeatherForecastItem[];
  city: OpenWeatherForecastCity;
}

export interface OpenWeatherErrorResponse {
  message?: string;
}

export interface OpenWeatherForecastDay {
  date: string;
  items: OpenWeatherForecastResponse["list"];
}
