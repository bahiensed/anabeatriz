"use client";
import { Button, styled } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dosis } from "@/fonts/Dosis";
import Link from "next/link";

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
    href="#appointment"
    >
    <BootstrapButton
      className={dosis.className}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "28px",
        color: "#333",
        fontWeight: 700,
        mt: 5,
        width: "200px",
        height: "58px",
      }}
    >
      <AccessTimeIcon sx={{ color: "#047b8b" }} />
      &nbsp; MARCAR UMA VISITA
    </BootstrapButton>
    </Link>
    </>
  );
};

export default BannerButtonVisita;
