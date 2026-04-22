"use client";

import React from "react";
import BaseChart from "@/components/base/chart/Chart";
import { Typography } from "@mui/material";
import { useBalanceStatistics } from "../../hooks";

const BalanceStatistics = () => {
  const { data: chartData, isLoading } = useBalanceStatistics({
    year: new Date().getFullYear().toString(),
  });

  if (isLoading) return <Typography fontSize={12}>Loading...</Typography>;
  if (!chartData) return <Typography fontSize={12}>No data available</Typography>;
  return <BaseChart config={{ type: "line", data: chartData }} />;
};

export default BalanceStatistics;
