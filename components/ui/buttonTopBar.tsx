"use client";
import React from "react";
import { Button, styled } from "@mui/material";
import { dosis } from "@/fonts/font";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#d1cec3",

    color: "#fff",
  },
});

const ButtonTopBar = () => {
  return (
    <BootstrapButton
      className={dosis.className}
      sx={{
        backgroundColor: "#047b8b",

        color: "#fff",
        fontWeight: 700,
        width: "200px",
        height: "80px",
      }}
    >
      MARCAR UMA VISITA
    </BootstrapButton>
  );
};

export default ButtonTopBar;
