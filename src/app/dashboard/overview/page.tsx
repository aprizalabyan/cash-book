"use client";

import React from "react";
import { Grid, SvgIcon } from "@mui/material";
import CardWidget from "@/components/base/card/Widget";
import {
  Wallet,
  FileDownloadOutlined,
  FileUploadOutlined,
  DonutLargeOutlined,
  ShowChartRounded,
  FormatListBulletedOutlined,
  FactCheckOutlined,
  MoreHoriz,
  TuneOutlined,
} from "@mui/icons-material";
import AllExpenses from "./widgets/all-expenses/AllExpenses";
import BalanceStatistics from "./widgets/balance-statistics/BalanceStatistics";
import RecentTransactions from "./widgets/recent-transactions/RecentTransactions";
import IncomeExpense from "./widgets/income-expense/IncomeExpense";
import MyBalance from "./widgets/my-balance/MyBalance";
import GoalProgress from "./widgets/goal-progress/GoalProgress";
import { useMonthlyStatus } from "./hooks";

const OverviewPage = () => {
  const { data: ms_data, isLoading: ms_isLoading } = useMonthlyStatus({
    year: new Date().getFullYear().toString(),
    month: new Date().toLocaleString("id-ID", { month: "long" }),
  });

  return (
    <Grid container direction="column" spacing={2}>
      <Grid container spacing={2}>
        <Grid container size={8}>
          <Grid container size={12}>
            <Grid size={6}>
              <CardWidget
                title="My Balance"
                icon={<Wallet />}
                filter={
                  <SvgIcon color="textDark">
                    <MoreHoriz />
                  </SvgIcon>
                }
              >
                <MyBalance />
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Income" icon={<FileDownloadOutlined />}>
                <IncomeExpense
                  category="incomes"
                  data={ms_data?.income}
                  isLoading={ms_isLoading}
                />
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Expense" icon={<FileUploadOutlined />}>
                <IncomeExpense
                  category="expenses"
                  data={ms_data?.expense}
                  isLoading={ms_isLoading}
                />
              </CardWidget>
            </Grid>
          </Grid>
          <Grid size={12}>
            <CardWidget
              title="Balance Statistics"
              icon={<ShowChartRounded />}
              filter={
                <SvgIcon color="textDark">
                  <TuneOutlined />
                </SvgIcon>
              }
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
            <CardWidget title="Goals & Progress" icon={<FactCheckOutlined />}>
              <GoalProgress />
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
