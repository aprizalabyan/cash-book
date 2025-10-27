"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import TabNavigation from "@/components/base/tab/Navigation";

const NavHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={3}
    >
      <Box display="flex" flexDirection="column">
        <Typography fontSize={28} fontWeight={600} color="textDark">
          Good Morning, Aprizal
        </Typography>
        <Typography fontSize={12} color="textDark">
          This is your finance report.
        </Typography>
      </Box>
      <Box display="flex">
        <TabNavigation />
      </Box>
    </Box>
  );
};

export default NavHeader;
