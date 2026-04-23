import { CitySelector } from "@/components/city/CitySelector";

const cities = [
  { id: "6167865", name: "Toronto" },
  { id: "6094817", name: "Ottawa" },
  { id: "1850147", name: "Tokyo" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-4xl flex-col justify-center gap-6 px-6 py-12">
      <div className="max-w-xl">
        <p className="text-sm font-medium uppercase tracking-wide text-foreground-500">
          Weather lookup
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-normal">
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
