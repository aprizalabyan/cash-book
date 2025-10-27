"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, Tab, Box } from "@mui/material";

const routes = [
  { label: "Overview", path: "/dashboard/overview" },
  { label: "Wallet", path: "/dashboard/wallet" },
  { label: "Analytics", path: "/dashboard/analytics" },
  { label: "Settings", path: "/dashboard/settings" },
  { label: "Report", path: "/dashboard/report" },
];

const TabNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentTab = routes.findIndex((route) => route.path === pathname);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    router.push(routes[newValue].path);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
      <Tabs
        value={currentTab === -1 ? 0 : currentTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="inherit"
        slotProps={{
          indicator: {
            style: { backgroundColor: "primary.main", height: "2px" },
          },
        }}
      >
        {routes.map((route) => (
          <Tab
            key={route.path}
            label={route.label}
            sx={{
              textTransform: "none",
              color: pathname === route.path ? "primary.main" : "textGrey.main",
              fontWeight: "500",
              "&.Mui-selected": { color: "primary.main" },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabNavigation;
