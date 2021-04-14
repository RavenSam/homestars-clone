import * as React from "react";

function SvgPostalcodeicon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={17} {...props}>
      <g transform="translate(1 1)" fill="none" fillRule="evenodd">
        <path
          d="M11 5.25c0 2.586-1.833 5.836-5.5 9.75C1.833 11.086 0 7.836 0 5.25 0 2.25 2.462 0 5.5 0S11 2.25 11 5.25z"
          stroke="#CFCFCF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse fill="#CFCFCF" cx={5.5} cy={5.25} rx={1.571} ry={1.5} />
      </g>
    </svg>
  );
}

export default SvgPostalcodeicon;
