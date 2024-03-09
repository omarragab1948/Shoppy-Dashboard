import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { colors } from "../data/dummy";
import Header from "../components/Header";

const ColorPicker = () => {

  const [color, setColor] = useState("#fff");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
  const handleColor = (color) => {
    setColor(color);
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-4 dark:bg-secondary-dark-bg bg-white rounded-3xl text-black">
      <Header category="App" title="Color Picker" />
      <div className="text-center pb-12">
        <div id="preview" style={{ backgroundColor: color }} />
        <div className="flex justify-around gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-white">
              Color Picker
            </p>
            <SketchPicker
              color={color}
              onChangeComplete={handleChangeComplete}
            />
          </div>
          <div className="w-80 flex flex-col items-center">
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-white">
              Inline Pallete
            </p>
            <div className="flex flex-wrap my-10 justify-center">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-4 m-2 cursor-pointer"
                  onClick={() => handleColor(color)}
                  style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
