"use client"

import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import AppointmentButtonLigar from "@/components/AppointmentButtonLigar";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { dosis } from "@/fonts/Dosis";
import { openSans } from "@/fonts/OpenSans";


const OnlineAppointments = () => {



  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        mt: "1150px",
        position: "absolute",
        width: "100%",
        height: "350px",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography
          className={dosis.className}
          sx={{
            color: "#333",
            fontSize: "30px",
            mt: 5,
            lineHeight: 1.1,
          }}
        >
          Telemedicina (Consultas Online)
        </Typography>
        <AppointmentButtonLigar/>
      
      </Stack>
    </Stack>
  );
};

export default OnlineAppointments;
