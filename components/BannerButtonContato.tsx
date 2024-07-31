"use client";
import { Button, styled } from "@mui/material";
import { dosis } from "@/fonts/Dosis";

const BootstrapButton = styled(Button)({
  "&:hover": {
    color: "#d1cec3",
  },
});

const BannerButtonContato = () => {
  return (
    <BootstrapButton
      className={dosis.className}
      sx={{
        color: "#fff",
        fontWeight: 700,
        width: "200px",
        height: "58px",
      }}
    >
      ENTRE EM CONTATO
    </BootstrapButton>
  );
};

export default BannerButtonContato;
