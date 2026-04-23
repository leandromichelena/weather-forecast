import { WeatherDetail } from "@/components/city/WeatherDetail";
import { getCityDateTimeFromUtc } from "@/lib/time";
import { formatTemperature } from "@/lib/units";
import { getForecastSlotDetails } from "@/lib/weather-detail-view";

import type { OpenWeatherForecastResponse } from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

type ForecastSlot = OpenWeatherForecastResponse["list"][number];

const forecastDetailsGridClassName = [
  "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
  "[&>*]:border-b [&>*]:border-divider [&>*:last-child]:border-b-0",
  "sm:[&>*:nth-child(2n+1):nth-last-child(-n+2)]:border-b-0",
  "sm:[&>*:nth-child(2n+1):nth-last-child(-n+2)~*]:border-b-0",
  "xl:[&>*]:border-b",
  "xl:[&>*:nth-child(3n+1):nth-last-child(-n+3)]:border-b-0",
  "xl:[&>*:nth-child(3n+1):nth-last-child(-n+3)~*]:border-b-0",
].join(" ");

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
  const details = getForecastSlotDetails(item, units);

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

        <dl className={forecastDetailsGridClassName}>
          {details.map((detail) => (
            <WeatherDetail
              icon={detail.icon}
              key={detail.label}
              label={detail.label}
              showSeparator={false}
              value={detail.value}
            />
          ))}
        </dl>
      </div>
    </article>
  );
}
