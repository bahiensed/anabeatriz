"use client"

import { Stack, Typography } from "@mui/material";
import AppointmentButtonLigar from "@/components/AppointmentButtonLigar";
import { dosis } from "@/fonts/Dosis";



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
