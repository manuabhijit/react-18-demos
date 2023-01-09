import { useContext } from "react";
import React from "react";

const ThemeContext = React.createContext("light");

const UseContextComponent = () => {
  return (
    <div className="hook-component">
      <ThemeContext.Provider value="dark">
        <MyComponent />
      </ThemeContext.Provider>
      <br />
      <br />
      <ThemeContext.Provider value="gray">
        <MyComponent />
      </ThemeContext.Provider>
    </div>
  );
};

const MyComponent = () => {
  const theme = useContext(ThemeContext);

  return <div className={`theme-${theme}`}>
    The current theme is {theme}.
    <br />
    This is the color.
  </div>;
};

export default UseContextComponent;
