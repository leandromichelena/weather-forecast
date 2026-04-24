import { weatherIconRegistry } from "@/components/weather-icons/icon-registry";
import { getWeatherIconKey } from "@/lib/weather-icon-map";

import type {
  WeatherCondition,
  WeatherIconSize,
} from "@/components/weather-icons/types";

interface WeatherConditionIconProps {
  condition: WeatherCondition;
  size?: WeatherIconSize;
  decorative?: boolean;
  className?: string;
}

export function WeatherConditionIcon({
  condition,
  size = "md",
  decorative = true,
  className,
}: WeatherConditionIconProps) {
  const iconKey = getWeatherIconKey(condition);
  const Icon = weatherIconRegistry[iconKey];
  const label = toWeatherIconLabel(condition.description);
  const svgClassName = [
    "weather-icon",
    `weather-icon--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Icon
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      className={svgClassName}
      role="img"
      title={decorative ? undefined : label}
    />
  );
}

function toWeatherIconLabel(description: string) {
  return description
    .split(" ")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}
