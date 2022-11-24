import React from "react";
import "./button.styles.scss";

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
  default: "",
};

const Button = ({ children, buttonType, ...others }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
