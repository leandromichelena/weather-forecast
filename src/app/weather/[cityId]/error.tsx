"use client";

interface CurrentWeatherErrorProps {
  reset: () => void;
}

export default function CurrentWeatherError({
  reset,
}: CurrentWeatherErrorProps) {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-6">
      <section
        aria-labelledby="current-weather-error-title"
        className="flex w-full flex-col gap-4 rounded-lg border border-divider bg-content1 p-6"
      >
        <h1
          className="text-2xl font-semibold tracking-normal"
          id="current-weather-error-title"
        >
          Unable to load current weather
        </h1>
        <p className="max-w-prose text-sm text-foreground-500">
          The current conditions could not be loaded. Check the city and try
          again.
        </p>
        <button
          className="w-fit rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
          type="button"
          onClick={reset}
        >
          Try again
        </button>
      </section>
    </main>
  );
}
