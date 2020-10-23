import React from "react";
import Toggle from "./Toggler";

const Header = ({ theme, themeToggler }) => {
  return (
    <nav>
      <a href="/" className="brand">
        Where in the world
      </a>
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </nav>
  );
};

export default Header;
