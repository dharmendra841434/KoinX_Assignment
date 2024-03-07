import { headerMenu } from "@/utils/menuList";
import React from "react";
import { IoMenu } from "react-icons/io5";

const CustomHeader = () => {
  return (
    <div className="sticky top-0 z-20 px-3 py-3 bg-white border-b border-gray-200 lg:px-4 shadow-hearderShadow ">
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div>
            <span className="text-3xl font-bold text-blue-600 ">Koin</span>
            <span className="text-4xl font-bold text-yellow-500 ">X</span>
          </div>
          <div className="flex items-center gap-x-12">
            <div className="flex items-center gap-x-6">
              {headerMenu?.map((item, index) => (
                <button key={index}>
                  <h2 className="font-semibold text-gray-900 capitalize">
                    {item.title}
                  </h2>
                </button>
              ))}
            </div>
            <button className="px-5 py-1 font-semibold text-white bg-blue-600 rounded-md ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-blue-600 ">Koin</span>
            <span className="text-4xl font-bold text-yellow-500 ">X</span>
          </div>
          <div>
            <IoMenu className="text-3xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
