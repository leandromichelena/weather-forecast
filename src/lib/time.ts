import type { CityDateTime } from "@/types/Weather";

export function getCityDateTimeFromUtc(
  utcDateTimeText: string,
  timezoneOffsetSeconds: number,
): CityDateTime {
  const utcDate = new Date(`${utcDateTimeText.replace(" ", "T")}Z`);

  if (Number.isNaN(utcDate.getTime())) {
    throw new Error(`Invalid UTC date time: ${utcDateTimeText}`);
  }

  return getCityDateTimeFromDate(utcDate, timezoneOffsetSeconds);
}

export function getCityDateTimeFromUnix(
  unixTimestampSeconds: number,
  timezoneOffsetSeconds: number,
): CityDateTime {
  return getCityDateTimeFromDate(
    new Date(unixTimestampSeconds * 1000),
    timezoneOffsetSeconds,
  );
}

export function getCityDateTimeFromDate(
  date: Date,
  timezoneOffsetSeconds: number,
): CityDateTime {
  const cityDate = new Date(date.getTime() + timezoneOffsetSeconds * 1000);
  const cityDateTimeText = cityDate.toISOString().replace("T", " ");

  return {
    date: cityDateTimeText.slice(0, 10),
    time: cityDateTimeText.slice(11, 16),
    dateTime: cityDateTimeText.slice(0, 19),
    displayDate: formatNorthAmericanDate(cityDate),
    displayTime: formatNorthAmericanTime(cityDate),
  };
}

function formatNorthAmericanDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function formatNorthAmericanTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  }).format(date);
}
