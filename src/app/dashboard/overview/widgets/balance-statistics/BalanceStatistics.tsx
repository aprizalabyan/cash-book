"use client"

import React from "react";
import BaseChart from "@/components/base/chart/Chart";

const d_lineChart = {
  categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  series: [
    {
      name: "Income",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      smooth: true,
      itemStyle: { color: "#017E00" },
    },
    {
      name: "Expense",
      data: [560, 232, 401, 1234, 1090, 930, 520],
      smooth: true,
      itemStyle: { color: "#E53E3E" },
    },
  ],
};

const BalanceStatistics = () => {
  return <BaseChart config={{ type: "line", data: d_lineChart }} />;
};

export default BalanceStatistics;
