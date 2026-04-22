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
  };
}
