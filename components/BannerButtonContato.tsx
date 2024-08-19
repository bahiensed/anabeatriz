"use client";

import { Button, styled } from "@mui/material";
import { dosis } from "@/fonts";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
  },
});

const BannerButtonContato = () => {
  return (
    <BootstrapButton
      href="#appointment"
      className={dosis.className}
      sx={{
        border: "2px solid #fff",
        borderRadius: "28px",
        color: "#fff",
        fontWeight: 700,
        height: "58px",
        width: "200px",
      }}
    >
      NOSSO ENDEREÇO
    </BootstrapButton>
  );
};

export default BannerButtonContato;
