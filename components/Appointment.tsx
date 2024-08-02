"use client";

import Image from "next/image";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Agenda from "@/components/Agenda";
import { dosis } from "@/fonts/Dosis";
import appointment from "@/public/images/appointment.png";

const Appointment = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          className={dosis.className}
          sx={{
            color: "#333",
            fontSize: "36px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            position: "absolute",
            py: 10,
            zIndex: 1,
          }}
        >
          MARCAR UMA VISITA
        </Typography>

        <Paper
          sx={{
            alignItems: "center",
            backgroundColor: "#fff",
            marginTop: "200px",
            position: "absolute",
            width: "1150px",
            height: "300px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.388900111354!2d-43.18367198976389!3d-22.48958747946569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9907f3dbfbffff%3A0x5baf36bab504f4b0!2sR.%20Prof.%20Stroeller%2C%20428%20-%20Bloco%204%20sala%20209%20-%20Quarteir%C3%A3o%20Brasileiro%2C%20Petr%C3%B3polis%20-%20RJ%2C%2025680-176!5e0!3m2!1spt-BR!2sbr!4v1722538936043!5m2!1spt-BR!2sbr"
            width="500"
            height="300"
            loading="lazy"
            style={{
              border: 0,
              marginLeft: "650px",
              position: "absolute",
              zIndex: 1,
            }}
          />
        </Paper>

        <Agenda />

        <Image
          src={appointment}
          alt="appointment"
          style={{
            paddingBottom: 20,
            height: "1000px",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Appointment;
