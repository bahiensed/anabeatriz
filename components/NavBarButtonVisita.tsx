"use client";
import React from "react";
import { Box, Button, styled } from "@mui/material";
import { dosis } from "@/fonts/Dosis";

const BootstrapButton = styled(Box)({
  "&:hover": {
    backgroundColor: "#cab882",
    color: "#fff",
  },
});

const NavBarButtonVisita = () => {
  return (
    <BootstrapButton
      className={dosis.className}
      sx={{
        backgroundColor: "#047b8b",
        color: "#fff",
        fontWeight: 700,
        pt:4,
        width: "200px",
        height: "80px",
        textAlign: "center",
      }}
    >
      MARCAR UMA VISITA
    </BootstrapButton>
  );
};

export default NavBarButtonVisita;
