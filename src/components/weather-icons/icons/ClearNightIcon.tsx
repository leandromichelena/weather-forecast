import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function ClearNightIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-clear-night__moon {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-clear-night__moon-drift 8s ease-in-out infinite;
          }

          .weather-icon-clear-night__star-a {
            transform-origin: center;
            animation: weather-icon-clear-night__twinkle-a 5.8s ease-in-out infinite;
          }

          .weather-icon-clear-night__star-b {
            transform-origin: center;
            animation: weather-icon-clear-night__twinkle-b 6.6s ease-in-out infinite;
          }

          .weather-icon-clear-night__star-c {
            transform-origin: center;
            animation: weather-icon-clear-night__twinkle-c 7.2s ease-in-out infinite;
          }

          .stroke-fade {
            animation: stroke-fade__moon-drift 8s ease-in-out infinite;
          }

          @keyframes weather-icon-clear-night__moon-drift {
            0%, 100% { transform: translate(0px, 0px); }
            50% { transform: translate(1px, -1px); }
          }

          @keyframes stroke-fade__moon-drift {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.25; }
          }

          @keyframes weather-icon-clear-night__twinkle-a {
            0%, 100% { transform: scale(1); opacity: 0.82; }
            50% { transform: scale(0.97); opacity: 0.58; }
          }

          @keyframes weather-icon-clear-night__twinkle-b {
            0%, 100% { transform: scale(0.98); opacity: 0.62; }
            50% { transform: scale(1.02); opacity: 0.82; }
          }

          @keyframes weather-icon-clear-night__twinkle-c {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(0.96); opacity: 0.5; }
          }
        `}
      </style>

      <g className="weather-icon-clear-night__moon">
        <path
          className="weather-icon__stroke-heavy"
          d="M152 44
             C129 49, 112 69, 112 94
             C112 123, 135 146, 164 146
             C178 146, 191 141, 201 132
             C194 151, 176 164, 155 164
             C119 164, 90 135, 90 99
             C90 72, 106 49, 130 40
             C138 37, 146 36, 152 44 Z"
        />
        <path
          className="weather-icon__stroke-light stroke-fade"
          d="M154 58
             C142 63, 134 75, 134 89
             C134 104, 144 117, 158 122"
        />
      </g>

      <g className="weather-icon-clear-night__star-a">
        <line
          className="weather-icon__stroke-medium"
          x1="60"
          y1="56"
          x2="60"
          y2="72"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="52"
          y1="64"
          x2="68"
          y2="64"
        />
      </g>
      <g className="weather-icon-clear-night__star-b">
        <line
          className="weather-icon__stroke-light stroke-fade"
          x1="196"
          y1="58"
          x2="196"
          y2="70"
        />
        <line
          className="weather-icon__stroke-light stroke-fade"
          x1="190"
          y1="64"
          x2="202"
          y2="64"
        />
      </g>
      <g className="weather-icon-clear-night__star-c">
        <line
          className="weather-icon__stroke-light stroke-fade"
          x1="204"
          y1="170"
          x2="204"
          y2="182"
        />
        <line
          className="weather-icon__stroke-light stroke-fade"
          x1="198"
          y1="176"
          x2="210"
          y2="176"
        />
      </g>
      <g className="weather-icon-clear-night__star-b">
        <line
          className="weather-icon__stroke-medium"
          x1="54"
          y1="164"
          x2="54"
          y2="180"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="46"
          y1="172"
          x2="62"
          y2="172"
        />
      </g>
      <g className="weather-icon-clear-night__star-c">
        <line
          className="weather-icon__stroke-light"
          x1="176"
          y1="112"
          x2="176"
          y2="122"
        />
        <line
          className="weather-icon__stroke-light"
          x1="171"
          y1="117"
          x2="181"
          y2="117"
        />
      </g>
    </svg>
  );
}
