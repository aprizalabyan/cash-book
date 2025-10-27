import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import CashBookIcon from "@/assets/icons/logo.svg";

const LogoFull = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <SvgIcon component={CashBookIcon} color="primary" />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        color="primary"
        fontWeight={600}
        sx={{
          mr: 2,
          textDecoration: "none",
        }}
      >
        Cash Book
      </Typography>
    </Box>
  );
};

export default LogoFull;
