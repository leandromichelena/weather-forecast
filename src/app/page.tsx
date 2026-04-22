"use client";

import { Label, ListBox, Select } from "@heroui/react";
import { useRouter } from "next/navigation";

import type { Key } from "@heroui/react";

export default function Home() {
  const router = useRouter();

  const openCurrentWeather = (id: Key | null) => {
    if (id == null) {
      return;
    }

    router.push(`/weather/${encodeURIComponent(String(id))}`);
  };

  return (
    <div>
      <main>
        <h1 className="">Weather Forecast</h1>
        <Select
          className="w-[256px]"
          placeholder="Select a city"
          onChange={openCurrentWeather}
        >
          <Label>City</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="6167865" textValue="Toronto">
                Toronto
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="6094817" textValue="Ottawa">
                Ottawa
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="1850147" textValue="Tokyo">
                Tokyo
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </main>
    </div>
  );
}
