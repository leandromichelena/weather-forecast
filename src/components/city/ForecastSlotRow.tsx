import { Cloud, CloudRainWind, Eye, Wind } from "lucide-react";

import { WeatherDetail } from "@/components/city/WeatherDetail";
import { getCityDateTimeFromUtc } from "@/lib/time";
import {
  formatPop,
  formatPrecipitation,
  formatTemperature,
  formatVisibility,
  formatWindSpeed,
} from "@/lib/units";

import type { OpenWeatherForecastResponse } from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

type ForecastSlot = OpenWeatherForecastResponse["list"][number];

interface ForecastSlotRowProps {
  item: ForecastSlot;
  timezoneOffsetSeconds: number;
  units: WeatherUnits;
}

export function ForecastSlotRow({
  item,
  timezoneOffsetSeconds,
  units,
}: ForecastSlotRowProps) {
  const cityTime = getCityDateTimeFromUtc(
    item.dt_txt,
    timezoneOffsetSeconds,
  );
  const condition = item.weather[0];

  return (
    <article className="grid gap-4 rounded-md border border-divider p-4 md:grid-cols-[120px_minmax(0,1fr)]">
      <div>
        <p className="text-lg font-semibold">{cityTime.displayTime}</p>
      </div>

      <div className="grid gap-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
          <p className="text-xl font-semibold">
            {formatTemperature(item.main.temp, units)}
          </p>
          <p className="text-sm capitalize text-foreground-500">
            {condition.description}
          </p>
          <p className="text-sm text-foreground-500">
            Feels like {formatTemperature(item.main.feels_like, units)}
          </p>
        </div>

        <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <WeatherDetail
            icon={<Wind aria-hidden className="h-5 w-5" />}
            label="Wind"
            value={formatWindSpeed(item.wind.speed, units)}
          />
          {item.clouds.all > 0 ? (
            <WeatherDetail
              icon={<Cloud aria-hidden className="h-5 w-5" />}
              label="Clouds"
              value={`${item.clouds.all}% coverage`}
            />
          ) : null}
          {item.pop > 0 ? (
            <WeatherDetail
              icon={<CloudRainWind aria-hidden className="h-5 w-5" />}
              label="Precipitation"
              value={formatPop(item.pop)}
            />
          ) : null}
          {item.rain ? (
            <WeatherDetail
              icon={<CloudRainWind aria-hidden className="h-5 w-5" />}
              label="Rain"
              value={`${formatPrecipitation(item.rain["3h"])} in 3 hours`}
            />
          ) : null}
          {item.snow ? (
            <WeatherDetail
              icon={<CloudRainWind aria-hidden className="h-5 w-5" />}
              label="Snow"
              value={`${formatPrecipitation(item.snow["3h"])} in 3 hours`}
            />
          ) : null}
          {item.visibility ? (
            <WeatherDetail
              icon={<Eye aria-hidden className="h-5 w-5" />}
              label="Visibility"
              value={formatVisibility(item.visibility, units)}
            />
          ) : null}
        </dl>
      </div>
    </article>
  );
}
