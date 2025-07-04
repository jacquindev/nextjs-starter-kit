import { IconProps } from "@/lib/types"
import { SVGProps } from "react"

const IconMoon = ({
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
        <path
          opacity={0.5}
          d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill={color || "currentColor"}
        />
        <path
          d="M11.2857 22C13.3371 22 15 20.4198 15 18.4706C15 16.9257 13.9554 15.6126 12.5008 15.1344C12.2941 13.3711 10.7203 12 8.80952 12C6.75818 12 5.09524 13.5802 5.09524 15.5294C5.09524 15.9605 5.17659 16.3736 5.3255 16.7555C5.15087 16.723 4.97039 16.7059 4.78571 16.7059C3.24721 16.7059 2 17.891 2 19.3529C2 20.8149 3.24721 22 4.78571 22H11.2857Z"
          fill={color || "currentColor"}
        />
      </g>
    </svg>
  )
}

export default IconMoon
