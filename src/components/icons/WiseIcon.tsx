import * as React from "react";

export function WiseIcon({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M10.94 2.005 19.5 15.58V2.005h-8.56zM4.5 2.005v13.575L13.06 2.005H4.5zm0 19.99L19.5 8.42v13.575H4.5z" />
    </svg>
  );
}