import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ChangeTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="change-theme">
      <button onClick={() => toggleTheme("light")}>Light Theme</button>
      <button onClick={() => toggleTheme("dark")}>Dark Theme</button>
    </div>
  );
};
export default ChangeTheme;
