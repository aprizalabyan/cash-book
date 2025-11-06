import React from "react";
import { Box, Card, CardContent, SvgIcon, Typography } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  filter?: React.ReactNode;
}

const CardWidget = ({ children, title, icon, filter }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderRadius: "12px",
        bgcolor: "background.default",
        borderColor: "accentGrey.main",
      }}
    >
      <CardContent sx={{ height: "100%" }}>
        <Box display="flex" flexDirection="column" gap={2} height="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                display="flex"
                border={1}
                borderRadius={50}
                sx={{ padding: "4px", borderColor: "accentGrey.main" }}
              >
                <SvgIcon color="textDark" fontSize="small">
                  {icon}
                </SvgIcon>
              </Box>
              <Typography fontSize={14} fontWeight={600} color="textDark">
                {title}
              </Typography>
            </Box>
            {filter}
          </Box>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardWidget;
