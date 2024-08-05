"use client";

import Link from "next/link";
import { Button, styled } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { dosis } from "@/fonts/Dosis";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
    color: "#fff",
  },
});

const AppointmentButtonLigar = () => {
  return (
    <>
      <Link href="#appointment">
        <BootstrapButton
          className={dosis.className}
          sx={{
            backgroundColor: "#038C8C",
            borderRadius: "28px",
            color: "#fff",
            fontWeight: 700,
            mt: 3,
            ml: 4,
            width: "200px",
            height: "48px",
          }}
        >
          <PhoneIphoneIcon sx={{ color: "#add9d4" }} />
          &nbsp; Ligar ao especialista
        </BootstrapButton>
      </Link>
    </>
  );
};

export default AppointmentButtonLigar;
