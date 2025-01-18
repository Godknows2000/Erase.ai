import * as React from "react";

// By: lucide
// See: https://v0.app/icon/lucide/image-plus
// Example: <IconLucideImagePlus width="24px" height="24px" style={{color: "#000000"}} />

export const IconLucideImagePlus = ({
  height = "1em",
  strokeWidth = "2",
  fill = "none",
  focusable = "false",
  ...props
}) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    focusable={focusable}
    {...props}
  >
    <g
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 2h6m-3-3v6" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </g>
  </svg>
);