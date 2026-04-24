import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function FewCloudsNightIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-few-clouds-night__moon-group {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-few-clouds-night__moon-drift 8s ease-in-out infinite;
          }

          .weather-icon-few-clouds-night__cloud-back {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-few-clouds-night__cloud-back-drift 8s ease-in-out infinite;
          }

          .weather-icon-few-clouds-night__cloud-front {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-few-clouds-night__cloud-front-drift 8s ease-in-out infinite;
          }

          .weather-icon-few-clouds-night__accent {
            animation: weather-icon-few-clouds-night__accent-fade 8s ease-in-out infinite;
          }

          @keyframes weather-icon-few-clouds-night__moon-drift {
            0%, 100% { transform: translate(0px, 0px); }
            50% { transform: translate(1px, -1px); }
          }

          @keyframes weather-icon-few-clouds-night__cloud-back-drift {
            0%, 100% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
          }

          @keyframes weather-icon-few-clouds-night__cloud-front-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(-4px); }
          }

          @keyframes weather-icon-few-clouds-night__accent-fade {
            0%, 100% { opacity: 0.85; }
            50% { opacity: 0.45; }
          }
        `}
      </style>

      <g className="weather-icon-few-clouds-night__moon-group">
        <path
          className="weather-icon__stroke-medium"
          d="M170 48
             C151 52, 138 68, 138 88
             C138 112, 157 131, 181 131
             C193 131, 204 127, 212 120
             C206 136, 191 146, 174 146
             C145 146, 122 123, 122 94
             C122 72, 135 53, 154 46
             C160 43, 166 42, 170 48 Z"
        />
        <path
          className="weather-icon__stroke-light"
          d="M172 61
             C162 65, 156 75, 156 86
             C156 99, 164 109, 176 113"
        />
      </g>

      <g className="weather-icon-few-clouds-night__cloud-back">
        <path
          className="weather-icon__cloud-fill"
          d="M92 128
             C92 118, 100 110, 111 110
             C116 99, 127 92, 139 92
             C154 92, 167 102, 171 116
             C182 117, 190 126, 190 137
             C190 149, 180 158, 167 158
             H113
             C101 158, 92 149, 92 138
             Z"
        />
        <path
          className="weather-icon__stroke-light"
          d="M92 128
             C92 118, 100 110, 111 110
             C116 99, 127 92, 139 92
             C154 92, 167 102, 171 116
             C182 117, 190 126, 190 137
             C190 149, 180 158, 167 158
             H113
             C101 158, 92 149, 92 138
             Z"
        />
      </g>

      <g className="weather-icon-few-clouds-night__cloud-front">
        <path
          className="weather-icon__cloud-fill"
          d="M54 165
             C54 145, 64 135, 77 135
             C82 121, 95 112, 110 112
             C130 112, 146 125, 151 143
             C166 144, 178 156, 178 171
             C178 186, 166 196, 150 196
             H79
             C65 196, 54 186, 54 165
             Z"
        />
        <path
          className="weather-icon__stroke-heavy"
          d="M54 165
             C54 145, 64 135, 77 135
             C82 121, 95 112, 110 112
             C130 112, 146 125, 151 143
             C166 144, 178 156, 178 171
             C178 186, 166 196, 150 196
             H79
             C65 196, 54 186, 54 165
             Z"
        />
      </g>

      <g className="weather-icon-few-clouds-night__accent">
        <path className="weather-icon__stroke-light" d="M34 122 H52" />
        <path className="weather-icon__stroke-light" d="M198 168 H220" />
      </g>
    </svg>
  );
}
