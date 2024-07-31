"use client";
import React from "react";
import { Box, Button, Stack, styled } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dosis } from "@/fonts/Dosis";

const BootstrapButton = styled(Box)({
  "&:hover": {
    backgroundColor: "#cab882",
    color: "#fff",
  },
});

const NavBarButtonVisita = () => {
  return (
    <>
      <BootstrapButton
        className={dosis.className}
        sx={{
          backgroundColor: "#047b8b",
          backgroundRadius: "none",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 700,

          pt: 4,
          width: "200px",
          height: "80px",
        }}
      >
        <AccessTimeIcon sx={{ color: "#fff", float: "left", mt: -0.5,ml:3 }} />
        &nbsp; MARCAR UMA VISITA
      </BootstrapButton>
    </>
  );
};

export default NavBarButtonVisita;
