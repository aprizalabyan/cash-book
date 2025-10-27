import React from "react";
import Appbar from "@/components/layout/Appbar";
import { Box } from "@mui/material";
import NavHeader from "@/components/layout/NavHeader";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="dashboard-container">
      <Appbar />
      <NavHeader />
      <Box sx={{ maxHeight: "calc(100vh - 188px)", overflowY: "auto" }} px={2}>
        {children}
      </Box>
    </div>
  );
};

export default DashboardLayout;
