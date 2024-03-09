import React from "react";
import Header from "../../components/Header";
import AreaCh from "../../components/Charts/AreaCh";
const Area = () => {
  return (
    <div className="m-4 md:m-10 mt-24 pt-4 pl-2 md:p-14 h-screen bg-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Information Rate" />
      <div className="w-full pb-24 h-full flex items-end sm:block">
        <AreaCh />
      </div>
    </div>
  );
};

export default Area;
