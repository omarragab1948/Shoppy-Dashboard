import { createContext, useState } from "react";

export const StateContext = createContext();

const initialState = {
  chat: false,
  chart: false,
  userProfile: false,
  notifications: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setscreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState(true);
  const [themeSettings, setThemeSettings] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const handleClickClose = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };
  const setMode = (mode) => {
    setCurrentMode(!currentMode);
    localStorage.setItem("themeMode", mode);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };
  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setscreenSize,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        handleClickClose,
      }}>
      {children}
    </StateContext.Provider>
  );
};
