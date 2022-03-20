import React from "react";

import { HeaderProps } from "./Header.types";
import "./Header.styles.scss";

const Header: React.FC<HeaderProps> = ({ count }) => {
  return (
    <header className="header">
      <h1>Notes</h1>
      <p>Number of notes: {count}</p>
    </header>
  );
};

export default Header;
