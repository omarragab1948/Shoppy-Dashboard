import React from "react";
import Header from "../../components/Header";
import BarCh from "../../components/Charts/BarCh";
const Bar = () => {
  return (
    <div className="m-4 md:m-10 mt-24 pt-4 pl-2 md:p-14 h-screen bg-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Information Rate" />
      <div className="w-full md:p-10 pb-24 h-full flex items-center sm:block">
        <BarCh />
      </div>
    </div>
  );
};

export default Bar;
