import React from "react";

export default function GetQuotation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.58331 2.91669H11.0833V6.41669"
        stroke="#242424"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0834 2.91669L2.91669 11.0834"
        stroke="#242424"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
