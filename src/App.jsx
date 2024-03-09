import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { StateContext } from "./contexts/ContextProvider";
import { useContext } from "react";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  ColorPicker,
  Editor,
} from "./pages";
import "./App.css";
const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useContext(StateContext);
  console.log(currentMode);
  return (
    <div className={currentMode ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className="tooltip fixed right-4 bottom-4 before:font-bold before:text-white"
            style={{ zIndex: "1000" }}
            data-tip="Settings">
            <div>
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ backgroundColor: currentColor }}
                className="text-3xl text-white rounded-full bg-black p-3 hover:drop-shadow-xl ">
                <FiSettings />
              </button>
            </div>
          </div>
          {activeMenu ? (
            <div className="w-72 duration-300 fixed sidebar dark:bg-secondary-dark-bg bg-white z-50">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 duration-300 fixed dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full"
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }>
            <div className="fixed flex  md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
