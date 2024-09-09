"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NavBarLinks from "@/components/NavBar/NavBarLinks";
import NavBarButtonVisita from "@/components/NavBar/NavBarButtonVisita";
import logo from "@/public/images/logo.png";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const banner = document.getElementById("banner");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavBar(entry.intersectionRatio < 0.15); //show navbar when banner is not visible
      },
      {
        threshold: 0.15, //trigger when less than 10% of the banner is visible
      }
    );

    if (banner) {
      observer.observe(banner);
    }

    return () => {
      if (banner) {
        observer.unobserve(banner);
      }
    };
  }, []);

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
          opacity: showNavBar ? 1 : 0, //control visibility
          transform: showNavBar ? "translateY(0)" : "translateY(-20px)", //slide effect
          transition: "opacity 0.75s ease, transform 0.75s ease", //smooth transition
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
