import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function RainIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-rain__cloud-back {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-rain__cloud-back-drift 6s ease-in-out infinite;
          }

          .weather-icon-rain__cloud-front {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-rain__cloud-front-drift 4.8s ease-in-out infinite;
          }

          .weather-icon-rain__drop {
            opacity: 0;
            animation: weather-icon-rain__fall 1.8s linear infinite;
          }

          .weather-icon-rain__d1 { animation-delay: 0s; }
          .weather-icon-rain__d2 { animation-delay: -0.3s; }
          .weather-icon-rain__d3 { animation-delay: -0.6s; }
          .weather-icon-rain__d4 { animation-delay: -0.9s; }
          .weather-icon-rain__d5 { animation-delay: -1.2s; }
          .weather-icon-rain__d6 { animation-delay: -1.5s; }
          .weather-icon-rain__d7 { animation-delay: -0.15s; }
          .weather-icon-rain__d8 { animation-delay: -0.75s; }
          .weather-icon-rain__d9 { animation-delay: -1.35s; }

          @keyframes weather-icon-rain__cloud-back-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(2px); }
          }

          @keyframes weather-icon-rain__cloud-front-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(-3px); }
          }

          @keyframes weather-icon-rain__fall {
            0% { transform: translate(0px, 0px); opacity: 0; }
            12% { opacity: 0.9; }
            78% { opacity: 0.9; }
            100% { transform: translate(16px, 32px); opacity: 0; }
          }
        `}
      </style>

      <g className="weather-icon-rain__cloud-back">
        <path
          className="weather-icon__cloud-fill"
          d="M88 108
             C88 96, 98 86, 111 86
             C116 74, 128 66, 142 66
             C160 66, 174 78, 179 95
             C193 96, 204 107, 204 121
             C204 136, 192 148, 176 148
             H111
             C98 148, 88 138, 88 125
             Z"
        />
        <path
          className="weather-icon__stroke-medium"
          d="M88 108
             C88 96, 98 86, 111 86
             C116 74, 128 66, 142 66
             C160 66, 174 78, 179 95
             C193 96, 204 107, 204 121
             C204 136, 192 148, 176 148
             H111
             C98 148, 88 138, 88 125
             Z"
        />
      </g>

      <g>
        <line
          className="weather-icon__stroke-light weather-icon-rain__drop weather-icon-rain__d1"
          x1="70"
          y1="174"
          x2="76"
          y2="186"
        />
        <line
          className="weather-icon__stroke-light weather-icon-rain__drop weather-icon-rain__d2"
          x1="92"
          y1="176"
          x2="98"
          y2="188"
        />
        <line
          className="weather-icon__stroke-light weather-icon-rain__drop weather-icon-rain__d3"
          x1="114"
          y1="174"
          x2="120"
          y2="186"
        />
        <line
          className="weather-icon__stroke-light weather-icon-rain__drop weather-icon-rain__d4"
          x1="136"
          y1="176"
          x2="142"
          y2="188"
        />
        <line
          className="weather-icon__stroke-light weather-icon-rain__drop weather-icon-rain__d5"
          x1="158"
          y1="174"
          x2="164"
          y2="186"
        />
        <line
          className="weather-icon__stroke-light weather-icon-rain__drop weather-icon-rain__d6"
          x1="178"
          y1="170"
          x2="184"
          y2="182"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-rain__drop weather-icon-rain__d7"
          x1="82"
          y1="188"
          x2="89"
          y2="202"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-rain__drop weather-icon-rain__d8"
          x1="126"
          y1="190"
          x2="133"
          y2="204"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-rain__drop weather-icon-rain__d9"
          x1="168"
          y1="188"
          x2="175"
          y2="202"
        />
      </g>

      <g className="weather-icon-rain__cloud-front">
        <path
          className="weather-icon__cloud-fill"
          d="M48 145
             C48 120, 60 108, 75 108
             C81 92, 96 82, 114 82
             C136 82, 154 97, 160 118
             C177 119, 190 133, 190 150
             C190 168, 176 180, 157 180
             H76
             C60 180, 48 168, 48 145
             Z"
        />
        <path
          className="weather-icon__stroke-heavy"
          d="M48 145
             C48 120, 60 108, 75 108
             C81 92, 96 82, 114 82
             C136 82, 154 97, 160 118
             C177 119, 190 133, 190 150
             C190 168, 176 180, 157 180
             H76
             C60 180, 48 168, 48 145
             Z"
        />
      </g>
    </svg>
  );
}
