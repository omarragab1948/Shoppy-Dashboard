import { React, useContext } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Button, SparkLine } from "../components";
import { earningData } from "../data/dummy";
import { StateContext } from "../contexts/ContextProvider";
const Ecommerce = () => {
  const { currentColor } = useContext(StateContext);

  return (
    <div className="sm:mt-12 mt-24 bg-gray-200 dark:bg-secondary-dark-bg">
      <div className="flex max-w-full px-2 flex-wrap lg:flex-nowrap justify-center ">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 mt-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-gray-400 ">Earnings</p>
              <p className="text-2xl text-black dark:text-white">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4">
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center items-center">
          {earningData.map((item) => (
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              key={item.title}
              className="bg-white w-5/12 lg:mr-1 m-2 lg:m-0 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold dark:text-white text-black">
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white p-4 w-4/5 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <div className="flex flex-col sm:flex-row   sm:justify-between">
            <p className="font-semibold text-xl dark:text-white text-black flex justify-center">
              Revenue Updates
            </p>
            <div className="flex items-center mt-3 sm:mt-0  justify-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-sshadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="dark:text-white">Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-sshadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col flex-wrap justify-center">
            <div className="flex justify-around">
              <div className=" my-4">
                <p>
                  <span className="text-3xl font-semibold dark:text-white text-black">
                    $93,438
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 dark:text-white mt-1">Budget</p>
              </div>
              <div className=" my-4">
                <p>
                  <span className="text-3xl font-semibold dark:text-white text-black">
                    $93,438
                  </span>
                </p>
                <p className="text-gray-500 dark:text-white mt-1">Expense</p>
              </div>
            </div>
            <div className="flex justify-between flex-wrap flex-col sm:flex-row">
              <div className="felx items-center  w-full mb-6 sm:w-1/2 justify-center">
                <div className="mt-5 h-72 w-full">
                  <SparkLine />
                </div>
                <div className="mt-10 flex justify-center">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div className="h-72 w-full sm:w-1/2">
                <Stacked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
