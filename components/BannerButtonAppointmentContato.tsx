"use client";

import { Button, styled } from "@mui/material";
import { dosis } from "@/fonts/Dosis";

const BannerButtonAppointmentContato = () => {
  const BootstrapButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#f1ebd9",
    },
  });

  return (
    <BootstrapButton
      href="#appointment"
      className={dosis.className}
      sx={{
        border: "2px solid #333",
        borderRadius: "28px",
        color: "#333",
        height: "58px",
        fontWeight: 700,
        width: "200px",
      }}
    >
      NOSSO ENDEREÇO
    </BootstrapButton>
  );
};

export default BannerButtonAppointmentContato;
