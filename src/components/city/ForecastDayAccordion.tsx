"use client";

import { Accordion } from "@heroui/react";

import { ForecastDaySummary } from "@/components/city/ForecastDaySummary";
import { ForecastSlotRow } from "@/components/city/ForecastSlotRow";

import type { OpenWeatherForecastDay } from "@/types/OpenWeather";
import type { WeatherUnits } from "@/types/Weather";

interface ForecastDayAccordionProps {
  days: OpenWeatherForecastDay[];
  timezoneOffsetSeconds: number;
  units: WeatherUnits;
}

export function ForecastDayAccordion({
  days,
  timezoneOffsetSeconds,
  units,
}: ForecastDayAccordionProps) {
  return (
    <Accordion variant="surface" className="w-full">
      {days.map((day) => (
        <Accordion.Item id={day.date} key={day.date}>
          <Accordion.Heading>
            <Accordion.Trigger>
              <ForecastDaySummary day={day} units={units} />
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>
              <div className="divide-y divide-divider *:py-3 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0">
                {day.items.map((item) => (
                  <ForecastSlotRow
                    item={item}
                    key={item.dt}
                    timezoneOffsetSeconds={timezoneOffsetSeconds}
                    units={units}
                  />
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
