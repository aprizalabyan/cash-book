"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import CardWidget from "@/components/base/card/Widget";
import { Wallet } from "@mui/icons-material";
import BaseChart from "@/components/base/chart/Chart";

const OverviewPage = () => {
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

  const d_pieChart = {
    series: [
      {
        name: "",
        data: [
          { value: 1048, name: "Search Engine", itemStyle: { color: "#F27B13" } },
          { value: 735, name: "Direct", itemStyle: { color: "#10626E" }},
          { value: 580, name: "Email", itemStyle: { color: "#0A1624" } },
          { value: 484, name: "Union Ads", itemStyle: { color: "#792910" } },
        ],
      },
    ],
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid container spacing={2}>
        <Grid container size={8}>
          <Grid container size={12}>
            <Grid size={6}>
              <CardWidget
                title="Widget 1"
                icon={<Wallet />}
                filter={<Box>Ini filter</Box>}
              >
                Item 1
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Widget 2" icon={<Wallet />}>
                Item 2
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Widget 3" icon={<Wallet />}>
                Item 3
              </CardWidget>
            </Grid>
          </Grid>
          <Grid size={12}>
            <CardWidget
              title="Widget 5"
              icon={<Wallet />}
              filter={<Box>Ini filter</Box>}
            >
              <BaseChart config={{ type: "line", data: d_lineChart }} />
            </CardWidget>
          </Grid>
        </Grid>
        <Grid container size={4}>
          <Grid size={12} height={420}>
            <CardWidget title="Widget 4" icon={<Wallet />}>
              <BaseChart config={{ type: "doughnut", data: d_pieChart }} />
            </CardWidget>
          </Grid>
          <Grid size={12} height={280}>
            <CardWidget title="Widget 6" icon={<Wallet />}>
              Item 6
            </CardWidget>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={12}>
          <CardWidget title="Widget 7" icon={<Wallet />}>
            <BaseChart config={{ type: "bar", data: d_lineChart }} />
          </CardWidget>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OverviewPage;
