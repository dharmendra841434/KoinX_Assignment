import React from "react";

const estimateData = [
  {
    title: "Buy",
    number: 78,
  },
  {
    title: "Sell",
    number: 16,
  },
  {
    title: "Hold",
    number: 56,
  },
];

const ProgressBar = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.number, 0);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex items-center my-3">
          <span className=" w-[20%] lg:w-[8%] text-sm lg:text-base font-semibold text-gray-400 ">
            {item.title}
          </span>
          <div className=" w-[80%] lg:w-[92%] ">
            <div
              className="relative rounded-md"
              style={{
                width: `${(item.number / total) * 100}%`,
                backgroundColor: `${
                  item.number < 20
                    ? "#c7c8ce"
                    : item?.number < 75
                    ? "#f7324c"
                    : "#07b585"
                }`,
                height: "7px",
              }}
            >
              <h2 className="absolute text-[12px] -right-7 -top-1.5">
                {item?.number}%
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Progress = () => {
  return (
    <div className="w-full">
      <ProgressBar data={estimateData} />
    </div>
  );
};

export default Progress;
