"use client"

import { cn } from "@/lib/utils"
import { motion, MotionProps, useScroll } from "motion/react"
import React from "react"

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(
  (
    {
      gradientFrom = "#A97CF8",
      gradientVia = "#F38CB8",
      gradientTo = "#FDCC92",
      className,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useScroll()

    return (
      <motion.div
        ref={ref}
        className={cn(
          `fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[${gradientFrom}] via-[${gradientVia}] to-[${gradientTo}]`,
          className
        )}
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    )
  }
)

ScrollProgress.displayName = "ScrollProgress"
