"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import CardWidget from "@/components/base/card/Widget";
import {
  Wallet,
  DonutLargeOutlined,
  ShowChartRounded,
  FormatListBulletedOutlined,
} from "@mui/icons-material";
import AllExpenses from "./widgets/all-expenses/AllExpenses";
import BalanceStatistics from "./widgets/balance-statistics/BalanceStatistics";
import RecentTransactions from "./widgets/recent-transactions/RecentTransactions";

const OverviewPage = () => {
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
              title="Balance Statistics"
              icon={<ShowChartRounded />}
              filter={<Box>Ini filter</Box>}
            >
              <BalanceStatistics />
            </CardWidget>
          </Grid>
        </Grid>
        <Grid container size={4}>
          <Grid size={12} height={420}>
            <CardWidget title="All Expenses" icon={<DonutLargeOutlined />}>
              <AllExpenses />
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
          <CardWidget
            title="Recent Transactions"
            icon={<FormatListBulletedOutlined />}
          >
            <RecentTransactions />
          </CardWidget>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OverviewPage;
