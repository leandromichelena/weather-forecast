import { CitySelector } from "@/components/city/CitySelector";

const cities = [
  { id: "6167865", name: "Toronto" },
  { id: "6094817", name: "Ottawa" },
  { id: "1850147", name: "Tokyo" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-5xl flex-col justify-center gap-8 px-6 py-12">
      <div className="max-w-xl">
        <h1 className="mt-2 text-5xl font-semibold tracking-normal">
          Weather Forecast
        </h1>
        <p className="mt-3 text-base text-foreground-500">
          Select a city to view current conditions and the 5-day forecast.
        </p>
      </div>
      <CitySelector cities={cities} />
    </main>
  );
}
