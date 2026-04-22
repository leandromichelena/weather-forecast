"use client";

import { useEffect, useState } from "react";

import { getCityDateTimeFromDate } from "@/lib/time";

import type { CityDateTime } from "@/types/Weather";

interface CityLocalTimeProps {
  timezoneOffsetSeconds: number;
}

export function CityLocalTime({
  timezoneOffsetSeconds,
}: CityLocalTimeProps) {
  const [cityTime, setCityTime] = useState<CityDateTime | null>(null);

  useEffect(() => {
    const updateCityTime = () => {
      setCityTime(getCityDateTimeFromDate(new Date(), timezoneOffsetSeconds));
    };

    updateCityTime();
    const intervalId = window.setInterval(updateCityTime, 30_000);

    return () => window.clearInterval(intervalId);
  }, [timezoneOffsetSeconds]);

  return (
    <div className="text-left sm:text-right">
      <p className="text-sm text-foreground-500">Local time</p>
      <p className="text-xl font-medium">{cityTime?.displayTime ?? "--:--"}</p>
      <p className="text-sm text-foreground-500">
        {cityTime?.displayDate ?? "Loading"}
      </p>
    </div>
  );
}
