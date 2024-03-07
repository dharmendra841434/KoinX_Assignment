"use client";
import { chartData } from "@/utils/menuList";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#FFBB28", "#0088FE"];

const CustomPiChart = () => {
  return (
    <PieChart width={200} height={200} onMouseEnter={() => {}}>
      <Pie
        data={chartData}
        cx={80}
        cy={100}
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={-1}
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CustomPiChart;
