interface TemperatureRangeItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function TemperatureRangeItem({
  icon,
  label,
  value,
}: TemperatureRangeItemProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-content2 px-3 py-2">
      {icon}
      <span className="text-foreground-500">{label}</span>
      <span className="font-medium">{value}</span>
    </span>
  );
}
