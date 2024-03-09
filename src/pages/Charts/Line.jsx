import React from "react";
import Header from "../../components/Header";
import LinesChart from "../../components/Charts/LinesChart";
const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 pt-4 pl-2 md:p-14 h-screen bg-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Information Rate" />
      <div className="w-full pb-24 md:p-10 h-full flex items-center sm:block">
        <LinesChart />
      </div>
    </div>
  );
};

export default Line;
