import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { holdingData } from "@/utils/menuList";
import { GoArrowRight } from "react-icons/go";

const HoldingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className="my-5">
      <Slider {...settings}>
        {holdingData?.map((item, index) => (
          <div className="px-5 ">
            <div
              className={`flex  p-3 rounded-md gap-x-8 bg-gradient-to-br  ${
                index % 2 == 0
                  ? "from-[#73e9a4] to-[#1768ac]"
                  : " from-[#fe9262] to-[#f24039]"
              } `}
            >
              <img src={item.imgage} className=" w-[40%] h-full rounded-md" />
              <div className=" w-44">
                <h2 className="text-xl font-semibold text-white capitalize">
                  {item.title}
                </h2>
                <button className="flex items-center px-3 py-1 mt-4 text-black bg-white rounded-md gap-x-3">
                  <h3 className="text-sm font-semibold ">Check Now</h3>
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HoldingSlider;
