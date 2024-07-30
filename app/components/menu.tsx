"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import React from "react";
import Image from "next/image";
import clinic from "@/public/clinic.jpg";
import { Stack } from "@mui/material";
import { dosis } from "@/fonts/font";
import ButtonTopBar from "@/app/ui/buttonTopBar";

const pages = [
  "Começar",
  "Sobre mim",
  "Contato",
  "Preço",
  "Reviews",
  "Galeria",
];

function TopBar() {
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

        <Stack
          direction="row"
          justifyContent="center"
          className={dosis.className}
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                display: "block",
                my: 2,
              }}
            >
              {page}
            </Button>
          ))}
        </Stack>
        <Stack direction="column" sx={{}}>
          <ButtonTopBar />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
