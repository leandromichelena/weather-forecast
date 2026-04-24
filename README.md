# Weather Forecast

A weather dashboard built with Next.js and OpenWeather. The app renders current conditions and a 5-day forecast with server-side data fetching, cached external API calls, unit switching, theme switching, and custom animated SVG weather icons.

## Features

- Current weather dashboard
- Five days forecast broken down by accordions
- 3 hour forecasts within each day with weather conditions
- Custom made SVG weather icons with loopable animations
- Theme switching
- Units switching
- Mobile responsive layout

## Local Setup

### Prerequisites

- Node.js 20 or newer
- An OpenWeather API key

### 1. Install dependencies

```bash
npm install
```

### 2. Create the environment file

Create a `.env` file in the project root:

```env
APP_ID=your_openweather_api_key
```

`APP_ID` is required by the server-side weather fetchers in `src/lib/weather.ts`.

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### Available scripts

- `npm run dev` starts the Next.js development server
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` runs ESLint
- `npm run lint-fix` runs ESLint with auto-fixes

## SSR And Caching

This app uses server-rendered pages in the Next.js App Router for both the current weather view and the 5-day forecast view:

- Current weather page: `src/app/weather/[cityId]/page.tsx`
- Forecast page: `src/app/weather/[cityId]/forecast/page.tsx`

OpenWeather API requests are performed on the server in `src/lib/weather.ts` using Next.js `fetch` caching:

- Current weather requests revalidate every 300 seconds
- Forecast requests revalidate every 1800 seconds
- Requests are tagged per city and unit system for cache-aware invalidation patterns

That means the UI benefits from SSR for initial page load while avoiding unnecessary repeated requests to the external API.

## Stack

### Frameworks and runtime

- Next.js 16
- React 19
- TypeScript 5

### UI and styling

- HeroUI
- Tailwind CSS 4
- Lucide React icons
- Next Themes
