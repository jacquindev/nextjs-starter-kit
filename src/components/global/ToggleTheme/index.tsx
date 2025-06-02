"use client"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { useTheme } from "next-themes"
import Image from "next/image"

type Props = {
  className?: string
}

const container = cva("flex flex-col items-center justify-center")
const innerContainer = cva(
  "mt-2 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-12"
)
const gradientContainer = cva(
  "h-fit top-32 pl-16 pt-10 rounded-xl hover:cursor-pointer gradient-background"
)
const imageContainer = cva("w-full h-auto rounded-l-xl mb-5")
const selectedContainer = cva(
  "outline-8 outline-gray-400/70 dark:outline-gray-600/70"
)

const ToggleTheme = ({ className }: Props) => {
  const { setTheme, theme } = useTheme()

  return (
    <div className={cn(container(), className)}>
      <div className={innerContainer()}>
        <div
          onClick={() => setTheme("system")}
          className={cn(
            gradientContainer(),
            theme === "system" && selectedContainer()
          )}
        >
          <Image
            src="/system-mode.png"
            alt="System Mode"
            width={750}
            height={500}
            className={imageContainer()}
          />
        </div>
        <div
          onClick={() => setTheme("light")}
          className={cn(
            gradientContainer(),
            theme === "light" && selectedContainer()
          )}
        >
          <Image
            src="/light-mode.png"
            alt="Light Mode"
            width={750}
            height={500}
            className={imageContainer()}
          />
        </div>
        <div
          onClick={() => setTheme("dark")}
          className={cn(
            gradientContainer(),
            theme === "dark" && selectedContainer()
          )}
        >
          <Image
            src="/dark-mode.png"
            alt="Dark Mode"
            width={750}
            height={500}
            className={imageContainer()}
          />
        </div>
      </div>
    </div>
  )
}

export default ToggleTheme
