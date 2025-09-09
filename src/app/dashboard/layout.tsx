import React from "react";
import Appbar from "@/components/layout/Appbar";
import { Box } from "@mui/material";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="auth-container">
      <Appbar />
      <Box sx={{ height: "calc(100vh - 64px)" }}>{children}</Box>
    </div>
  );
};

export default DashboardLayout;
