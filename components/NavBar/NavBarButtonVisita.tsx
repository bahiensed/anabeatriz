import Link from "next/link";
import { Box, styled } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { dosis } from "@/fonts";

const BootstrapButton = styled(Box)({
  "&:hover": {
    backgroundColor: "#cab882",
    color: "#fff",
  },
});

const NavBarButtonVisita = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5524999882200"
      target="_blank"
    >
      <BootstrapButton
        className={dosis.className}
        sx={{
          backgroundColor: "#038C8C",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 700,
          pt: 3.5,
          textTransform: "uppercase",
          width: "180px",
          height: "80px",
        }}
      >

        <WhatsApp sx={{ color: "#fff", float: "left", mt: -0.5, ml: 3 }}/>
        &nbsp; Marcar Consulta

      </BootstrapButton>
    </Link>
  );
};

export default NavBarButtonVisita;
