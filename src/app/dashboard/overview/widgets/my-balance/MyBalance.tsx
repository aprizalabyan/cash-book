"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import CommonButton from "@/components/base/button/Common";
import { useTotalBalance } from "../../hooks";

const MyBalance = () => {
  const { data, isLoading } = useTotalBalance({
    year: new Date().getFullYear().toString(),
  });

  if (isLoading) return <Typography fontSize={12}>Loading...</Typography>;
  else
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontSize={24} fontWeight="600" color="textDark">
            Rp {data.grand_total}
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
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontSize={12} color="textDark">
            783 9909 9838 12
          </Typography>
          <CommonButton
            variant="secondary"
            text="Copy"
            small
            icon={<ContentCopy />}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <CommonButton variant="primary" text="Send Money" />
          <CommonButton variant="secondary" text="Request Money" />
        </Box>
      </Box>
    );
};

export default MyBalance;
