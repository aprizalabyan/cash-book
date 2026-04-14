"use client";

import React from "react";
import { Chip, Typography } from "@mui/material";
import { DataTable, Column } from "@/components/base/table/Table";
import { useRecentTransactions } from "../../hooks";
import { TRecentTransactionsResponse } from "@/types/recent-transactions";
import { formatCurrency } from "@/utils/formatter";

const RecentTransactions = () => {
  const { data: recentTransactionsData, isLoading } = useRecentTransactions({
    year: new Date().getFullYear().toString(),
    limit: 10,
  });

  const columns: Column<TRecentTransactionsResponse>[] = [
    { key: "description", header: "Transaction Name", width: 280 },
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
            bgcolor: r.type === "income" ? "#017E0015" : "#E53E3E15",
            backgroundBlendMode: "darken",
            color: r.type === "income" ? "primary.main" : "accentRed.main",
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
      render: (r) => formatCurrency(r.amount),
      valueGetter: (r) => r.amount,
    },
    {
      key: "date",
      header: "Date",
      width: 140,
      valueGetter: (r) => new Date(r.date).getTime(),
      render: (r) =>
        new Date(r.date).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    },
    {
      key: "category",
      header: "Category",
      width: 160,
    },
    { key: "source", header: "Source", width: 220 },
  ];

  if (isLoading) return <Typography fontSize={12}>Loading...</Typography>;
  else
    return (
      <DataTable<TRecentTransactionsResponse>
        rows={recentTransactionsData || []}
        columns={columns}
        getRowId={(r, i) => `${r.description}-${i}`}
        initialSort={{ key: "date", direction: "desc" }}
        pagination
        stickyHeader
        dense
      />
    );
};

export default RecentTransactions;
