"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Stack, styled, Typography } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { dosis, openSans } from "@/fonts";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
    color: "#fff",
  },
});

const AppointmentButtonLigar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <BootstrapButton
        onClick={handleClick}
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
      {isClicked ? (
        <>
          <Typography
            className={dosis.className}
            sx={{
              color: "#333",
              fontSize: "18px",
              fontWeight: "600",
              mt: 5,
              ml: 5,
              letterSpacing: "0.05em",
              lineHeight: 1.1,
            }}
          >
            AGENDAR CONSULTA:
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              mt: 1,
            }}
          >
            <PhoneIphoneIcon sx={{ color: "#add9d4", mt: 1, ml: 5 }} />
            <Stack direction="column" justifyContent="center">
              <Typography
                className={openSans.className}
                sx={{
                  color: "#333",
                  fontSize: "18px",
                  fontWeight: "300",
                  mt: 0.8,

                  letterSpacing: "0.05em",
                  lineHeight: 1.5,
                }}
              >
                +55 00 00000-000
              </Typography>
            </Stack>
          </Stack>
        </>
      ) : null}
    </>
  );
};

export default AppointmentButtonLigar;
