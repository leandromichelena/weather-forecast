import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function FewCloudsIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-few-clouds__sun-group {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-few-clouds__sun-sway 8s ease-in-out infinite;
          }

          .weather-icon-few-clouds__cloud-back {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-few-clouds__cloud-back-drift 8s ease-in-out infinite;
          }

          .weather-icon-few-clouds__cloud-front {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-few-clouds__cloud-front-drift 8s ease-in-out infinite;
          }

          .weather-icon-few-clouds__accent {
            animation: weather-icon-few-clouds__accent-fade 8s ease-in-out infinite;
          }

          @keyframes weather-icon-few-clouds__sun-sway {
            0%, 100% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(12deg) scale(1.01); }
          }

          @keyframes weather-icon-few-clouds__cloud-back-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(6px); }
          }

          @keyframes weather-icon-few-clouds__cloud-front-drift {
            0%, 100% { transform: translateX(-10px); }
            50% { transform: translateX(5px); }
          }

          @keyframes weather-icon-few-clouds__accent-fade {
            0%, 100% { opacity: 0.85; }
            50% { opacity: 0.45; }
          }
        `}
      </style>

      <g className="weather-icon-few-clouds__sun-group">
        <circle
          className="weather-icon__stroke-heavy"
          cx="156"
          cy="92"
          r="30"
        />
        <path
          className="weather-icon__stroke-light"
          d="M142 82 C146 74, 158 72, 166 78"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="156"
          y1="38"
          x2="156"
          y2="54"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="156"
          y1="130"
          x2="156"
          y2="146"
        />
        <line
          className="weather-icon__stroke-heavy"
          x1="109.2"
          y1="65"
          x2="123.1"
          y2="73"
        />
        <line
          className="weather-icon__stroke-heavy"
          x1="188.9"
          y1="111"
          x2="202.8"
          y2="119"
        />
        <line
          className="weather-icon__stroke-light"
          x1="109.2"
          y1="119"
          x2="123.1"
          y2="111"
        />
        <line
          className="weather-icon__stroke-light"
          x1="188.9"
          y1="73"
          x2="202.8"
          y2="65"
        />
      </g>

      <g className="weather-icon-few-clouds__cloud-back">
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
          className="weather-icon__stroke-medium"
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

      <g className="weather-icon-few-clouds__cloud-front">
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

      <g className="weather-icon-few-clouds__accent">
        <path className="weather-icon__stroke-light" d="M34 122 H52" />
        <path className="weather-icon__stroke-light" d="M198 168 H220" />
      </g>
    </svg>
  );
}
