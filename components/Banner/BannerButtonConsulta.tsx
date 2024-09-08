import Link from "next/link";
import { Box, Button, styled } from "@mui/material";
import { Today } from "@mui/icons-material";
import { dosis } from "@/fonts";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
    color: "#fff",
  },
});

const BannerButtonConsulta = () => {
  return (
    <Box>
      <Link href="https://api.whatsapp.com/send?phone=5524999882200" target="_blank">
        <BootstrapButton
          className={dosis.className}

          sx={{
            backgroundColor: "#fff",
            border: "2px solid #fff",
            borderRadius: "25px",
            color: "#333",
            fontWeight: 600,
            textTransform: "uppercase",
            width: {xs: "256px", md: "200px"},
            height: "48px",
          }}
        >
          <Today sx={{ color: "#047b8b" }} />
          &nbsp; Marcar Consulta
        </BootstrapButton>
      </Link>
    </Box>
  );
};

export default BannerButtonConsulta;
