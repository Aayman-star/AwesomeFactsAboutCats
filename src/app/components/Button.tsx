import React from "react";
interface Prop {
  ClickFunction: () => void;
}

const Button = ({ ClickFunction }: Prop) => {
  return (
    <div>
      <button onClick={ClickFunction}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-green-500 bg-zinc-700 p-1 rounded-md shadow-md">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Button;
