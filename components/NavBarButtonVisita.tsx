"use client";

import Link from "next/link";
import React from "react";
import { Box, styled } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dosis } from "@/fonts/Fonts";

const BootstrapButton = styled(Box)({
  "&:hover": {
    backgroundColor: "#cab882",
    color: "#fff",
  },
});

const NavBarButtonVisita = () => {
  return (
    <>
      <Link
        href="https://api.whatsapp.com/send?phone=24999882200"
        target="_blank"
      >
        <BootstrapButton
          className={dosis.className}
          sx={{
            backgroundColor: "#038C8C",
            backgroundRadius: "none",
            color: "#fff",
            height: "80px",
            fontSize: "14px",
            fontWeight: 700,
            pt: 4,
            width: "200px",
          }}
        >
          <AccessTimeIcon
            sx={{ color: "#fff", float: "left", mt: -0.5, ml: 3 }}
          />
          &nbsp; MARCAR CONSULTA
        </BootstrapButton>
      </Link>
    </>
  );
};

export default NavBarButtonVisita;
