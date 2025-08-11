import * as React from "react";

export function TiktokIcon({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M17.25 2A5.25 5.25 0 0 0 22.5 7.25v.25a7.25 7.25 0 0 1-5.25-2.25V15a5.25 5.25 0 1 1-5.25-5.25h.25v2A3.25 3.25 0 1 0 15.5 15V2h1.75Z" />
    </svg>
  );
}