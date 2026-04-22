import type { CityDateTime } from "@/types/Time";

export function getCityDateTimeFromUtc(
  utcDateTimeText: string,
  timezoneOffsetSeconds: number,
): CityDateTime {
  const utcDate = new Date(`${utcDateTimeText.replace(" ", "T")}Z`);

  if (Number.isNaN(utcDate.getTime())) {
    throw new Error(`Invalid UTC date time: ${utcDateTimeText}`);
  }

  const cityDate = new Date(utcDate.getTime() + timezoneOffsetSeconds * 1000);
  const cityDateTimeText = cityDate.toISOString().replace("T", " ");

  return {
    date: cityDateTimeText.slice(0, 10),
    time: cityDateTimeText.slice(11, 16),
    dateTime: cityDateTimeText.slice(0, 19),
  };
}
