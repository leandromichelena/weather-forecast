"use client";

import { ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  isWeatherUnits,
  WEATHER_UNITS_COOKIE,
} from "@/lib/units";

import type { WeatherUnits } from "@/types/Weather";
import type { Key } from "@heroui/react";

interface UnitsToggleProps {
  units: WeatherUnits;
}

export function UnitsToggle({ units }: UnitsToggleProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeUnits = (keys: Set<Key> | "all") => {
    if (keys === "all") {
      return;
    }

    const selectedUnit = String(Array.from(keys)[0] ?? "");

    if (!isWeatherUnits(selectedUnit) || selectedUnit === units) {
      return;
    }

    document.cookie = `${WEATHER_UNITS_COOKIE}=${selectedUnit}; path=/; max-age=31536000; samesite=lax`;
    const nextSearchParams = new URLSearchParams(searchParams);

    if (selectedUnit === "imperial") {
      nextSearchParams.set("units", selectedUnit);
    } else {
      nextSearchParams.delete("units");
    }

    const query = nextSearchParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <ToggleButtonGroup
      aria-label="Temperature units"
      selectedKeys={new Set([units])}
      selectionMode="single"
      disallowEmptySelection
      size="sm"
      onSelectionChange={changeUnits}
    >
      <ToggleButton id="metric">Metric</ToggleButton>
      <ToggleButton id="imperial">
        <ToggleButtonGroup.Separator />
        Imperial
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
