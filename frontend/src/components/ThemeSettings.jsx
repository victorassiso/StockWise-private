import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import {
  TooltipComponent,
  TooltopComponent,
} from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/contextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentCOlor, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484b52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => {}}
            style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Theme Options */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Options</p>

          {/* Light */}
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>

          {/* Dark */}
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Colors</p>

          {/* Colors */}
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => {}}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        false ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
