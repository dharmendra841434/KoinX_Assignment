"use client";

import React, { useState, useEffect } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdArrowDropUp,
  MdCurrencyRupee,
} from "react-icons/md";
import { FaBitcoin } from "react-icons/fa6";
import TradingViewWidget from "../koinx/Chart";
import { IoLogoUsd } from "react-icons/io";
import { chartData, menu, teamData } from "@/utils/menuList";
import PerformanceIndicator from "./PerformanceIndicator";
import { IoMdInformationCircle } from "react-icons/io";
import FundamentalsLables from "./FunamentalsLables";
import { PiCurrencyDollar } from "react-icons/pi";
import {
  addCommasToINR,
  addCommasToRupees,
  addCommasToUSD,
  estimateData,
  sortString,
} from "@/utils/helper";
import EventSlider from "./EventSlider";
import Progress from "./ProgressBar";
import HoldingSlider from "./HoldingSlider";
import CustomPiChart from "./PiChart";
import axios from "axios";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState(menu[0]);
  const [bitCoinData, setBitCoinData] = useState({});

  const getBitCoinData = async () => {
    await axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_vol=true"
      )
      .then((res) => {
        console.log(res, "log");
        setBitCoinData(res?.data?.bitcoin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBitCoinData();
  }, []);

  return (
    <div className="px-3 py-3 mx-auto max-w-7xl xl:px-0 ">
      <div className="flex items-center ">
        <p className="text-gray-400 capitalize">cryptocurrences</p>
        <MdKeyboardDoubleArrowRight className="mx-2 mt-1 text-gray-400" />
        <p>Bitcoin</p>
      </div>
      <div className="">
        <div className="flex mt-4 gap-x-5 ">
          <div className=" w-full lg:w-[70%] ">
            <div className=" lg:hidden">
              <div className="flex items-center my-4 gap-x-7 ">
                <div className="flex items-center gap-x-3">
                  <FaBitcoin className="text-4xl text-orange-400 " />
                  <h2 className="text-xl font-bold text-gray-900 ">Bitcoin</h2>
                  <span className="text-gray-500 ">BTC</span>
                </div>
                <button className="px-3 py-1 text-white bg-gray-500 rounded-md ">
                  Rank #1
                </button>
              </div>
            </div>
            <div className="px-3 bg-white rounded-md lg:py-6 shadow-cardShadow">
              <div className="hidden lg:block">
                <div className="flex items-center gap-x-7 ">
                  <div className="flex items-center gap-x-3">
                    <FaBitcoin className="text-4xl text-orange-400 " />
                    <h2 className="text-xl font-bold text-gray-900 ">
                      Bitcoin
                    </h2>
                    <span className="text-gray-500 ">BTC</span>
                  </div>
                  <button className="px-3 py-1 text-white bg-gray-500 rounded-md ">
                    Rank #1
                  </button>
                </div>
              </div>
              <div className="py-3 my-3 border-b border-gray-200 ">
                <div className="flex gap-x-6">
                  <div>
                    <div className="flex items-center">
                      <IoLogoUsd className="mt-0.5 text-xl text-gray-900 " />
                      <p className="text-xl font-bold text-gray-900 ">
                        {bitCoinData?.usd_24h_vol}
                      </p>
                    </div>
                    <div className="flex items-center my-1">
                      <MdCurrencyRupee className="mt-0.5  text-gray-900 " />
                      <p className="font-semibold text-gray-900 ">
                        {bitCoinData?.inr_24h_vol}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-3">
                    <div className="flex items-center px-1 text-sm rounded bg-green-50 h-fit ">
                      <MdArrowDropUp className="text-xl text-green-500 " />
                      <p className=" text-[13px] text-green-500">2.5%</p>
                    </div>
                    <p className=" text-[13px] font-semibold text-gray-500">
                      (24H)
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="my-5 overflow-hidden h-[25rem] md:h-[15rem] lg:h-[35rem] w-[100%] flex flex-col items-center 
           "
              >
                <TradingViewWidget />
              </div>
            </div>
            <div className="flex items-center my-5 overflow-x-scroll border-b-2 border-gray-300 gap-x-6">
              {menu?.map((item, index) => (
                <button onClick={() => setSelectedOption(item)} key={index}>
                  <p
                    className={` capitalize py-2 ${
                      selectedOption === item
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-500"
                    } `}
                  >
                    {item}
                  </p>
                </button>
              ))}
            </div>
            <div className="px-3 py-5 bg-white rounded shadow-cardShadow ">
              <h2 className="text-2xl font-bold text-gray-800 ">Performence</h2>
              <PerformanceIndicator
                min_title="Today's Low"
                min_value={37362}
                max_title="Today's High"
                max_value={736352}
              />
              <PerformanceIndicator
                min_title="52W Low"
                min_value={37362}
                max_title="53W High"
                max_value={736352}
              />
              <div>
                <div className="flex items-center my-3 gap-x-3">
                  <h2 className="text-lg font-bold text-gray-600 ">
                    Fundamentals
                  </h2>
                  <IoMdInformationCircle className="text-xl text-gray-500" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
                  <div>
                    <FundamentalsLables title="Bitcoin Price">
                      <div className="flex items-center ">
                        <PiCurrencyDollar className="font-medium text-gray-950" />
                        <h2 className="text-sm font-medium text-black">
                          {addCommasToRupees(35624)}
                        </h2>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="24h low / 24h high">
                      <div className="flex items-center">
                        <div className="flex items-center ">
                          <PiCurrencyDollar className="font-medium text-gray-950" />
                          <h2 className="text-sm font-medium text-black">
                            {addCommasToRupees(3562995)} /{" "}
                          </h2>
                        </div>
                        <div className="flex items-center ">
                          <PiCurrencyDollar className="font-medium text-gray-950" />
                          <h2 className="text-sm font-medium text-black">
                            {addCommasToRupees(8562495)}
                          </h2>
                        </div>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="7d low / 7d high">
                      <div className="flex items-center">
                        <div className="flex items-center ">
                          <PiCurrencyDollar className="font-medium text-gray-950" />
                          <h2 className="text-sm font-medium text-black">
                            {addCommasToRupees(3562995)} /{" "}
                          </h2>
                        </div>
                        <div className="flex items-center ">
                          <PiCurrencyDollar className="font-medium text-gray-950" />
                          <h2 className="text-sm font-medium text-black">
                            {addCommasToRupees(8562495)}
                          </h2>
                        </div>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="Tranding Valume">
                      <div className="flex items-center ">
                        <PiCurrencyDollar className="font-medium text-gray-950" />
                        <h2 className="text-sm font-medium text-black">
                          {addCommasToRupees(35624982372)}
                        </h2>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="Market cap rank">
                      <div className="flex items-center ">
                        <h2 className="text-sm font-medium text-black">#1</h2>
                      </div>
                    </FundamentalsLables>
                  </div>
                  <div>
                    <FundamentalsLables title="Market cap">
                      <div className="flex items-center ">
                        <PiCurrencyDollar className="font-medium text-gray-950" />
                        <h2 className="text-sm font-medium text-black">
                          {addCommasToRupees(356243464356)}
                        </h2>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="Market cap dominance">
                      <div className="flex items-center ">
                        <h2 className="text-sm font-medium text-black">
                          36.38%
                        </h2>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="Volume / Market cap ">
                      <div className="flex items-center ">
                        <h2 className="text-sm font-medium text-black">
                          0.03892
                        </h2>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="All time high  ">
                      <div>
                        <div className="flex items-center gap-x-1">
                          <div className="flex items-center ">
                            <PiCurrencyDollar className="font-medium text-gray-950" />
                            <h2 className="text-sm font-medium text-black">
                              {addCommasToRupees(3464356)}
                            </h2>
                          </div>
                          <div>
                            <h2 className="text-red-500 ">-75.5%</h2>
                          </div>
                        </div>
                        <div className="-mt-2">
                          <span className="text-[12px] capitalize ">
                            jan 10 2021 (about 1 year){" "}
                          </span>
                        </div>
                      </div>
                    </FundamentalsLables>
                    <FundamentalsLables title="All time low  ">
                      <div>
                        <div className="flex items-center gap-x-1">
                          <div className="flex items-center ">
                            <PiCurrencyDollar className="font-medium text-gray-950" />
                            <h2 className="text-sm font-medium text-black">
                              {addCommasToRupees(3464356)}
                            </h2>
                          </div>
                          <div>
                            <h2 className="text-green-500 ">125.5%</h2>
                          </div>
                        </div>
                        <div className="-mt-2">
                          <span className="text-[12px] capitalize ">
                            july 20 2021 (over 5 years){" "}
                          </span>
                        </div>
                      </div>
                    </FundamentalsLables>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 py-5 mt-5 bg-white rounded shadow-cardShadow ">
              <h2 className="text-2xl font-bold text-gray-800 ">Sentiments</h2>
              <div className="flex items-center my-3 gap-x-3">
                <h2 className="text-lg font-bold text-gray-600 ">Key Events</h2>
                <IoMdInformationCircle className="text-xl text-gray-500" />
              </div>
              <div>
                <EventSlider />
              </div>
              <div className="flex items-center my-5 gap-x-3">
                <h2 className="text-lg font-bold text-gray-600 ">
                  Analyst Estimates
                </h2>
                <IoMdInformationCircle className="text-xl text-gray-500" />
              </div>
              <div className="flex gap-x-5">
                <div className=" w-[20%] flex items-center justify-center">
                  <div className="flex items-center justify-center px-5 rounded-full py-7 lg:p-12 bg-green-50 h-fit w-fit">
                    <h2 className="text-xl font-bold text-[#07b585]">76%</h2>
                  </div>
                </div>
                <div className=" w-[70%]  ">
                  <Progress />
                </div>
              </div>
            </div>
            <div className="px-3 py-5 mt-5 bg-white rounded shadow-cardShadow ">
              <h2 className="text-2xl font-bold text-gray-800 capitalize ">
                About bitcoins
              </h2>
              <div className="pb-6 border-b border-gray-300 ">
                <h3 className="my-2 font-bold capitalize text-gray-950">
                  What is bitcoin ?
                </h3>
                <p className="text-gray-950">
                  Bitcoin's price today is US$16,951.82, with a 24-hour trading
                  volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
                  currently -7.70% from its 7-day all-time high of $18,366.66,
                  and 3.40% from its 7-day all-time low of $16,394.75. BTC has a
                  circulating supply of 19.24 M BTC and a max supply of 21 M
                  BTC.
                </p>
              </div>
              <div className="pb-6 border-b border-gray-300 ">
                <h3 className="my-2 font-bold capitalize text-gray-950">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-gray-950">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam error voluptatum itaque architecto non consequuntur
                  quidem odio id, unde numquam earum beatae qui quas vero animi!
                  Dolorum quaerat repellendus dolorem. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Sit quos, et aperiam
                  deleniti eius itaque! Quaerat voluptas tempore adipisci libero
                  fugiat amet repellat quam! Facere natus ipsa iste assumenda
                  consequuntur.
                </p>
                <p className="mt-5 text-gray-950">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam error voluptatum itaque architecto non consequuntur
                  quidem odio id, unde numquam earum beatae qui quas vero animi!
                  Dolorum quaerat repellendus dolorem. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Sit quos, et aperiam
                  deleniti eius itaque! Quaerat voluptas tempore adipisci libero
                  fugiat amet repellat quam! Facere natus ipsa iste assumenda
                  consequuntur.
                </p>
                <p className="mt-5 text-gray-950">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam error voluptatum itaque architecto non consequuntur
                  quidem odio id, unde numquam earum beatae qui quas vero animi!
                  Dolorum quaerat repellendus dolorem. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="pb-6 border-b border-gray-300 ">
                <h3 className="my-2 text-xl font-bold capitalize text-gray-950">
                  Already holding bitcoins?
                </h3>
                <HoldingSlider />
              </div>
            </div>
            <div className="px-3 py-5 mt-5 bg-white rounded shadow-cardShadow ">
              <div className="pb-6 ">
                <h3 className="my-2 text-2xl font-bold capitalize text-gray-950">
                  Tokenomics
                </h3>
                <h3 className="my-2 text-xl font-semibold capitalize text-gray-950">
                  Initial distribution
                </h3>
                <div>
                  <div className="flex gap-x-5 ">
                    <div className="">
                      <CustomPiChart />
                    </div>
                    <div className="flex flex-col justify-center">
                      {chartData?.map((item, index) => (
                        <div className="flex items-center gap-x-3">
                          <div
                            className={`w-3 h-3  rounded-full ${
                              index == 0 ? "bg-[#FFBB28]" : "bg-[#0088FE]"
                            } `}
                          />
                          <div className="flex items-center gap-x-2">
                            <h2 className="text-black ">{item.name} : </h2>
                            <h3 className="text-black "> {item.value}%</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Culpa quidem deserunt nesciunt enim. Consequuntur totam
                      omnis velit dolor alias deserunt minima, odio repellendus
                      qui suscipit sit, magnam similique quo adipisci! Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                      ipsam dignissimos facilis expedita. Quo officiis, esse
                      quasi tempora expedita libero natus soluta sint
                      praesentium sed quidem error laudantium aut animi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 py-5 mt-5 bg-white rounded shadow-cardShadow ">
              <h3 className="my-2 text-2xl font-bold capitalize text-gray-950">
                Teams
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                reprehenderit quidem voluptatem? Et nemo ut rem accusantium enim
                aspernatur ipsam quia. Velit iure beatae commodi id iste, dolor
                sed minus!
              </p>
              <div>
                {teamData?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 my-2 rounded-md bg-blue-50 gap-x-4 "
                  >
                    <div className=" w-[15%]">
                      <img src={item.dp} className="w-full rounded-md " />
                      <div className="flex flex-col items-center w-full mt-1">
                        <h2 className="font-bold text-black ">{item.title}</h2>
                        <span className="-mt-1 text-sm font-semibold text-gray-400">
                          {item.subText}
                        </span>
                      </div>
                    </div>
                    <div className="w-[75%]">
                      <p>{sortString(item.desc, 260)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" bg-blue-500 w-[30%] h-[30rem] hidden lg:block rounded-md">
            card
          </div>
        </div>
      </div>
      {/* <div className=" lg:hidden">
        <div className="flex items-center my-4 gap-x-7 ">
          <div className="flex items-center gap-x-3">
            <FaBitcoin className="text-4xl text-orange-400 " />
            <h2 className="text-xl font-bold text-gray-900 ">Bitcoin</h2>
            <span className="text-gray-500 ">BTC</span>
          </div>
          <button className="px-3 py-1 text-white bg-gray-500 rounded-md ">
            Rank #1
          </button>
        </div>
        <div className="p-4 bg-white rounded-md shadow-cardShadow ">
          <div className=" h-[20rem] w-full">
            <TradingViewWidget />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
