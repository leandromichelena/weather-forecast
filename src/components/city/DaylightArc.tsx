"use client";

import { Sunrise, Sunset } from "lucide-react";
import { useSyncExternalStore } from "react";

import { getCityDateTimeFromUnix } from "@/lib/time";

interface DaylightArcProps {
  timezoneOffsetSeconds: number;
  sunriseUnixSeconds: number;
  sunsetUnixSeconds: number;
}

const SVG_WIDTH = 280;
const SVG_HEIGHT = 124;
const CENTER_X = SVG_WIDTH / 2;
const BASELINE_Y = 86;
const RADIUS = 74;
let currentDateSnapshot: Date | null = null;
let currentDateIntervalId: number | null = null;
const currentDateListeners = new Set<() => void>();

export function DaylightArc({
  timezoneOffsetSeconds,
  sunriseUnixSeconds,
  sunsetUnixSeconds,
}: DaylightArcProps) {
  const currentDate = useSyncExternalStore(
    subscribeToCurrentDate,
    getCurrentDateSnapshot,
    getServerDateSnapshot,
  );

  const sunrise = getCityDateTimeFromUnix(
    sunriseUnixSeconds,
    timezoneOffsetSeconds,
  );
  const sunset = getCityDateTimeFromUnix(
    sunsetUnixSeconds,
    timezoneOffsetSeconds,
  );

  const daylightDuration = Math.max(sunsetUnixSeconds - sunriseUnixSeconds, 1);
  const currentUnixSeconds = currentDate ? currentDate.getTime() / 1000 : null;
  const elapsedRatio =
    currentUnixSeconds === null
      ? 0
      : (currentUnixSeconds - sunriseUnixSeconds) / daylightDuration;
  const daylightProgress =
    currentUnixSeconds === null ? 0 : clamp(elapsedRatio, 0, 1);
  const angle = Math.PI * (1 - daylightProgress);
  const markerX = CENTER_X + Math.cos(angle) * RADIUS;
  const markerY = BASELINE_Y - Math.sin(angle) * RADIUS;
  const showMarker =
    currentUnixSeconds !== null &&
    currentUnixSeconds >= sunriseUnixSeconds &&
    currentUnixSeconds <= sunsetUnixSeconds;

  return (
    <div className="mt-8 w-full max-w-70">
      <svg
        aria-hidden
        className="h-auto w-full overflow-visible"
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      >
        <path
          d={`M ${CENTER_X - RADIUS} ${BASELINE_Y} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER_X + RADIUS} ${BASELINE_Y}`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          className="text-foreground/70"
        />
        <line
          x1={CENTER_X - RADIUS - 28}
          x2={CENTER_X + RADIUS + 28}
          y1={BASELINE_Y}
          y2={BASELINE_Y}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          className="text-foreground/70"
        />
        {currentUnixSeconds !== null ? (
          <path
            d={`M ${CENTER_X - RADIUS} ${BASELINE_Y} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER_X + RADIUS} ${BASELINE_Y}`}
            fill="none"
            pathLength={1}
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
            strokeDasharray={`${daylightProgress} 1`}
            className="text-warning"
          />
        ) : null}
        {showMarker ? (
          <>
            <circle
              cx={markerX}
              cy={markerY}
              r="10"
              className="fill-warning stroke-background"
              strokeWidth="4"
            />
            <circle
              cx={markerX}
              cy={markerY}
              r="16"
              className="fill-warning-soft"
            />
          </>
        ) : null}
      </svg>

      <div className="mt-2 grid grid-cols-2 items-end gap-4">
        <div className="flex items-end gap-2">
          <Sunrise
            aria-hidden
            className="mb-1 h-5 w-5 shrink-0 text-foreground/75"
          />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-500">
              Sunrise
            </p>
            <p className="text-2xl font-semibold tracking-tight">
              {sunrise.displayTime}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-end gap-2 text-right">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-500">
              Sunset
            </p>
            <p className="text-2xl font-semibold tracking-tight">
              {sunset.displayTime}
            </p>
          </div>
          <Sunset
            aria-hidden
            className="mb-1 h-5 w-5 shrink-0 text-foreground/75"
          />
        </div>
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function subscribeToCurrentDate(onStoreChange: () => void) {
  currentDateListeners.add(onStoreChange);

  if (currentDateSnapshot === null) {
    currentDateSnapshot = new Date();
  }

  if (currentDateIntervalId === null) {
    currentDateIntervalId = window.setInterval(() => {
      currentDateSnapshot = new Date();

      for (const listener of currentDateListeners) {
        listener();
      }
    }, 30_000);
  }

  return () => {
    currentDateListeners.delete(onStoreChange);

    if (currentDateListeners.size === 0 && currentDateIntervalId !== null) {
      window.clearInterval(currentDateIntervalId);
      currentDateIntervalId = null;
      currentDateSnapshot = null;
    }
  };
}

function getCurrentDateSnapshot() {
  return currentDateSnapshot;
}

function getServerDateSnapshot() {
  return null;
}
