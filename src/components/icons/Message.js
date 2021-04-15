import * as React from "react";

function SvgMessage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="message_svg__drift-default-icon message_svg__drift-default-icon--chat-round"
      width={25}
      height={23}
      {...props}
    >
      <path
        d="M24.516 9.953C24.516 4.453 19.04 0 12.258 0 5.476 0 0 4.452 0 9.953c0 3.318 1.986 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.844 4.084-.14.14-.17.368-.113.567a.524.524 0 00.482.312c2.95 0 5.335-1.93 6.612-3.206.652.086 1.362.142 2.07.142 6.783 0 12.26-4.452 12.26-9.953z"
        fill="#FFF"
      />
    </svg>
  );
}

export default SvgMessage;
