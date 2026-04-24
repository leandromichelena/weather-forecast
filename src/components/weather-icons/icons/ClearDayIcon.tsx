import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function ClearDayIcon({ title, ...props }: WeatherSvgProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <style>
        {`
          .weather-icon-clear-day__sun-rotator {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-clear-day__sway 6s ease-in-out infinite;
          }

          .weather-icon-clear-day__sun-core {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-clear-day__breathe 6s ease-in-out infinite;
          }

          @keyframes weather-icon-clear-day__sway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(10deg); }
          }

          @keyframes weather-icon-clear-day__breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
        `}
      </style>

      <g className="weather-icon-clear-day__sun-rotator">
        <g className="weather-icon-clear-day__sun-core">
          <circle
            className="weather-icon__stroke-heavy"
            cx="128"
            cy="128"
            r="42"
          />
          <path
            className="weather-icon__stroke-light"
            d="M104 112 C110 99, 127 95, 140 104"
          />
        </g>
        <line
          className="weather-icon__stroke-medium"
          x1="128"
          y1="30"
          x2="128"
          y2="56"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="128"
          y1="200"
          x2="128"
          y2="226"
        />
        <line
          className="weather-icon__stroke-heavy"
          x1="43.13"
          y1="79"
          x2="65.65"
          y2="92"
        />
        <line
          className="weather-icon__stroke-heavy"
          x1="190.35"
          y1="164"
          x2="212.87"
          y2="177"
        />
        <line
          className="weather-icon__stroke-light"
          x1="43.13"
          y1="177"
          x2="65.65"
          y2="164"
        />
        <line
          className="weather-icon__stroke-light"
          x1="190.35"
          y1="92"
          x2="212.87"
          y2="79"
        />
      </g>
    </svg>
  );
}
