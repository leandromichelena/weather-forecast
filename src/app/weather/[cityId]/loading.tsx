export default function CurrentWeatherLoading() {
  return (
    <main
      className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-6 py-6"
      aria-live="polite"
    >
      <div className="flex justify-end">
        <div className="h-8 w-36 rounded-md bg-content2" />
      </div>
      <section
        aria-label="Loading current weather"
        className="flex w-full flex-col gap-8 rounded-lg border border-divider bg-content1 p-6"
        role="status"
      >
        <div>
          <div className="h-8 w-44 rounded-md bg-content2" />
          <div className="mt-2 h-4 w-28 rounded-md bg-content2" />
        </div>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
          <div>
            <div className="h-16 w-32 rounded-md bg-content2" />
            <div className="mt-3 h-4 w-40 rounded-md bg-content2" />
          </div>
          <div className="grid gap-3">
            <div className="h-12 rounded-md bg-content2" />
            <div className="h-12 rounded-md bg-content2" />
            <div className="h-12 rounded-md bg-content2" />
          </div>
        </div>
        <span className="sr-only">Loading current weather</span>
      </section>
    </main>
  );
}
