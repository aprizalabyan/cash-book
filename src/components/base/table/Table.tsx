"use client";

import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

export type SortDirection = "asc" | "desc";

export type Column<T> = {
  /** key unik kolom (juga dipakai utk sorting default) */
  key: keyof T | string;
  /** judul header */
  header: React.ReactNode;
  /** optional custom renderer */
  render?: (row: T, rowIndex: number) => React.ReactNode;
  /** ambil nilai utk sorting (kalau beda dgn data aslinya) */
  valueGetter?: (row: T) => unknown;
  /** align & width */
  align?: "left" | "right" | "center";
  width?: number | string;
  /** style per-cell */
  sx?: SxProps<Theme>;
  /** apakah kolom bisa di-sort */
  sortable?: boolean;
};

export type DataTableProps<T> = {
  rows: T[];
  columns: Column<T>[];
  /** ambil ID unik row; default pakai index */
  getRowId?: (row: T, index: number) => string | number;
  dense?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  /** pagination */
  pagination?: boolean;
  rowsPerPageOptions?: number[];
  initialRowsPerPage?: number;
  /** sorting */
  initialSort?: { key: Column<T>["key"]; direction?: SortDirection };
  /** klik baris */
  onRowClick?: (row: T) => void;
  /** empty state */
  emptyLabel?: React.ReactNode;
  /** table container styles */
  containerSx?: SxProps<Theme>;
};

function stableCompare(a: unknown, b: unknown, direction: SortDirection) {
  const mult = direction === "asc" ? 1 : -1;
  if (a == null && b == null) return 0;
  if (a == null) return -1 * mult;
  if (b == null) return 1 * mult;

  // string/number/date friendly compare
  if (a instanceof Date || b instanceof Date) {
    return (+new Date(a as any) - +new Date(b as any)) * mult;
  }
  if (typeof a === "number" && typeof b === "number") {
    return (a - b) * mult;
  }
  return String(a).localeCompare(String(b)) * mult;
}

export function DataTable<T>(props: DataTableProps<T>) {
  const {
    rows,
    columns,
    getRowId,
    dense,
    striped = true,
    stickyHeader = true,
    pagination = false,
    rowsPerPageOptions = [5, 10, 25],
    initialRowsPerPage = 10,
    initialSort,
    onRowClick,
    emptyLabel = "No data",
    containerSx,
  } = props;

  const [orderBy, setOrderBy] = React.useState<Column<T>["key"] | undefined>(
    initialSort?.key
  );
  const [order, setOrder] = React.useState<SortDirection>(
    initialSort?.direction ?? "asc"
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(initialRowsPerPage);

  const handleRequestSort = (key: Column<T>["key"]) => {
    if (orderBy === key) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(key);
      setOrder("asc");
    }
  };

  const sortedRows = React.useMemo(() => {
    if (!orderBy) return rows;
    const col = columns.find((c) => c.key === orderBy);
    if (!col) return rows;
    const getter =
      col.valueGetter ??
      ((r: T) =>
        typeof orderBy === "string"
          ? (r as any)[orderBy]
          : (r as any)[orderBy as any]);
    return [...rows].sort((ra, rb) =>
      stableCompare(getter(ra), getter(rb), order)
    );
  }, [rows, columns, orderBy, order]);

  const pagedRows = pagination
    ? sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : sortedRows;

  return (
    <Paper elevation={0} sx={{ border: "1px solid #e5e7eb" }}>
      <TableContainer
        sx={{
          maxHeight: 540,
          ...containerSx,
        }}
      >
        <Table stickyHeader={stickyHeader} size={dense ? "small" : "medium"}>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  bgcolor: "backgroundDarken.main",
                  fontWeight: 600,
                  color: "textDark.main",
                  borderBottom: "1px solid #e5e7eb",
                  whiteSpace: "nowrap",
                },
              }}
            >
              {columns.map((col) => {
                const sortable = col.sortable ?? true;
                const active = orderBy === col.key;
                return (
                  <TableCell
                    key={String(col.key)}
                    align={col.align ?? "left"}
                    sx={{ width: col.width, ...col.sx }}
                  >
                    {sortable ? (
                      <TableSortLabel
                        active={active}
                        direction={active ? order : "asc"}
                        onClick={() => handleRequestSort(col.key)}
                      >
                        {col.header}
                      </TableSortLabel>
                    ) : (
                      col.header
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& tr:hover": { backgroundColor: "#f9fafb" },
              "& td": { borderBottom: "1px solid #f1f5f9" },
            }}
          >
            {pagedRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <Box py={4}>
                    <Typography color="text.secondary">{emptyLabel}</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}

            {pagedRows.map((row, rIdx) => {
              const id = getRowId ? getRowId(row, rIdx) : rIdx;
              return (
                <TableRow
                  hover
                  key={id}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  sx={{
                    cursor: onRowClick ? "pointer" : "default",
                    ...(striped && rIdx % 2 === 1
                      ? { backgroundColor: "#fcfcfd" }
                      : null),
                  }}
                >
                  {columns.map((col, cIdx) => (
                    <TableCell
                      key={`${id}-${cIdx}`}
                      align={col.align ?? "left"}
                      sx={col.sx}
                    >
                      {col.render
                        ? col.render(row, rIdx)
                        : typeof col.key === "string"
                        ? (row as any)[col.key]
                        : (row as any)[col.key as any]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {pagination && (
        <TablePagination
          component="div"
          count={sortedRows.length}
          page={page}
          onPageChange={(_, p) => setPage(p)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      )}
    </Paper>
  );
}
