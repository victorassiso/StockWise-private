import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} opacity-0.9 text-white p-4 hover:drop-shadow-xl rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
