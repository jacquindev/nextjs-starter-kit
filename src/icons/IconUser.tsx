import { IconProps } from "@/lib/types"
import { SVGProps } from "react"

const IconUser = ({
  size,
  color,
  className,
  ...props
}: SVGProps<SVGSVGElement> & IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size }}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <circle cx={12} cy={6} r={4} fill={color || "currentColor"} />
        <path
          opacity={0.5}
          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
          fill={color || "currentColor"}
        />
      </g>
    </svg>
  )
}

export default IconUser
