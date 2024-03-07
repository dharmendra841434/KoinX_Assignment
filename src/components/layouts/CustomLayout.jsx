import React from "react";
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";

const CustomLayout = ({ children }) => {
  return (
    <>
      <CustomHeader />
      <div className="bg-[#eff2f5] min-h-screen">{children}</div>
      <CustomFooter />
    </>
  );
};

export default CustomLayout;
