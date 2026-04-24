import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function ThunderstormIcon({ title, ...props }: WeatherSvgProps) {
  return (
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {title ? <title>{title}</title> : null}
      <style>
        {`
          .weather-icon-thunderstorm__cloud-back {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-thunderstorm__cloud-back-drift 6.2s ease-in-out infinite;
          }

          .weather-icon-thunderstorm__cloud-front {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-thunderstorm__cloud-front-drift 5s ease-in-out infinite;
          }

          .weather-icon-thunderstorm__bolt {
            stroke-dasharray: 120;
            stroke-dashoffset: 120;
            animation: weather-icon-thunderstorm__lightning-trace 2.8s ease-in-out infinite;
          }

          .weather-icon-thunderstorm__glow {
            opacity: 0;
            animation: weather-icon-thunderstorm__glow-pulse 2.8s ease-in-out infinite;
          }

          .weather-icon-thunderstorm__accent {
            animation: weather-icon-thunderstorm__accent-fade 6s ease-in-out infinite;
          }

          .weather-icon-thunderstorm__drop {
            opacity: 0;
            animation-name: weather-icon-thunderstorm__rain-fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .weather-icon-thunderstorm__r1 { animation-duration: 1.55s; animation-delay: -0.10s; }
          .weather-icon-thunderstorm__r2 { animation-duration: 1.78s; animation-delay: -0.65s; }
          .weather-icon-thunderstorm__r3 { animation-duration: 1.62s; animation-delay: -1.10s; }
          .weather-icon-thunderstorm__r4 { animation-duration: 1.84s; animation-delay: -0.32s; }
          .weather-icon-thunderstorm__r5 { animation-duration: 1.58s; animation-delay: -1.34s; }
          .weather-icon-thunderstorm__r6 { animation-duration: 1.74s; animation-delay: -0.84s; }
          .weather-icon-thunderstorm__r7 { animation-duration: 1.48s; animation-delay: -1.22s; }
          .weather-icon-thunderstorm__r8 { animation-duration: 1.69s; animation-delay: -0.42s; }
          .weather-icon-thunderstorm__r9 { animation-duration: 1.81s; animation-delay: -1.48s; }
          .weather-icon-thunderstorm__r10 { animation-duration: 1.57s; animation-delay: -0.92s; }
          .weather-icon-thunderstorm__r11 { animation-duration: 1.72s; animation-delay: -0.20s; }
          .weather-icon-thunderstorm__r12 { animation-duration: 1.64s; animation-delay: -1.02s; }

          @keyframes weather-icon-thunderstorm__cloud-back-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(2px); }
          }

          @keyframes weather-icon-thunderstorm__cloud-front-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(-3px); }
          }

          @keyframes weather-icon-thunderstorm__lightning-trace {
            0%, 18% {
              stroke-dashoffset: 120;
              opacity: 0;
            }
            24% {
              opacity: 1;
            }
            42% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
            58% {
              stroke-dashoffset: 0;
              opacity: 0.95;
            }
            72%, 100% {
              stroke-dashoffset: 120;
              opacity: 0;
            }
          }

          @keyframes weather-icon-thunderstorm__glow-pulse {
            0%, 20%, 100% { opacity: 0; }
            32% { opacity: 0.12; }
            46% { opacity: 0.22; }
            60% { opacity: 0; }
          }

          @keyframes weather-icon-thunderstorm__accent-fade {
            0%, 100% { opacity: 0.75; }
            50% { opacity: 0.45; }
          }

          @keyframes weather-icon-thunderstorm__rain-fall {
            0% {
              transform: translate(0px, 0px);
              opacity: 0;
            }
            12% {
              opacity: 0.9;
            }
            72% {
              opacity: 0.9;
            }
            100% {
              transform: translate(16px, 32px);
              opacity: 0;
            }
          }
        `}
      </style>

      <g className="weather-icon-thunderstorm__cloud-back">
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
          className="weather-icon__stroke-light"
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

      <g className="weather-icon-thunderstorm__cloud-front">
        <path
          className="weather-icon__cloud-fill"
          d="M48 134
             C48 120, 60 108, 75 108
             C81 92, 96 82, 114 82
             C136 82, 154 97, 160 118
             C177 119, 190 133, 190 150
             C190 168, 176 180, 157 180
             H76
             C60 180, 48 168, 48 152
             Z"
        />
        <path
          className="weather-icon__stroke-heavy"
          d="M48 134
             C48 120, 60 108, 75 108
             C81 92, 96 82, 114 82
             C136 82, 154 97, 160 118
             C177 119, 190 133, 190 150
             C190 168, 176 180, 157 180
             H76
             C60 180, 48 168, 48 152
             Z"
        />
      </g>

      <g className="weather-icon-thunderstorm__glow">
        <path className="weather-icon__stroke-light" d="M108 204 H122" />
        <path className="weather-icon__stroke-light" d="M150 204 H164" />
      </g>

      <path
        className="weather-icon__stroke-medium weather-icon-thunderstorm__bolt"
        d="M138 180
           L122 208
           H138
           L126 232"
      />

      <g>
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r1" x1="58" y1="176" x2="64" y2="188" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r2" x1="76" y1="186" x2="82" y2="198" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r3" x1="94" y1="178" x2="100" y2="190" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r4" x1="114" y1="188" x2="121" y2="202" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r5" x1="166" y1="176" x2="172" y2="188" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r6" x1="182" y1="186" x2="188" y2="198" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r7" x1="66" y1="202" x2="72" y2="214" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r8" x1="88" y1="210" x2="95" y2="224" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r9" x1="162" y1="202" x2="168" y2="214" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r10" x1="180" y1="208" x2="187" y2="222" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r11" x1="52" y1="194" x2="58" y2="206" />
        <line className="weather-icon__stroke-light weather-icon-thunderstorm__drop weather-icon-thunderstorm__r12" x1="194" y1="196" x2="200" y2="208" />
      </g>

      <g className="weather-icon-thunderstorm__accent">
        <path className="weather-icon__stroke-light" d="M32 118 H50" />
        <path className="weather-icon__stroke-light" d="M198 122 H220" />
      </g>
    </svg>
  );
}
