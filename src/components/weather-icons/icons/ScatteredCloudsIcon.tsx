import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function ScatteredCloudsIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-scattered-clouds__cloud-front {
            transform-origin: center;
            animation: weather-icon-scattered-clouds__float-front 8s ease-in-out infinite;
          }

          .weather-icon-scattered-clouds__cloud-back {
            transform-origin: center;
            animation: weather-icon-scattered-clouds__float-back 8s ease-in-out infinite;
          }

          .weather-icon-scattered-clouds__accent-1 {
            animation: weather-icon-scattered-clouds__drift-1 8s ease-in-out infinite;
          }

          .weather-icon-scattered-clouds__accent-2 {
            animation: weather-icon-scattered-clouds__drift-2 8s ease-in-out infinite;
          }

          @keyframes weather-icon-scattered-clouds__float-front {
            0%, 100% { transform: translate(-5px, 0px); }
            50% { transform: translate(2px, -1.5px); }
          }

          @keyframes weather-icon-scattered-clouds__float-back {
            0%, 100% { transform: translate(2px, 0px); }
            50% { transform: translate(-2px, 1px); }
          }

          @keyframes weather-icon-scattered-clouds__drift-1 {
            0%, 100% { transform: translateX(0px); opacity: 0.9; }
            50% { transform: translateX(4px); opacity: 0.55; }
          }

          @keyframes weather-icon-scattered-clouds__drift-2 {
            0%, 100% { transform: translateX(0px); opacity: 0.55; }
            50% { transform: translateX(-3px); opacity: 0.9; }
          }
        `}
      </style>

      <g className="weather-icon-scattered-clouds__cloud-back">
        <path
          className="weather-icon__cloud-fill"
          d="M84 126
             C84 114, 94 104, 107 104
             C112 92, 123 84, 136 84
             C153 84, 167 95, 171 110
             C184 111, 194 121, 194 134
             C194 148, 183 158, 168 158
             H107
             C94 158, 84 148, 84 136
             Z"
        />
        <path
          className="weather-icon__stroke-medium"
          d="M84 126
             C84 114, 94 104, 107 104
             C112 92, 123 84, 136 84
             C153 84, 167 95, 171 110
             C184 111, 194 121, 194 134
             C194 148, 183 158, 168 158
             H107
             C94 158, 84 148, 84 136
             Z"
        />
      </g>

      <g className="weather-icon-scattered-clouds__cloud-front">
        <path
          className="weather-icon__cloud-fill"
          d="M54 154
             C54 139, 66 127, 81 127
             C87 111, 102 100, 119 100
             C141 100, 159 114, 164 134
             C181 135, 194 148, 194 165
             C194 182, 180 194, 162 194
             H82
             C66 194, 54 182, 54 166
             Z"
        />
        <path
          className="weather-icon__stroke-heavy"
          d="M54 154
             C54 139, 66 127, 81 127
             C87 111, 102 100, 119 100
             C141 100, 159 114, 164 134
             C181 135, 194 148, 194 165
             C194 182, 180 194, 162 194
             H82
             C66 194, 54 182, 54 166
             Z"
        />
      </g>

      <g className="weather-icon-scattered-clouds__accent-1">
        <path className="weather-icon__stroke-light" d="M36 118 H60" />
        <path className="weather-icon__stroke-light" d="M28 138 H48" />
      </g>

      <g className="weather-icon-scattered-clouds__accent-2">
        <path className="weather-icon__stroke-light" d="M198 112 H220" />
        <path className="weather-icon__stroke-light" d="M206 134 H228" />
      </g>
    </svg>
  );
}
