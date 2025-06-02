import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

type Props = {
  link: string
  gradientFrom?: string
  gradientTo?: string
  children: React.ReactNode
  className?: string
}

const MagicButton = ({
  link,
  gradientFrom = "#E2CBFF",
  gradientTo = "#393BB2",
  children,
  className,
}: Props) => {
  return (
    <Link
      href={link}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      <span
        className={cn(
          `absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,${gradientFrom}_0%,${gradientTo}_50%,${gradientFrom}_100%)]`
        )}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </Link>
  )
}

export default MagicButton
