"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  SvgIcon,
} from "@mui/material";
import {
  KeyboardArrowDown,
  NotificationsNone,
  Logout,
} from "@mui/icons-material";
import LogoFull from "@/components/base/logo/Full";

const Appbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "24px",
        }}
      >
        <LogoFull />

        <Box sx={{ flexGrow: 0 }}>
          <Box display="flex" gap={2} alignItems="center">
            <IconButton
              color="textDark"
              sx={{ bgcolor: "backgroundDarken.main" }}
            >
              <NotificationsNone />
            </IconButton>
            <Avatar alt="Remy Sharp" src="/profile-1.png" />
            <Box display="flex" flexDirection="column">
              <Typography color="textDark" fontSize={14} fontWeight={500}>
                Aprizal Abyan
              </Typography>
              <Typography color="textDark" fontSize={12}>
                @aprizal_abyan
              </Typography>
            </Box>
            <IconButton onClick={handleOpenUserMenu} color="textDark">
              <KeyboardArrowDown />
            </IconButton>
          </Box>
          <Menu
            sx={{
              mt: "45px",
              "& .MuiMenu-paper": {
                backgroundColor: "background.default",
              },
            }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PopoverClasses={{ paper: "back" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <SvgIcon color="accentRed" fontSize="small" sx={{ mr: 1 }}>
                <Logout />
              </SvgIcon>
              <Typography color="accentRed" fontSize={14}>
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
