import React from "react";
import { Button, SvgIcon, Typography } from "@mui/material";

interface Props {
  variant: "primary" | "secondary";
  text: string;
  icon?: React.ReactNode;
  small?: boolean;
  onClick?: () => void;
}

const CommonButton = ({ variant, text, icon, small, onClick }: Props) => {
  return (
    <Button
      variant={variant == "primary" ? "contained" : "outlined"}
      color={variant == "primary" ? "primary" : "accentGrey"}
      size="small"
      disableElevation
      sx={{
        fontSize: small ? "10px" : "12px",
        textTransform: "none",
        height: small ? "24px" : "32px",
        paddingX: small ? "" : "24px",
        backgroundColor:
          variant == "primary" ? "primary" : "backgroundDarken.main",
      }}
      onClick={onClick}
    >
      {icon && (
        <SvgIcon sx={{ fontSize: "12px" }} color="primary">
          {icon}
        </SvgIcon>
      )}
      <Typography
        fontSize={small ? 10 : 12}
        fontWeight={500}
        color={variant == "primary" ? "white" : "primary"}
        marginLeft={0.5}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default CommonButton;
