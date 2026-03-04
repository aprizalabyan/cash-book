import React from "react";
import { Box, Paper, Typography, CircularProgress } from "@mui/material";

export interface IGoalCardProps {
  title: string;
  saved: number;
  goal: number;
  percent: number;
  minWidth?: number;
}

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

const GoalCard = ({ title, saved, goal, percent }: IGoalCardProps) => {
  const clamped = Math.max(0, Math.min(100, percent));
  const size = 92;
  const thickness = 6;

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        paddingRight: 6,
        borderRadius: 3,
        bgcolor: "backgroundDarken.main",
      }}
    >
      <Typography fontSize={16} fontWeight={600} marginBottom={2}>
        {title}
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Box position="relative" sx={{ width: size, height: size }}>
          <CircularProgress
            variant="determinate"
            value={100}
            thickness={thickness}
            size={size}
            sx={{ color: "accentGrey.main" }}
          />
          <CircularProgress
            variant="determinate"
            value={clamped}
            thickness={thickness}
            size={size}
            sx={{ color: "textDark.main", position: "absolute", inset: 0 }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            {Math.round(clamped)}%
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Box>
            <Typography fontSize={12} color="textGrey">
              Saved Up
            </Typography>
            <Typography fontSize={14} fontWeight={600}>
              {formatIDR(saved)}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={12} color="textGrey">
              Goal
            </Typography>
            <Typography fontSize={14} fontWeight={600}>
              {formatIDR(goal)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default GoalCard;
