"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { EventData } from "@/utils/menuList";
import { sortString } from "@/utils/helper";

const EventSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` ${className} absolute top-4 `}
        style={{ ...style, display: "absolute" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {EventData?.map((item, index) => (
          <div key={index} className="px-4 bg-white ">
            <div
              className={` p-3 rounded  ${
                index % 2 === 0 ? " bg-blue-50 " : "bg-green-50"
              } `}
            >
              <div className="flex">
                <div
                  className={` p-3 h-fit w-fit rounded-full  ${
                    index % 2 === 0 ? " bg-blue-500 " : "bg-green-500"
                  } `}
                >
                  {item.icon}
                </div>
                <div className="px-2 ">
                  <h3 className="font-semibold text-gray-950">{item.title}</h3>
                  <h3 className="text-sm text-gray-700 ">
                    {sortString(item.description, 140)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;
