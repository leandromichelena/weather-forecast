import { WeatherConditionIcon } from "@/components/weather-icons/WeatherConditionIcon";

import type { WeatherCondition } from "@/components/weather-icons/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather Icon Inspection",
  description: "Static inspection page for local weather icon variants.",
};

export const dynamic = "force-static";

interface WeatherIconSample {
  label: string;
  note?: string;
  condition: WeatherCondition;
}

const weatherIconSamples: WeatherIconSample[] = [
  {
    label: "Clear sky",
    note: "01d",
    condition: {
      description: "clear sky",
      icon: "01d",
      id: 800,
      main: "Clear",
    },
  },
  {
    label: "Clear night sky",
    note: "01n",
    condition: {
      description: "clear sky",
      icon: "01n",
      id: 800,
      main: "Clear",
    },
  },
  {
    label: "Few clouds",
    note: "02d",
    condition: {
      description: "few clouds",
      icon: "02d",
      id: 801,
      main: "Clouds",
    },
  },
  {
    label: "Few clouds night",
    note: "02n",
    condition: {
      description: "few clouds",
      icon: "02n",
      id: 801,
      main: "Clouds",
    },
  },
  {
    label: "Scattered clouds",
    note: "03d",
    condition: {
      description: "scattered clouds",
      icon: "03d",
      id: 802,
      main: "Clouds",
    },
  },
  {
    label: "Scattered clouds night",
    note: "03n",
    condition: {
      description: "scattered clouds",
      icon: "03n",
      id: 802,
      main: "Clouds",
    },
  },
  {
    label: "Broken / overcast clouds",
    note: "04d",
    condition: {
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds",
    },
  },
  {
    label: "Overcast night",
    note: "04n",
    condition: {
      description: "overcast clouds",
      icon: "04n",
      id: 804,
      main: "Clouds",
    },
  },
  {
    label: "Shower rain",
    note: "09d",
    condition: {
      description: "shower rain",
      icon: "09d",
      id: 521,
      main: "Rain",
    },
  },
  {
    label: "Shower rain night",
    note: "09n",
    condition: {
      description: "heavy intensity shower rain",
      icon: "09n",
      id: 522,
      main: "Rain",
    },
  },
  {
    label: "Rain",
    note: "10d",
    condition: {
      description: "moderate rain",
      icon: "10d",
      id: 501,
      main: "Rain",
    },
  },
  {
    label: "Rain night",
    note: "10n",
    condition: {
      description: "light rain",
      icon: "10n",
      id: 500,
      main: "Rain",
    },
  },
  {
    label: "Thunderstorm",
    note: "11d",
    condition: {
      description: "thunderstorm",
      icon: "11d",
      id: 211,
      main: "Thunderstorm",
    },
  },
  {
    label: "Thunderstorm night",
    note: "11n",
    condition: {
      description: "thunderstorm with rain",
      icon: "11n",
      id: 201,
      main: "Thunderstorm",
    },
  },
  {
    label: "Snow",
    note: "13d",
    condition: {
      description: "snow",
      icon: "13d",
      id: 601,
      main: "Snow",
    },
  },
  {
    label: "Snow night",
    note: "13n",
    condition: {
      description: "light snow",
      icon: "13n",
      id: 600,
      main: "Snow",
    },
  },
  {
    label: "Mist / fog",
    note: "50d",
    condition: {
      description: "mist",
      icon: "50d",
      id: 701,
      main: "Mist",
    },
  },
  {
    label: "Atmosphere night",
    note: "50n",
    condition: {
      description: "fog",
      icon: "50n",
      id: 741,
      main: "Fog",
    },
  },
];

export default function WeatherIconsInspectionPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground-500">
          Inspection
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Weather Icon Gallery
        </h1>
      </header>

      <section
        aria-label="Weather icon samples"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {weatherIconSamples.map((sample) => (
          <article
            key={`${sample.condition.icon}-${sample.label}`}
            className="flex items-center gap-4 rounded-xl border border-divider bg-content1 p-5"
          >
            <WeatherConditionIcon
              condition={sample.condition}
              size="lg"
              decorative={false}
              className="text-foreground"
            />
            <div className="min-w-0">
              <h2 className="text-lg font-medium tracking-tight">
                {sample.label}
              </h2>
              <p className="text-sm capitalize text-foreground-500">
                {sample.condition.description}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-foreground-500">
                {sample.note}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
