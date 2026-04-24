import { AtmosphereIcon } from "@/components/weather-icons/icons/AtmosphereIcon";
import { ClearDayIcon } from "@/components/weather-icons/icons/ClearDayIcon";
import { ClearNightIcon } from "@/components/weather-icons/icons/ClearNightIcon";
import { FewCloudsIcon } from "@/components/weather-icons/icons/FewCloudsIcon";
import { FewCloudsNightIcon } from "@/components/weather-icons/icons/FewCloudsNightIcon";
import { OvercastIcon } from "@/components/weather-icons/icons/OvercastIcon";
import { RainIcon } from "@/components/weather-icons/icons/RainIcon";
import { ScatteredCloudsIcon } from "@/components/weather-icons/icons/ScatteredCloudsIcon";
import { ShowerRainIcon } from "@/components/weather-icons/icons/ShowerRainIcon";
import { SnowIcon } from "@/components/weather-icons/icons/SnowIcon";
import { ThunderstormIcon } from "@/components/weather-icons/icons/ThunderstormIcon";

import type {
  WeatherIconKey,
  WeatherSvgProps,
} from "@/components/weather-icons/types";

export const weatherIconRegistry = {
  atmosphere: AtmosphereIcon,
  "clear-day": ClearDayIcon,
  "clear-night": ClearNightIcon,
  "few-clouds": FewCloudsIcon,
  "few-clouds-night": FewCloudsNightIcon,
  overcast: OvercastIcon,
  rain: RainIcon,
  "scattered-clouds": ScatteredCloudsIcon,
  "shower-rain": ShowerRainIcon,
  snow: SnowIcon,
  thunderstorm: ThunderstormIcon,
} satisfies Record<WeatherIconKey, React.ComponentType<WeatherSvgProps>>;
