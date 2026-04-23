interface WeatherDetailProps {
  showSeparator?: boolean;
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function WeatherDetail({
  showSeparator = true,
  icon,
  label,
  value,
}: WeatherDetailProps) {
  const separatorClass = showSeparator
    ? "border-b border-divider last:border-b-0"
    : "";

  return (
    <div
      className={`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 py-3 ${separatorClass}`}
    >
      <div className="text-foreground-500">{icon}</div>
      <div>
        <dt className="text-sm text-foreground-500">{label}</dt>
        <dd className="font-medium">{value}</dd>
      </div>
    </div>
  );
}
