export default function ForecastLoading() {
  return (
    <main
      className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-6"
      aria-live="polite"
    >
      <section aria-label="Loading forecast" className="grid gap-6" role="status">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="h-8 w-64 rounded-md bg-content2" />
            <div className="mt-2 h-4 w-72 max-w-full rounded-md bg-content2" />
          </div>
          <div className="h-8 w-36 rounded-md bg-content2" />
        </div>
        <div className="grid gap-3">
          <div className="h-16 rounded-md bg-content2" />
          <div className="h-16 rounded-md bg-content2" />
          <div className="h-16 rounded-md bg-content2" />
        </div>
        <span className="sr-only">Loading forecast</span>
      </section>
    </main>
  );
}
