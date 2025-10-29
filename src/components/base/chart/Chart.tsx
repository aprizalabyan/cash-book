"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { buildChartOption, type BuildInput } from "@/libs/echarts/builder";

export type ChartProps = {
  config: BuildInput;
  height?: number | string;
  theme?: string;
  override?: EChartsOption;
};

export default function BaseChart({
  config,
  height = 360,
  theme,
  override,
}: ChartProps) {
  const option = buildChartOption(config, override);

  return (
    <ReactECharts
      theme={theme}
      option={option}
      notMerge={false}
      lazyUpdate={true}
      style={{ width: "100%", height }}
    />
  );
}
