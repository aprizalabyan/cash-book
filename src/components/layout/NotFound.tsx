"use client"

import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
      <Typography fontSize={48} fontWeight={500} color="textDark">
        404
      </Typography>
      <Box display="flex" flexDirection="column">
        <Typography fontSize={20} color="textDark">
          Oops!
        </Typography>
        <Typography fontSize={12} color="textGrey">
          We couldn`t find the page you were looking for.
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
