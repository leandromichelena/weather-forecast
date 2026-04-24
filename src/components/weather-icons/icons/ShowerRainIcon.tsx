import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function ShowerRainIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-shower-rain__cloud-back {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-shower-rain__cloud-back-drift 6.2s ease-in-out infinite;
          }

          .weather-icon-shower-rain__cloud-front {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-shower-rain__cloud-front-drift 5s ease-in-out infinite;
          }

          .weather-icon-shower-rain__drop {
            opacity: 0;
            animation-name: weather-icon-shower-rain__fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .weather-icon-shower-rain__t1 { animation-duration: 1.45s; animation-delay: -0.10s; }
          .weather-icon-shower-rain__t2 { animation-duration: 1.70s; animation-delay: -0.65s; }
          .weather-icon-shower-rain__t3 { animation-duration: 1.55s; animation-delay: -1.10s; }
          .weather-icon-shower-rain__t4 { animation-duration: 1.82s; animation-delay: -0.35s; }
          .weather-icon-shower-rain__t5 { animation-duration: 1.62s; animation-delay: -1.30s; }
          .weather-icon-shower-rain__t6 { animation-duration: 1.48s; animation-delay: -0.82s; }
          .weather-icon-shower-rain__t7 { animation-duration: 1.76s; animation-delay: -0.22s; }
          .weather-icon-shower-rain__t8 { animation-duration: 1.58s; animation-delay: -1.52s; }
          .weather-icon-shower-rain__t9 { animation-duration: 1.68s; animation-delay: -0.92s; }
          .weather-icon-shower-rain__t10 { animation-duration: 1.50s; animation-delay: -0.48s; }
          .weather-icon-shower-rain__t11 { animation-duration: 1.86s; animation-delay: -1.42s; }
          .weather-icon-shower-rain__t12 { animation-duration: 1.60s; animation-delay: -0.18s; }
          .weather-icon-shower-rain__t13 { animation-duration: 1.74s; animation-delay: -1.00s; }
          .weather-icon-shower-rain__t14 { animation-duration: 1.52s; animation-delay: -0.72s; }
          .weather-icon-shower-rain__t15 { animation-duration: 1.80s; animation-delay: -1.58s; }
          .weather-icon-shower-rain__t16 { animation-duration: 1.66s; animation-delay: -0.28s; }
          .weather-icon-shower-rain__t17 { animation-duration: 1.56s; animation-delay: -1.18s; }
          .weather-icon-shower-rain__t18 { animation-duration: 1.72s; animation-delay: -0.56s; }
          .weather-icon-shower-rain__t19 { animation-duration: 1.44s; animation-delay: -1.26s; }
          .weather-icon-shower-rain__t20 { animation-duration: 1.84s; animation-delay: -0.40s; }
          .weather-icon-shower-rain__t21 { animation-duration: 1.64s; animation-delay: -1.48s; }
          .weather-icon-shower-rain__t22 { animation-duration: 1.54s; animation-delay: -0.86s; }
          .weather-icon-shower-rain__t23 { animation-duration: 1.78s; animation-delay: -0.14s; }
          .weather-icon-shower-rain__t24 { animation-duration: 1.59s; animation-delay: -1.06s; }
          .weather-icon-shower-rain__t25 { animation-duration: 1.69s; animation-delay: -0.60s; }
          .weather-icon-shower-rain__t26 { animation-duration: 1.47s; animation-delay: -1.36s; }
          .weather-icon-shower-rain__t27 { animation-duration: 1.83s; animation-delay: -0.96s; }

          @keyframes weather-icon-shower-rain__cloud-back-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(2px); }
          }

          @keyframes weather-icon-shower-rain__cloud-front-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(-3px); }
          }

          @keyframes weather-icon-shower-rain__fall {
            0% { transform: translate(0px, 0px); opacity: 0; }
            12% { opacity: 0.95; }
            72% { opacity: 0.95; }
            100% { transform: translate(16px, 32px); opacity: 0; }
          }
        `}
      </style>

      <g className="weather-icon-shower-rain__cloud-back">
        <path
          className="weather-icon__cloud-fill"
          d="M88 115
             C88 96, 98 86, 111 86
             C116 74, 128 66, 142 66
             C160 66, 174 78, 179 95
             C193 96, 204 107, 204 121
             C204 136, 192 148, 176 148
             H111
             C98 148, 88 138, 88 115
             Z"
        />
        <path
          className="weather-icon__stroke-medium"
          d="M88 115
             C88 96, 98 86, 111 86
             C116 74, 128 66, 142 66
             C160 66, 174 78, 179 95
             C193 96, 204 107, 204 121
             C204 136, 192 148, 176 148
             H111
             C98 148, 88 138, 88 115
             Z"
        />
      </g>

      <g>
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t1"
          x1="58"
          y1="166"
          x2="64"
          y2="178"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t2"
          x1="71"
          y1="171"
          x2="77"
          y2="183"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t3"
          x1="86"
          y1="164"
          x2="92"
          y2="176"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t4"
          x1="97"
          y1="174"
          x2="103"
          y2="186"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t5"
          x1="112"
          y1="168"
          x2="118"
          y2="180"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t6"
          x1="126"
          y1="173"
          x2="132"
          y2="185"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t7"
          x1="139"
          y1="166"
          x2="145"
          y2="178"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t8"
          x1="153"
          y1="172"
          x2="159"
          y2="184"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t9"
          x1="168"
          y1="165"
          x2="174"
          y2="177"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t10"
          x1="180"
          y1="170"
          x2="186"
          y2="182"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t11"
          x1="64"
          y1="182"
          x2="70"
          y2="194"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t12"
          x1="79"
          y1="188"
          x2="86"
          y2="202"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t13"
          x1="93"
          y1="181"
          x2="99"
          y2="193"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t14"
          x1="108"
          y1="190"
          x2="115"
          y2="204"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t15"
          x1="121"
          y1="184"
          x2="127"
          y2="196"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t16"
          x1="136"
          y1="189"
          x2="143"
          y2="203"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t17"
          x1="149"
          y1="182"
          x2="155"
          y2="194"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t18"
          x1="164"
          y1="191"
          x2="171"
          y2="205"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t19"
          x1="178"
          y1="184"
          x2="184"
          y2="196"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t20"
          x1="60"
          y1="199"
          x2="67"
          y2="213"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t21"
          x1="76"
          y1="206"
          x2="82"
          y2="218"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t22"
          x1="98"
          y1="202"
          x2="105"
          y2="216"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t23"
          x1="118"
          y1="208"
          x2="124"
          y2="220"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t24"
          x1="138"
          y1="201"
          x2="145"
          y2="215"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t25"
          x1="157"
          y1="207"
          x2="163"
          y2="219"
        />
        <line
          className="weather-icon__stroke-medium weather-icon-shower-rain__drop weather-icon-shower-rain__t26"
          x1="175"
          y1="200"
          x2="182"
          y2="214"
        />
        <line
          className="weather-icon__stroke-light weather-icon-shower-rain__drop weather-icon-shower-rain__t27"
          x1="191"
          y1="206"
          x2="197"
          y2="218"
        />
      </g>

      <g className="weather-icon-shower-rain__cloud-front">
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
