"use client";

import { ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import {
  getThemeCookieString,
  isThemePreference,
} from "@/lib/theme";

import type { ThemePreference } from "@/lib/theme";
import type { Key } from "@heroui/react";

const iconClassName = "h-4 w-4";
const subscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { setTheme, theme } = useTheme();
  const isMounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const selectedTheme: ThemePreference =
    isMounted && isThemePreference(theme) ? theme : "system";

  const changeTheme = (keys: Set<Key> | "all") => {
    if (keys === "all") {
      return;
    }

    const nextTheme = String(Array.from(keys)[0] ?? "");

    if (!isThemePreference(nextTheme) || nextTheme === selectedTheme) {
      return;
    }

    document.cookie = getThemeCookieString(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <ToggleButtonGroup
      aria-label="Theme preference"
      className={className}
      selectedKeys={new Set([selectedTheme])}
      selectionMode="single"
      disallowEmptySelection
      size="sm"
      onSelectionChange={changeTheme}
    >
      <ToggleButton id="light">
        <Sun aria-hidden className={iconClassName} />
        Light
      </ToggleButton>
      <ToggleButton id="dark">
        <ToggleButtonGroup.Separator />
        <Moon aria-hidden className={iconClassName} />
        Dark
      </ToggleButton>
      <ToggleButton id="system">
        <ToggleButtonGroup.Separator />
        <Monitor aria-hidden className={iconClassName} />
        System
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
