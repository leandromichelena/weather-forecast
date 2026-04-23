import { WeatherNav } from "@/components/city/WeatherNav";

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

  return (
    <div className="min-h-svh">
      <WeatherNav cityId={cityId} />
      {children}
    </div>
  );
}
