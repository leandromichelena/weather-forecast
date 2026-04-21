"use client";

import { Label, ListBox, Select } from "@heroui/react";
import { useState } from "react";

import type { Key } from "@heroui/react";

export default function Home() {
  const [weatherData, setWeatherData] = useState("");

  const fetchCurrentWeather = async (id: Key | null) => {
    if (id == null) {
      return;
    }

    setWeatherData("Loading...");

    try {
      const response = await fetch(
        `/api/weather?id=${encodeURIComponent(String(id))}`,
      );
      const data = await response.json();

      setWeatherData(JSON.stringify(data, null, 2));
    } catch (error) {
      setWeatherData(
        JSON.stringify(
          {
            error:
              error instanceof Error
                ? error.message
                : "Unable to fetch weather data",
          },
          null,
          2,
        ),
      );
    }
  };

  return (
    <div>
      <main>
        <h1 className="">Weather Forecast</h1>
        <Select
          className="w-[256px]"
          placeholder="Select a city"
          onChange={fetchCurrentWeather}
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
        <p className="whitespace-pre-wrap font-mono" aria-live="polite">
          {weatherData}
        </p>
      </main>
    </div>
  );
}
