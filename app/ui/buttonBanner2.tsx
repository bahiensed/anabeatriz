"use client";
import { Button, styled } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dosis } from "@/fonts/font";

const BootstrapButton = styled(Button)({
  "&:hover": {
    color: "#d1cec3",
  },
});

const ButtonBanner2 = () => {
  return (
    <BootstrapButton
      className={dosis.className}
      sx={{
        borderRadius: "28px",
        color: "#fff",
        fontWeight: 700,
        width: "200px",
        height: "58px",
      }}
    >
      <AccessTimeIcon sx={{ color: "#047b8b" }} />
      &nbsp; MARCAR UMA VISITA
    </BootstrapButton>
  );
};

export default ButtonBanner2;
