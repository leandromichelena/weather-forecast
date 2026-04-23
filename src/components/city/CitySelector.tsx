"use client";

import { ListBox, Select } from "@heroui/react";
import { useRouter } from "next/navigation";

import type { Key } from "@heroui/react";

export interface CityOption {
  id: string;
  name: string;
}

interface CitySelectorProps {
  cities: CityOption[];
}

export function CitySelector({ cities }: CitySelectorProps) {
  const router = useRouter();

  const openCurrentWeather = (id: Key | null) => {
    if (id == null) {
      return;
    }

    router.push(`/weather/${encodeURIComponent(String(id))}`);
  };

  return (
    <Select
      aria-label="Select a city"
      className="w-full max-w-xs"
      placeholder="Select..."
      onChange={openCurrentWeather}
    >
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {cities.map((city) => (
            <ListBox.Item id={city.id} key={city.id} textValue={city.name}>
              {city.name}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
