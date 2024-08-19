"use client";

import Link from "next/link";
import { Button, styled } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dosis } from "@/fonts/Fonts";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
    color: "#fff",
  },
});

const BannerButtonVisita = () => {
  return (
    <>
      <Link
        href="https://api.whatsapp.com/send?phone=24999882200"
        target="_blank"
      >
        <BootstrapButton
          className={dosis.className}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "28px",
            color: "#333",
            fontWeight: 700,
            height: "58px",
            width: "200px",
          }}
        >
          <AccessTimeIcon sx={{ color: "#047b8b" }} />
          &nbsp; MARCAR CONSULTA
        </BootstrapButton>
      </Link>
    </>
  );
};

export default BannerButtonVisita;
