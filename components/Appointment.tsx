"use client";

import { Box, Stack } from "@mui/material";

const Appointment = () => {
  return (
    <>
      <Box
        id="map"
        sx={{
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.388900111354!2d-43.18367198976389!3d-22.48958747946569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9907f3dbfbffff%3A0x5baf36bab504f4b0!2sR.%20Prof.%20Stroeller%2C%20428%20-%20Bloco%204%20sala%20209%20-%20Quarteir%C3%A3o%20Brasileiro%2C%20Petr%C3%B3polis%20-%20RJ%2C%2025680-176!5e0!3m2!1spt-BR!2sbr!4v1722538936043!5m2!1spt-BR!2sbr"
            width="100%"
            height="680vh"
            allowFullScreen
            loading="lazy"
            style={{
              border: 0,
              zIndex: 1,
            }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Appointment;
