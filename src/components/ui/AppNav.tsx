"use client";

import { Drawer, useOverlayState } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import {
  getWeatherUnitsFromSearchParam,
  getWeatherUnitsHref,
} from "@/lib/units";

const linkClassName =
  "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground-600 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary aria-[current=page]:bg-foreground aria-[current=page]:text-background";
const mobileLinkClassName =
  "inline-flex min-h-11 items-center rounded-md px-3 text-base font-medium text-foreground-600 underline-offset-4 transition-colors hover:bg-background/60 hover:text-foreground focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary aria-[current=page]:bg-foreground aria-[current=page]:text-background";

export function AppNav() {
  const drawerState = useOverlayState();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const units = getWeatherUnitsFromSearchParam(searchParams.get("units"));
  const cityId = getCityIdFromPathname(pathname);
  const currentHref = cityId ? `/weather/${encodeURIComponent(cityId)}` : null;
  const forecastHref = currentHref ? `${currentHref}/forecast` : null;
  const isForecast = pathname.endsWith("/forecast");
  const navItems = [
    { href: "/", label: "Cities", current: pathname === "/" },
    ...(currentHref
      ? [
          {
            href: getWeatherUnitsHref(currentHref, units),
            label: "Current",
            current: !isForecast,
          },
          {
            href: getWeatherUnitsHref(forecastHref ?? currentHref, units),
            label: "Forecast",
            current: isForecast,
          },
        ]
      : []),
  ];

  return (
    <header className="border-b border-divider bg-background/95">
      <div className="mx-auto flex min-h-20 w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-x-4 gap-y-2">
          <Link
            className="text-base font-semibold tracking-normal text-foreground focus-visible:rounded-md focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            href="/"
          >
            Weather Forecast
          </Link>
          <nav aria-label="Weather views" className="hidden flex-wrap gap-1 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                aria-current={item.current ? "page" : undefined}
                className={linkClassName}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden shrink-0 items-center sm:flex">
          <ThemeSwitcher />
        </div>

        <div className="sm:hidden">
          <Drawer.Root state={drawerState}>
            <Drawer.Trigger
              aria-label="Open navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground-600 transition-colors hover:bg-background/60 hover:text-foreground focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="pointer-events-none">
                <Menu aria-hidden className="h-5 w-5" />
              </span>
            </Drawer.Trigger>
            <Drawer.Backdrop />
            <Drawer.Content placement="right">
              <Drawer.Dialog aria-label="Navigation menu">
                <Drawer.Header className="flex items-center justify-between border-b border-divider pb-4">
                  <Drawer.Heading className="text-base font-semibold tracking-tight text-foreground">
                    Navigate
                  </Drawer.Heading>
                  <Drawer.CloseTrigger aria-label="Close navigation menu" className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground-600 transition-colors hover:bg-background/60 hover:text-foreground focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary">
                    <X aria-hidden className="h-5 w-5" />
                  </Drawer.CloseTrigger>
                </Drawer.Header>
                <Drawer.Body className="flex flex-col gap-6 pt-5">
                  <nav aria-label="Mobile weather views" className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={mobileLinkClassName}
                        href={item.href}
                        onClick={() => drawerState.close()}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t border-divider pt-5">
                    <p className="mb-3 text-sm font-medium text-foreground-500">
                      Theme
                    </p>
                    <ThemeSwitcher className="w-full" />
                  </div>
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Root>
        </div>
      </div>
    </header>
  );
}

function getCityIdFromPathname(pathname: string) {
  const [, firstSegment, secondSegment] = pathname.split("/");

  if (firstSegment !== "weather" || !secondSegment) {
    return null;
  }

  return decodeURIComponent(secondSegment);
}
