import React from "react";

import { ButtonProps } from "./Button.types";
import "./Button.styles.scss";

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  primary,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={primary ? "btn btn-primary" : "btn"}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
