import Link from "next/link";

interface WeatherLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    cityId: string;
  }>;
}

export default async function WeatherLayout({
  children,
  params,
}: WeatherLayoutProps) {
  const { cityId } = await params;
  const encodedCityId = encodeURIComponent(cityId);

  return (
    <div>
      <nav>
        <Link href="/">Cities</Link>
        {" | "}
        <Link href={`/weather/${encodedCityId}`}>Current</Link>
        {" | "}
        <Link href={`/weather/${encodedCityId}/forecast`}>Forecast</Link>
      </nav>
      {children}
    </div>
  );
}
