import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function AtmosphereIcon({ title, ...props }: WeatherSvgProps) {
  return (
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {title ? <title>{title}</title> : null}
      <style>
        {`
          .weather-icon-atmosphere__fog-1 {
            animation: weather-icon-atmosphere__drift-a 6s ease-in-out infinite;
          }

          .weather-icon-atmosphere__fog-2 {
            animation: weather-icon-atmosphere__drift-b 7.2s ease-in-out infinite;
          }

          .weather-icon-atmosphere__fog-3 {
            animation: weather-icon-atmosphere__drift-c 5.6s ease-in-out infinite;
          }

          .weather-icon-atmosphere__fog-4 {
            animation: weather-icon-atmosphere__drift-a 6.8s ease-in-out infinite reverse;
          }

          .weather-icon-atmosphere__fog-5 {
            animation: weather-icon-atmosphere__drift-b 5.9s ease-in-out infinite reverse;
          }

          .weather-icon-atmosphere__fog-6 {
            animation: weather-icon-atmosphere__drift-c 7.4s ease-in-out infinite;
          }

          @keyframes weather-icon-atmosphere__drift-a {
            0%, 100% { transform: translateX(0px); opacity: 0.9; }
            50% { transform: translateX(5px); opacity: 0.65; }
          }

          @keyframes weather-icon-atmosphere__drift-b {
            0%, 100% { transform: translateX(0px); opacity: 0.75; }
            50% { transform: translateX(-6px); opacity: 0.95; }
          }

          @keyframes weather-icon-atmosphere__drift-c {
            0%, 100% { transform: translateX(0px); opacity: 0.85; }
            50% { transform: translateX(3px); opacity: 0.55; }
          }
        `}
      </style>

      <path
        className="weather-icon__stroke-light weather-icon-atmosphere__fog-1"
        d="M42 78
           C56 72, 72 72, 86 78
           C100 84, 116 84, 130 78
           C144 72, 160 72, 174 78
           C188 84, 202 84, 214 78"
      />
      <path
        className="weather-icon__stroke-medium weather-icon-atmosphere__fog-2"
        d="M30 102
           C46 96, 62 96, 78 102
           C94 108, 110 108, 126 102
           C142 96, 158 96, 174 102
           C190 108, 206 108, 226 102"
      />
      <path
        className="weather-icon__stroke-heavy weather-icon-atmosphere__fog-3"
        d="M24 128
           C42 120, 60 120, 78 128
           C96 136, 114 136, 132 128
           C150 120, 168 120, 186 128
           C204 136, 220 136, 232 128"
      />
      <path
        className="weather-icon__stroke-medium weather-icon-atmosphere__fog-4"
        d="M34 154
           C50 148, 66 148, 82 154
           C98 160, 114 160, 130 154
           C146 148, 162 148, 178 154
           C194 160, 208 160, 222 154"
      />
      <path
        className="weather-icon__stroke-heavy weather-icon-atmosphere__fog-5"
        d="M22 180
           C40 172, 58 172, 76 180
           C94 188, 112 188, 130 180
           C148 172, 166 172, 184 180
           C202 188, 218 188, 234 180"
      />
      <path
        className="weather-icon__stroke-light weather-icon-atmosphere__fog-6"
        d="M44 206
           C58 200, 74 200, 88 206
           C102 212, 118 212, 132 206
           C146 200, 162 200, 176 206
           C190 212, 204 212, 216 206"
      />
    </svg>
  );
}
