interface WeatherDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function WeatherDetail({ icon, label, value }: WeatherDetailProps) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-divider p-3">
      <div className="text-foreground-500">{icon}</div>
      <div>
        <dt className="text-sm text-foreground-500">{label}</dt>
        <dd className="font-medium">{value}</dd>
      </div>
    </div>
  );
}
