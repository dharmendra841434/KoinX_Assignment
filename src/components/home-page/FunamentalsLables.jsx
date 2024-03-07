import React from "react";

const FundamentalsLables = ({ title, children }) => {
  return (
    <div className="flex flex-row items-center justify-between py-3 border-b border-gray-300 ">
      <div>
        <h2 className="text-gray-500 capitalize ">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FundamentalsLables;
