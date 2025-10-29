import type { EChartsOption, SeriesOption } from "echarts";

export type ChartKind = "line" | "bar" | "pie" | "doughnut" | "radar";

export const PALETTE = [
  "#4F46E5",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
  "#A855F7",
  "#84CC16",
  "#E11D48",
  "#14B8A6",
  "#3B82F6",
];

/** INPUT TYPES */
export type CartesianInput = {
  categories: string[];
  series: Array<{
    name: string;
    data: number[];
    type?: "line" | "bar";
    [key: string]: any;
  }>;
};

export type PieDatum = { name: string; value: number };
export type PieInput = {
  series: Array<{
    name?: string;
    data: PieDatum[];
    [key: string]: any;
  }>;
};

export type RadarInput = {
  indicators?: Array<{ name: string; max?: number }>;
  series: Array<{
    name?: string;
    data: number[];
    [key: string]: any;
  }>;
  categories?: string[];
};

export type BuildInput =
  | {
      type: "line" | "bar";
      title?: string;
      palette?: string[];
      data: CartesianInput;
    }
  | {
      type: "pie" | "doughnut";
      title?: string;
      palette?: string[];
      data: PieInput;
    }
  | { type: "radar"; title?: string; palette?: string[]; data: RadarInput };

export function buildChartOption(
  cfg: BuildInput,
  override?: EChartsOption
): EChartsOption {
  const palette = cfg.palette ?? PALETTE;

  const base: EChartsOption = {
    color: palette,
    title: cfg.title ? { text: cfg.title, left: "center", top: 16 } : undefined,
    legend: { top: 0, icon: "circle" },
    tooltip: {
      trigger: cfg.type === "pie" || cfg.type === "doughnut" ? "item" : "axis",
    },
    textStyle: {
      fontFamily: "Poppins, sans-serif",
    },
  };

  let option: EChartsOption = base;

  if (cfg.type === "line" || cfg.type === "bar") {
    const { categories, series } = cfg.data;

    const builtSeries: SeriesOption[] = series.map((s) => {
      const perType = s.type ?? cfg.type;
      return {
        // defaults for line
        ...(perType === "line"
          ? { smooth: true, showSymbol: false, emphasis: { focus: "series" } }
          : {}),
        // defaults for bar
        ...(perType === "bar"
          ? {
              barMaxWidth: 36,
              emphasis: { focus: "series" },
            }
          : {}),
        ...s,
        type: perType,
      } as SeriesOption;
    });

    option = {
      ...base,
      grid: { left: 40, right: 20, top: 60, bottom: 40 },
      xAxis: {
        type: "category",
        data: categories,
        axisTick: { alignWithLabel: true },
        axisLine: {
          lineStyle: { opacity: 0.2 },
        },
        splitLine: { show: true },
      },
      yAxis: {
        type: "value",
        axisLine: { show: true, lineStyle: { opacity: 0.2 } },
      },
      series: builtSeries,
    };
  }

  if (cfg.type === "pie" || cfg.type === "doughnut") {
    const ring = cfg.type === "doughnut";
    const { series } = cfg.data;

    const builtSeries: SeriesOption[] = series.map((s) => ({
      type: "pie",
      name: s.name,
      radius: ring ? ["35%", "60%"] : "60%",
      center: ["30%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      itemStyle: {
        borderColor: "#f6f8fa",
        borderWidth: 1,
      },
      ...s,
      data: s.data,
    }));

    option = {
      ...base,
      tooltip: { trigger: "item" },
      legend: {
        ...base.legend,
        orient: "vertical",
        right: "5%",
        top: "center",
        textStyle: {
          color: "#2e2e2e",
          fontSize: 14,
          rich: {
            name: {
              width: 100,
              align: "left",
            },
            percent: {
              fontWeight: "bold",
              align: "right",
              padding: [0, 0, 0, 10],
            },
          },
        },
        formatter: function (name) {
          const data = series[0].data;
          const total = data.reduce((sum, item) => sum + item.value, 0);
          const value = data.find((d) => d.name === name)?.value;
          if (!value) return "";
          const percent = ((value / total) * 100).toFixed(1);
          return `{name|${name}}  {percent|${percent}%}`;
        },
      },
      series: builtSeries,
    };
  }

  if (cfg.type === "radar") {
    const { indicators, series, categories } = cfg.data;

    const inferredIndicators =
      indicators ??
      (categories
        ? categories.map((n) => ({ name: n }))
        : inferIndicatorsFromSeries(series));

    option = {
      ...base,
      tooltip: { trigger: "item" },
      radar: { indicator: inferredIndicators },
      series: series.map((s) => ({
        name: s.name,
        areaStyle: { opacity: 0.15 },
        lineStyle: { width: 2 },
        symbolSize: 6,
        ...s,
        type: "radar",
        data: [{ value: s.data, name: s.name }],
      })),
    };
  }

  // Shallow merge with override (keep it predictable)
  return {
    ...option,
    ...override,
    series: override?.series ?? option.series,
    xAxis: override?.xAxis ?? option.xAxis,
    yAxis: override?.yAxis ?? option.yAxis,
    radar: override?.radar ?? option.radar,
    grid: override?.grid ?? option.grid,
    title: override?.title ?? option.title,
    legend: override?.legend ?? option.legend,
    tooltip: override?.tooltip ?? option.tooltip,
  };
}

/** Helpers */
function inferIndicatorsFromSeries(
  series: RadarInput["series"]
): Array<{ name: string; max?: number }> {
  const dim = series.reduce((m, s) => Math.max(m, s.data.length), 0);

  const names = Array.from({ length: dim }, (_, i) => `Dim ${i + 1}`);

  const perIndexMax: number[] = Array(dim).fill(0);
  for (const s of series) {
    s.data.forEach(
      (v, i) => (perIndexMax[i] = Math.max(perIndexMax[i], v ?? 0))
    );
  }
  return names.map((name, i) => ({
    name,
    max: Math.ceil(perIndexMax[i] * 1.2) || 1,
  }));
}
