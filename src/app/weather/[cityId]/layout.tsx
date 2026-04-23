interface WeatherLayoutProps {
  children: React.ReactNode;
}

export default function WeatherLayout({ children }: WeatherLayoutProps) {
  return <div className="min-h-[calc(100svh-5rem)]">{children}</div>;
}
