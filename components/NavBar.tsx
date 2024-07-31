"use client";
import React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Navigation from "@/constants/Navigation";
import NavBarButtonVisita from "@/components/NavBarButtonVisita";
import { dosis } from "@/fonts/Dosis";
import clinic from "@/public/images/clinic.png";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "#fff" }} position="static">
      <Toolbar disableGutters>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Image
            src={clinic}
            alt="clinic"
            style={{ width: "78px", height: "80px" }}
          />
          <Stack direction="column" justifyContent="center">
            <Typography
              className={dosis.className}
              variant="h6"
              sx={{ color: "#000", lineHeight: 1 }}
            >
              ANA BEATRIZ WINTER
            </Typography>
            <Typography
              className={dosis.className}
              sx={{ color: "gray", fontSize: "12px" }}
            >
              ENDOCRINOLOGIA & METABOLOGIA
            </Typography>
          </Stack>
        </Stack>
        <Navigation />

        <Stack direction="column" sx={{}}>
          <NavBarButtonVisita />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
