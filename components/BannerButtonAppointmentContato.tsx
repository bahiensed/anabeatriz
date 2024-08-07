"use client";

import { Button, styled } from "@mui/material";
import { dosis } from "@/fonts/Dosis";

const BannerButtonAppointmentContato = () => {
  const BootstrapButton = styled(Button)({
    "&:hover": {
      color: "#cab882",
    },
  });

  return (
    <BootstrapButton
      href="#appointment"
      className={dosis.className}
      sx={{
        background: "none",
        color: "#333",
        height: "58px",
        fontWeight: 700,
        width: "200px",
      }}
    >
      ENTRE EM CONTATO
    </BootstrapButton>
  );
};

export default BannerButtonAppointmentContato;
