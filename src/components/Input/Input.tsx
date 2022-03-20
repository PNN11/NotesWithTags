import React from "react";

import { InputProps } from "./Input.types";
import "./Input.styles.scss";

const Input: React.FC<InputProps> = ({
  type,
  label,
  id,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
