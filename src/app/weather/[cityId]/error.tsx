"use client";

interface CurrentWeatherErrorProps {
  error: Error;
  reset: () => void;
}

export default function CurrentWeatherError({
  error,
  reset,
}: CurrentWeatherErrorProps) {
  return (
    <main>
      <h1>Unable to load current weather</h1>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
