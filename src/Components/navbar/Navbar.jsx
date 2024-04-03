import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";

import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";


const navLinks = [
    {
      title: "Home",
      path: "#",
      icon: <InboxIcon />,
    },
    {
      title: "Login",
      path: "#login",
      icon: <DraftsIcon />,
    },
    {
      title: "Register",
      path: "#register",
      icon: <MenuIcon />,
    },
  ];


export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          aria-label="menu"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Motorcicle
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
}