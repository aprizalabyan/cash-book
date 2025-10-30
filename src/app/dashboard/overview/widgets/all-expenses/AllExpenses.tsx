"use client";

import React from "react";
import BaseChart from "@/components/base/chart/Chart";

const d_pieChart = {
  series: [
    {
      name: "",
      data: [
        {
          value: 1048,
          name: "Search Engine",
          itemStyle: { color: "#F27B13" },
        },
        { value: 735, name: "Direct", itemStyle: { color: "#10626E" } },
        { value: 580, name: "Email", itemStyle: { color: "#0A1624" } },
        { value: 484, name: "Union Ads", itemStyle: { color: "#792910" } },
      ],
    },
  ],
};

const AllExpenses = () => {
  return <BaseChart config={{ type: "doughnut", data: d_pieChart }} />;
};

export default AllExpenses;
