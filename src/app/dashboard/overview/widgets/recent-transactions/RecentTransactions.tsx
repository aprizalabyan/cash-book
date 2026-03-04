"use client";

import React from "react";
import { Chip } from "@mui/material";
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

const RecentTransactions = () => {
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
            borderRadius: "6px",
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
            color: r.status === "Success" ? "primary.main" : "accentRed.main",
          }}
        />
      ),
      valueGetter: (r) => r.status,
    },
  ];

  return (
    <DataTable<Tx>
      rows={rows}
      columns={columns}
      getRowId={(r, i) => `${r.name}-${i}`}
      initialSort={{ key: "date", direction: "desc" }}
      pagination
      stickyHeader
      dense
    />
  );
};

export default RecentTransactions;
