"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { SystemTheme } from "@/components/ui/system-theme"
import { LightTheme } from "@/components/ui/light-theme"
import { DarkTheme } from "@/components/ui/dark-theme"
import { useTheme } from "@/context/ThemeContextProvider"

type ThemeType = "light" | "dark" | "system"

interface ThemeOption {
  value: ThemeType
  label: string
  icon: React.ComponentType
}

const themes: ThemeOption[] = [
  { value: "light", label: "Light", icon: LightTheme },
  { value: "dark", label: "Dark", icon: DarkTheme },
  { value: "system", label: "System", icon: SystemTheme },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [systemTheme, setSystemTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    setMounted(true)

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const update = () => setSystemTheme(media.matches ? "dark" : "light")

    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full rounded-lg border bg-tertiary">
      <div className="px-3 pt-3">
        <h3 className="text-base font-medium text-primary">Theme</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Choose your interface color theme
        </p>
      </div>

      <div className="my-3 h-px w-full bg-quaternary" />

      <div className="p-6 pt-3">
        <RadioGroup
          value={theme}
          onValueChange={(value: ThemeType) => setTheme(value)}
          className="grid gap-3 sm:grid-cols-3"
        >
          {themes.map(({ value, label, icon: Icon }) => {
            const isSelected = theme === value
            const appliedTheme =
              value === "system" ? systemTheme : value

            return (
              <label
                key={value}
                htmlFor={value}
                className={cn(
                  "relative cursor-pointer rounded-md border px-2 pt-3 transition",
                  appliedTheme,
                  isSelected && "border-blue-500 ring-2 ring-blue-500/50",
                )}
              >
                <RadioGroupItem
                  value={value}
                  id={value}
                  className="sr-only"
                />

                <div className="rounded-t-sm border border-b-0 shadow-xl shadow-black/20">
                  <Icon />
                </div>

                <div className="relative mt-3 flex justify-center">
                  <span className="relative inline-flex h-[30px] items-center rounded-md bg-button px-3 text-[13px] font-semibold text-primary shadow-button">
                    {label}
                  </span>

                  {isSelected && (
                    <motion.span
                      layoutId="activeTheme"
                      className="absolute -bottom-2 h-0.5 w-10 rounded-full bg-blue-500"
                    />
                  )}
                </div>
              </label>
            )
          })}
        </RadioGroup>
      </div>
    </div>
  )
}
