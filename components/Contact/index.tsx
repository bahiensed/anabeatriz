import { Box, Button, Grid2 as Grid, TextField, Typography } from "@mui/material";

export default function Form() {
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
          fontSize: { xs: '32px', md: '42px' },
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: 'uppercase'
        }}
      >
        Contato
      </Typography>

      <Typography
        sx={{
          fontFamily: "Dosis, sans-serif",
          fontSize: { xs: '22px', md: '32px' },
          fontWeight: 500,
          letterSpacing: 2,
          mb: 4,
        }}
      >
        Entre em contato conosco
      </Typography>

      <form>
        <Grid container spacing={2}>
          <Grid size={{xs: 12, md: 6}}>
            <TextField
              id="name"
              label="Nome"
              fullWidth              
            />
          </Grid>

          <Grid size={{xs: 12, md: 6}}>
          <TextField
              id="email"
              label="E-mail"
              fullWidth              
            />
          </Grid>

          <Grid size={12}>
            <TextField
              id="message"
              label="Mensagem"
              multiline
              rows={6}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <Button
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
