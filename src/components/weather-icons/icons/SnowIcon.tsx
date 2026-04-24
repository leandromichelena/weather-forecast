import type { WeatherSvgProps } from "@/components/weather-icons/types";

export function SnowIcon({ title, ...props }: WeatherSvgProps) {
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
          .weather-icon-snow__cloud-back {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-snow__cloud-back-drift 6.2s ease-in-out infinite;
          }

          .weather-icon-snow__cloud-front {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-snow__cloud-front-drift 5s ease-in-out infinite;
          }

          .weather-icon-snow__flake {
            opacity: 0;
            transform-box: fill-box;
            transform-origin: center;
            animation-name: weather-icon-snow__fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .weather-icon-snow__flake line {
            transform-box: fill-box;
            transform-origin: center;
            animation: weather-icon-snow__spin 5s linear infinite;
          }

          .weather-icon-snow__f1 { animation-duration: 3.8s; animation-delay: -0.2s; }
          .weather-icon-snow__f2 { animation-duration: 4.4s; animation-delay: -1.5s; }
          .weather-icon-snow__f3 { animation-duration: 3.6s; animation-delay: -2.8s; }
          .weather-icon-snow__f4 { animation-duration: 4.8s; animation-delay: -0.9s; }
          .weather-icon-snow__f5 { animation-duration: 4.1s; animation-delay: -2.2s; }
          .weather-icon-snow__f6 { animation-duration: 3.9s; animation-delay: -3.1s; }
          .weather-icon-snow__f7 { animation-duration: 4.6s; animation-delay: -1.1s; }
          .weather-icon-snow__f8 { animation-duration: 3.7s; animation-delay: -2.5s; }
          .weather-icon-snow__f9 { animation-duration: 4.3s; animation-delay: -0.6s; }
          .weather-icon-snow__f10 { animation-duration: 4.0s; animation-delay: -3.3s; }

          @keyframes weather-icon-snow__cloud-back-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(2px); }
          }

          @keyframes weather-icon-snow__cloud-front-drift {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(-3px); }
          }

          @keyframes weather-icon-snow__fall {
            0% { transform: translate(0px, 0px); opacity: 0; }
            8% { opacity: 0.9; }
            50% { transform: translate(4px, 28px); opacity: 0.9; }
            92% { opacity: 0.7; }
            100% { transform: translate(8px, 58px); opacity: 0; }
          }

          @keyframes weather-icon-snow__spin {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(18deg); }
          }
        `}
      </style>

      <g className="weather-icon-snow__cloud-back">
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

      <g className="weather-icon-snow__flake weather-icon-snow__f1">
        <line
          className="weather-icon__stroke-light"
          x1="76"
          y1="176"
          x2="76"
          y2="188"
        />
        <line
          className="weather-icon__stroke-light"
          x1="70"
          y1="182"
          x2="82"
          y2="182"
        />
        <line
          className="weather-icon__stroke-light"
          x1="72"
          y1="178"
          x2="80"
          y2="186"
        />
        <line
          className="weather-icon__stroke-light"
          x1="80"
          y1="178"
          x2="72"
          y2="186"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f2">
        <line
          className="weather-icon__stroke-light"
          x1="100"
          y1="172"
          x2="100"
          y2="184"
        />
        <line
          className="weather-icon__stroke-light"
          x1="94"
          y1="178"
          x2="106"
          y2="178"
        />
        <line
          className="weather-icon__stroke-light"
          x1="96"
          y1="174"
          x2="104"
          y2="182"
        />
        <line
          className="weather-icon__stroke-light"
          x1="104"
          y1="174"
          x2="96"
          y2="182"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f3">
        <line
          className="weather-icon__stroke-medium"
          x1="124"
          y1="178"
          x2="124"
          y2="192"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="117"
          y1="185"
          x2="131"
          y2="185"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="119"
          y1="180"
          x2="129"
          y2="190"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="129"
          y1="180"
          x2="119"
          y2="190"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f4">
        <line
          className="weather-icon__stroke-light"
          x1="150"
          y1="174"
          x2="150"
          y2="186"
        />
        <line
          className="weather-icon__stroke-light"
          x1="144"
          y1="180"
          x2="156"
          y2="180"
        />
        <line
          className="weather-icon__stroke-light"
          x1="146"
          y1="176"
          x2="154"
          y2="184"
        />
        <line
          className="weather-icon__stroke-light"
          x1="154"
          y1="176"
          x2="146"
          y2="184"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f5">
        <line
          className="weather-icon__stroke-light"
          x1="174"
          y1="170"
          x2="174"
          y2="182"
        />
        <line
          className="weather-icon__stroke-light"
          x1="168"
          y1="176"
          x2="180"
          y2="176"
        />
        <line
          className="weather-icon__stroke-light"
          x1="170"
          y1="172"
          x2="178"
          y2="180"
        />
        <line
          className="weather-icon__stroke-light"
          x1="178"
          y1="172"
          x2="170"
          y2="180"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f6">
        <line
          className="weather-icon__stroke-light"
          x1="88"
          y1="196"
          x2="88"
          y2="208"
        />
        <line
          className="weather-icon__stroke-light"
          x1="82"
          y1="202"
          x2="94"
          y2="202"
        />
        <line
          className="weather-icon__stroke-light"
          x1="84"
          y1="198"
          x2="92"
          y2="206"
        />
        <line
          className="weather-icon__stroke-light"
          x1="92"
          y1="198"
          x2="84"
          y2="206"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f7">
        <line
          className="weather-icon__stroke-medium"
          x1="116"
          y1="198"
          x2="116"
          y2="212"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="109"
          y1="205"
          x2="123"
          y2="205"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="111"
          y1="200"
          x2="121"
          y2="210"
        />
        <line
          className="weather-icon__stroke-medium"
          x1="121"
          y1="200"
          x2="111"
          y2="210"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f8">
        <line
          className="weather-icon__stroke-light"
          x1="144"
          y1="194"
          x2="144"
          y2="206"
        />
        <line
          className="weather-icon__stroke-light"
          x1="138"
          y1="200"
          x2="150"
          y2="200"
        />
        <line
          className="weather-icon__stroke-light"
          x1="140"
          y1="196"
          x2="148"
          y2="204"
        />
        <line
          className="weather-icon__stroke-light"
          x1="148"
          y1="196"
          x2="140"
          y2="204"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f9">
        <line
          className="weather-icon__stroke-light"
          x1="168"
          y1="198"
          x2="168"
          y2="210"
        />
        <line
          className="weather-icon__stroke-light"
          x1="162"
          y1="204"
          x2="174"
          y2="204"
        />
        <line
          className="weather-icon__stroke-light"
          x1="164"
          y1="200"
          x2="172"
          y2="208"
        />
        <line
          className="weather-icon__stroke-light"
          x1="172"
          y1="200"
          x2="164"
          y2="208"
        />
      </g>
      <g className="weather-icon-snow__flake weather-icon-snow__f10">
        <line
          className="weather-icon__stroke-light"
          x1="192"
          y1="192"
          x2="192"
          y2="204"
        />
        <line
          className="weather-icon__stroke-light"
          x1="186"
          y1="198"
          x2="198"
          y2="198"
        />
        <line
          className="weather-icon__stroke-light"
          x1="188"
          y1="194"
          x2="196"
          y2="202"
        />
        <line
          className="weather-icon__stroke-light"
          x1="196"
          y1="194"
          x2="188"
          y2="202"
        />
      </g>

      <g className="weather-icon-snow__cloud-front">
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
