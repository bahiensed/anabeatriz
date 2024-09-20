"use client";

import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";

import emailjs from "@emailjs/browser";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (name === "" || email === "" || mobile === "" || message === "") {
      alert("Por favor, preencha todos os campos do formulário!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      mobile: mobile,
    };
    emailjs
      .send(
        "service_3h3nxwp",
        "template_so7wgmt",
        templateParams,
        "xPZd6h5LgMP-3e8LD"
      )
      .then(
        (response) => {
          alert(
            "Seu email foi enviado com sucesso, entraremos em contato em breve!"
          );
          setName("");
          setEmail("");
          setMobile("");
          setMessage("");
        },
        (error) => {
          console.log("Erro: ", error);
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#fff",
        color: "#343434",
        px: { xs: 4, md: 16 },
        py: 6,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Dosis, sans-serif",
          fontSize: { xs: "32px", md: "42px" },
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Contato
      </Typography>

      <Typography
        sx={{
          fontFamily: "Dosis, sans-serif",
          fontSize: { xs: "22px", md: "32px" },
          fontWeight: 500,
          letterSpacing: 2,
          mb: 4,
        }}
      >
        Entre em contato conosco
      </Typography>

      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="name"
              label="Nome"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="email"
              label="E-mail"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="telefone"
              label="Telefone"
              placeholder="(24) 99876-5432"
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              id="message"
              label="Mensagem"
              multiline
              rows={6}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>

          <Grid size={12}>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#038C8C",
                borderRadius: 10,
                color: "#fff",
                fontFamily: "Dosis, sans-serif",
                fontWeight: 700,
                width: "200px",
                height: "48px",
              }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
