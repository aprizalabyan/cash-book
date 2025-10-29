"use client";

import React from "react";
import { Box, Grid, Chip } from "@mui/material";
import CardWidget from "@/components/base/card/Widget";
import { Wallet } from "@mui/icons-material";
import BaseChart from "@/components/base/chart/Chart";
import { DataTable, Column } from "@/components/base/table/Table";

type Tx = {
  name: string;
  type: "Income" | "Expense";
  amount: number; // dalam rupiah
  date: string; // ISO atau display-ready
  category?: string;
  account: string;
  status: "Success" | "Failed";
};

const rows: Tx[] = [
  {
    name: "Salary",
    type: "Income",
    amount: 12650000,
    date: "2025-08-01",
    category: "-",
    account: "BRI 03123************",
    status: "Success",
  },
  {
    name: "Chat GPT Subscription (6 Month)",
    type: "Expense",
    amount: 1150000,
    date: "2025-08-03",
    category: "Lifestyle",
    account: "BRI 03123************",
    status: "Success",
  },
  {
    name: "Mall Shopping",
    type: "Expense",
    amount: 650000,
    date: "2025-08-12",
    category: "Shopping",
    account: "BRI 03123************",
    status: "Success",
  },
  {
    name: "Chat GPT Subscription (6 Month)",
    type: "Expense",
    amount: 1265000,
    date: "2025-08-13",
    category: "Lifestyle",
    account: "BRI 03123************",
    status: "Success",
  },
  {
    name: "Chat GPT Subscription (6 Month)",
    type: "Expense",
    amount: 1265000,
    date: "2025-08-23",
    category: "Lifestyle",
    account: "BRI 03123************",
    status: "Success",
  },
  {
    name: "Salary",
    type: "Income",
    amount: 12650000,
    date: "2025-09-01",
    category: "-",
    account: "BRI 03123************",
    status: "Success",
  },
  {
    name: "Chat GPT Subscription (6 Month)",
    type: "Expense",
    amount: 1265000,
    date: "2025-09-09",
    category: "Lifestyle",
    account: "BRI 03123************",
    status: "Success",
  },
];

const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

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

  const columns: Column<Tx>[] = [
    { key: "name", header: "Transaction Name", width: 280 },
    {
      key: "type",
      header: "Type",
      width: 120,
      align: "center",
      render: (r) => (
        <Chip
          label={r.type}
          sx={{
            fontWeight: 600,
            bgcolor: r.type === "Income" ? "#017E0015" : "#E53E3E15",
            backgroundBlendMode: "darken",
            color: r.type === "Income" ? "primary.main" : "accentRed.main",
            borderRadius: "6px"
          }}
        />
      ),
      valueGetter: (r) => r.type,
    },
    {
      key: "amount",
      header: "Amount",
      width: 160,
      align: "right",
      render: (r) => idr(r.amount),
      valueGetter: (r) => r.amount,
    },
    {
      key: "date",
      header: "Date",
      width: 140,
      valueGetter: (r) => new Date(r.date).getTime(),
      render: (r) =>
        new Date(r.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    },
    {
      key: "category",
      header: "Category",
      width: 160,
      render: (r) => r.category ?? "-",
    },
    { key: "account", header: "Account", width: 220 },
    {
      key: "status",
      header: "Status",
      width: 120,
      align: "center",
      render: (r) => (
        <Chip
          label={r.status}
          size="small"
          sx={{
            fontWeight: 600,
            bgcolor: r.status === "Success" ? "#017E0015" : "#E53E3E15",
            color:
              r.status === "Success"
                ? "primary.main"
                : "accentRed.main",
          }}
        />
      ),
      valueGetter: (r) => r.status,
    },
  ];

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
            <DataTable<Tx>
              rows={rows}
              columns={columns}
              getRowId={(r, i) => `${r.name}-${i}`}
              initialSort={{ key: "date", direction: "desc" }}
              pagination
              stickyHeader
              dense
            />
          </CardWidget>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OverviewPage;
