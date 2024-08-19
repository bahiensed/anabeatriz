"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import Navigation from "@/components/Navigation";
import NavBarButtonVisita from "@/components/NavBarButtonVisita";
import { dosis } from "@/fonts";
import logo from "@/public/images/logo.png";

function NavBar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 550 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <>
      <AppBar
        id="menu"
        className={`navbar ${stickyClass}`}
        sx={{
          backgroundColor: "#fff",
        }}
        position="sticky"
      >
        <Toolbar id="aboutme" disableGutters>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Image
              src={logo}
              alt="logo"
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
          <Stack direction="column">
            <NavBarButtonVisita />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default NavBar;
