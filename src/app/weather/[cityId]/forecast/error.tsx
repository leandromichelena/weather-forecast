"use client";

interface ForecastErrorProps {
  error: Error;
  reset: () => void;
}

export default function ForecastError({ error, reset }: ForecastErrorProps) {
  return (
    <main>
      <h1>Unable to load forecast</h1>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
