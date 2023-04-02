import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[500], 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[500], 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledCircleIcon = styled(AccountCircleIcon)({
  width: "45px",
  height: "45px",
});

const StyledMenuBox = styled(Box)({
  display: "flex",
  align: "center",
  justifyContent: "center",
  alignItems: "center",
});

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "0",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0),
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: "0",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0),
  },
}));

const search = (
  <StyledSearch sx={{ color: "white" }}>
    <IconButton color="inherit">
      <SearchIcon />
    </IconButton>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);

export default function Header() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: "linear-gradient(to right, black, transparent)",
        backgroundColor: "grey",
      }}
    >
      <StyledContainer maxWidth="false">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700 }}
            display="flex"
          >
            <img src="src/assets/logo.svg" alt="logo" width="200px" />
          </Typography>
          <Typography
            variant="h6"
            sx={{ flexGrow: 5, fontWeight: 700 }}
          ></Typography>

          <StyledMenuBox
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            {search}
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <StyledCircleIcon />
            </IconButton>
          </StyledMenuBox>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundImage:
                  "linear-gradient(to bottom, black, transparent)",
                backgroundColor: "grey",
              }}
            >
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white" }}
                />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Account" sx={{ color: "white" }} />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <NotificationsIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Notifications"
                    sx={{ color: "white" }}
                  />
                </ListItemButton>
              </Box>
              {search}
            </Box>
          </Drawer>
        </StyledToolbar>
      </StyledContainer>
    </AppBar>
  );
}
