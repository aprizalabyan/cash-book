"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  category: "incomes" | "expenses";
}

const IncomeExpense = ({ category }: Props) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="end" height="100%">
      <Typography fontSize={12} color="textDark" textTransform="capitalize">
        Monthly {category}
      </Typography>
      <Typography fontSize={24} fontWeight="600" color="textDark">
        Rp {12000000}
      </Typography>
      <Box display="flex" gap={1}>
        <Typography fontSize={12} fontWeight="600" color="primary">
          +{9.8}%
        </Typography>
        <Typography fontSize={12} color="textGrey">
          compared to last month
        </Typography>
      </Box>
    </Box>
  );
};

export default IncomeExpense;
