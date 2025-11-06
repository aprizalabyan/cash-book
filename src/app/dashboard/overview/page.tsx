"use client";

import React from "react";
import { Box, Grid, Icon } from "@mui/material";
import CardWidget from "@/components/base/card/Widget";
import {
  Wallet,
  FileDownloadOutlined,
  FileUploadOutlined,
  DonutLargeOutlined,
  ShowChartRounded,
  FormatListBulletedOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import AllExpenses from "./widgets/all-expenses/AllExpenses";
import BalanceStatistics from "./widgets/balance-statistics/BalanceStatistics";
import RecentTransactions from "./widgets/recent-transactions/RecentTransactions";
import IncomeExpense from "./widgets/income-expense/IncomeExpense";
import MyBalance from "./widgets/my-balance/MyBalance";

const OverviewPage = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid container spacing={2}>
        <Grid container size={8}>
          <Grid container size={12}>
            <Grid size={6}>
              <CardWidget
                title="My Balance"
                icon={<Wallet />}
                filter={<Icon><MoreHoriz /></Icon>}
              >
                <MyBalance />
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Income" icon={<FileDownloadOutlined />}>
                <IncomeExpense category="incomes" />
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Expense" icon={<FileUploadOutlined />}>
                <IncomeExpense category="expenses" />
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
