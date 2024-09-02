"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack, styled, Typography } from "@mui/material";
import { dosis } from "@/fonts";

export default function Form() {
  const BootstrapButton = styled(Button)({
    ":hover": {
      backgroundColor: "#cab882",
      color: "#fff",
    },
  });

  return (
    <Box
      id="contact"
      component="form"
      sx={{
        backgroundColor: "#fff",
        maxHeight: "100%",
        mt: { xs: 5, md: 10 },
        pb: 10,
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: { xs: "24px", sm: "30px", md: "36px" },
          fontWeight: 500,
          pt: { xs: 3, md: 5 },
          pb: { xs: 3, md: 5 },
          lineHeight: 1.1,
          textAlign: "center",
        }}
      >
        CONTATO
      </Typography>
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: { xs: "20px", sm: "24px", md: "26px" },
          fontWeight: 500,
          lineHeight: 1.1,
          pb: 5,
          textAlign: "center",
        }}
      >
        Entre em contato conosco
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Nome"
          multiline
          maxRows={4}
          sx={{ width: { xs: "80%", sm: "300px" } }}
        />

        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Placeholder"
          sx={{ width: { xs: "80%", sm: "300px" } }}
        />
      </Stack>
      <Stack alignItems="center" justifyContent="center" sx={{ pt: 1 }}>
        <TextField
          id="outlined-multiline-static"
          label="Mensagem"
          multiline
          rows={6}
          fullWidth
          sx={{ width: { xs: "80%", sm: "612px" } }}
        />
      </Stack>
      <Stack alignItems="center" justifyContent="center" sx={{ pt: 2 }}>
        <BootstrapButton
          className={dosis.className}
          sx={{
            backgroundColor: "#038C8C",
            color: "#fff",
            height: "58px",
            fontWeight: 700,
            width: { xs: "80%", sm: "200px" },
          }}
        >
          ENVIAR
        </BootstrapButton>
      </Stack>
    </Box>
  );
}
