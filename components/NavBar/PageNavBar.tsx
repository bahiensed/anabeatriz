"use client";

import Image from "next/image";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NavBarLinks from "@/components/NavBar/NavBarLinks";
import NavBarButtonVisita from "@/components/NavBar/NavBarButtonVisita";
import logo from "@/public/images/logo.png";

function NavBar() {
  return (
    <Box sx={{ position: "relative" }}>
      <AppBar
        id = "menu"
        position = "fixed"
        sx={{
          backgroundColor: "#fff",
          display: { xs: "none", md: "block" },
          top: 0,
          zIndex: 1000,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "80px", height: "80px" }}
            />

            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pl: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#000",
                  fontFamily: "Dosis, sans-serif",
                  lineHeight: 1,
                  textTransform: "uppercase"
                }}
              >
                Ana Beatriz Winter
              </Typography>

              <Typography
                sx={{
                  color: "#343434",
                  fontFamily: "Dosis, sans-serif",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                Endocrinologia & Metabologia
              </Typography>
            </Box>
          </Box>

          <NavBarLinks />
          <NavBarButtonVisita />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
