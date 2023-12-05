import { useState } from "react";

export default function ScrollBtn() {
  const [displayScroll, setDisplayScroll] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 300) {
      setDisplayScroll(true);
    } else {
      setDisplayScroll(false);
    }
  };

  return (
    <div
      className="scroll--btn"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      style={{
        opacity: displayScroll ? 1 : 0,
        pointerEvents: displayScroll ? "auto" : "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 16 16"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    </div>
  );
}
