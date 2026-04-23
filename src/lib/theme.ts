export type ThemePreference = "light" | "dark" | "system";

export const WEATHER_THEME_COOKIE = "weather-theme";

export function isThemePreference(
  value: string | null | undefined,
): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function getThemePreferenceFromCookie(
  value: string | null | undefined,
): ThemePreference {
  if (isThemePreference(value)) {
    return value;
  }

  return "system";
}

export function getThemeCookieString(theme: ThemePreference) {
  return `${WEATHER_THEME_COOKIE}=${theme}; path=/; max-age=31536000; samesite=lax`;
}
