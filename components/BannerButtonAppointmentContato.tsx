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
        color: "#333",
        fontWeight: 700,
        width: "200px",
        height: "58px",
      }}
    >
      ENTRE EM CONTATO
    </BootstrapButton>
  );
};

export default BannerButtonAppointmentContato;
