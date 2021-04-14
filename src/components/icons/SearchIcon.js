import * as React from "react";

function SvgSearchicon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} {...props}>
      <g
        stroke="#CFCFCF"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.833 11.833L16 16M13.5 7.25a6.25 6.25 0 11-12.5 0 6.25 6.25 0 1112.5 0z" />
      </g>
    </svg>
  );
}

export default SvgSearchicon;
