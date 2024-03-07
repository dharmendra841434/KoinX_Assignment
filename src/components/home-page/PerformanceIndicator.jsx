import React from "react";

const PerformanceIndicator = ({
  min_title,
  min_value,
  max_title,
  max_value,
}) => {
  return (
    <div className="flex items-center my-5 ">
      <div className=" w-[25%] lg:w-[15%]">
        <h2 className="text-sm">{min_title}</h2>
        <p className="font-medium text-gray-600">{min_value}</p>
      </div>
      <div className=" w-[50%] lg:w-[70%]">
        <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className=" w-[25%] lg:w-[15%] flex flex-col items-end">
        <div>
          <h2 className="text-sm">{max_title}</h2>
          <p className="font-medium text-gray-600">{max_value}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceIndicator;
