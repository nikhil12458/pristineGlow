import React from "react";

const Button = ({ text, img, type, fnc }) => {
  return (
    <button
      className="button-component"
      type={type || "button"}
      onClick={fnc || (() => {})}
    >
      {text}
      {img && <img src={img} alt="" />}
    </button>
  );
};

export default Button;
