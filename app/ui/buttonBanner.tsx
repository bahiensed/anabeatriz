"use client";
import React from "react";
import { Button, styled } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dosis } from "@/fonts/font";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
    color: "#fff",
  },
});

const ButtonBanner = () => {
  return (
    <BootstrapButton
      className={dosis.className}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "28px",
        color: "black",
        fontWeight: 700,
        mt: 5,
        width: "200px",
        height: "58px",
      }}
    >
      <AccessTimeIcon sx={{ color: "#047b8b" }} />
      &nbsp; MARCAR UMA VISITA
    </BootstrapButton>
  );
};

export default ButtonBanner;
