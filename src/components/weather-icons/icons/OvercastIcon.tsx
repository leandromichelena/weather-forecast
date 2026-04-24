import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function OvercastIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-overcast__cloud-back {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-overcast__drift-back 8s ease-in-out infinite;
          }

          .weather-icon-overcast__cloud-mid {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-overcast__drift-mid 8s ease-in-out infinite;
          }

          .weather-icon-overcast__cloud-front {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-overcast__drift-front 8s ease-in-out infinite;
          }

          .weather-icon-overcast__accent {
            animation: weather-icon-overcast__accent-fade 8s ease-in-out infinite;
          }

          @keyframes weather-icon-overcast__drift-back {
            0%, 100% { transform: translateX(-10px) translateY(0px); }
            50% { transform: translateX(5px) translateY(-1px); }
          }

          @keyframes weather-icon-overcast__drift-mid {
            0%, 100% { transform: translateX(10px) translateY(0px); }
            50% { transform: translateX(-3px) translateY(1px); }
          }

          @keyframes weather-icon-overcast__drift-front {
            0%, 100% { transform: translateX(-10px) translateY(0px); }
            50% { transform: translateX(4px) translateY(0px); }
          }

          @keyframes weather-icon-overcast__accent-fade {
            0%, 100% { opacity: 0.7; transform: translateX(0px); }
            50% { opacity: 0.4; transform: translateX(-3px); }
          }
        `}
      </style>

      <g className="weather-icon-overcast__cloud-back">
        <path
          className="weather-icon__cloud-fill"
          d="M56 120
             C56 98, 66 88, 79 88
             C84 76, 96 68, 110 68
             C128 68, 142 80, 147 97
             C161 98, 172 109, 172 123
             C172 138, 160 150, 144 150
             H79
             C66 150, 56 140, 56 120"
        />
        <path
          className="weather-icon__stroke-light"
          d="M56 120
             C56 98, 66 88, 79 88
             C84 76, 96 68, 110 68
             C128 68, 142 80, 147 97
             C161 98, 172 109, 172 123
             C172 138, 160 150, 144 150
             H79
             C66 150, 56 140, 56 120"
        />
      </g>

      <g className="weather-icon-overcast__cloud-mid">
        <path
          className="weather-icon__cloud-fill"
          d="M84 145
             C84 123, 94 112, 108 112
             C114 98, 127 89, 143 89
             C163 89, 179 102, 184 121
             C200 122, 212 135, 212 151
             C212 167, 199 179, 182 179
             H109
             C95 179, 84 168, 84 145
             Z"
        />
        <path
          className="weather-icon__stroke-medium"
          d="M84 145
             C84 123, 94 112, 108 112
             C114 98, 127 89, 143 89
             C163 89, 179 102, 184 121
             C200 122, 212 135, 212 151
             C212 167, 199 179, 182 179
             H109
             C95 179, 84 168, 84 145
             Z"
        />
      </g>

      <g className="weather-icon-overcast__cloud-front">
        <path
          className="weather-icon__cloud-fill"
          d="M50 165
             C50 142, 61 131, 75 131
             C81 116, 95 106, 112 106
             C133 106, 150 120, 156 140
             C172 141, 186 154, 186 171
             C186 188, 172 200, 154 200
             H76
             C61 200, 50 188, 50 165
             Z"
        />
        <path
          className="weather-icon__stroke-heavy"
          d="M50 165
             C50 142, 61 131, 75 131
             C81 116, 95 106, 112 106
             C133 106, 150 120, 156 140
             C172 141, 186 154, 186 171
             C186 188, 172 200, 154 200
             H76
             C61 200, 50 188, 50 165
             Z"
        />
      </g>

      <g className="weather-icon-overcast__accent">
        <path className="weather-icon__stroke-light" d="M24 214 H64" />
        <path className="weather-icon__stroke-medium" d="M96 218 H156" />
        <path className="weather-icon__stroke-light" d="M184 214 H232" />
      </g>
    </svg>
  );
}
