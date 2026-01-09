import React from "react";

const Button = ({ text, img }) => {
  return (
    <button className="button-component">
      {text}
      {img && <img src={img} alt="" />}
    </button>
  );
};

export default Button;
