import { Box, Button, Paper, Stack, styled, Typography } from "@mui/material";
import AppointmentButtonVejaMais from "@/components/AppointmentButtonVejaMais";
import { dosis, openSans } from "@/fonts/Fonts";

const Agenda = () => {
  const BootstrapButton = styled(Button)({
    ":hover": {
      backgroundColor: "#cab882",
      color: "#fff",
    },
  });

  return (
    <Stack
      sx={{
        backgroundColor: "#038C8C",
        mt: "700px",
        pb: 50,
        width: "100%",
        height: "350px",
        position: "absolute",
        textAlign: "center",
      }}
    >
      <Typography
        className={dosis.className}
        sx={{
          color: "#fff",
          fontSize: "30px",
          fontWeight: 100,
          mt: 5,
          lineHeight: 1.1,
        }}
      >
        Selecionar a data conveniente e marcar uma consulta!
      </Typography>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 0.3,
            mt: 5,
            width: 158,
            height: 188,
          },
        }}
      >
        <Paper elevation={0}>
          <Typography
            className={dosis.className}
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              mt: 2,
              letterSpacing: "0.05em",
            }}
          >
            SEGUNDA-FEIRA
          </Typography>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            09:00
          </BootstrapButton>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            10:00
          </BootstrapButton>
        </Paper>
        <Paper elevation={0}>
          <Typography
            className={dosis.className}
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              mt: 2,
              letterSpacing: "0.05em",
            }}
          >
            TERÇA-FEIRA
          </Typography>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            09:00
          </BootstrapButton>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            10:00
          </BootstrapButton>
        </Paper>
        <Paper elevation={0}>
          <Typography
            className={dosis.className}
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              mt: 2,
              letterSpacing: "0.05em",
            }}
          >
            QUARTA-FEIRA
          </Typography>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            09:00
          </BootstrapButton>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            10:00
          </BootstrapButton>
        </Paper>
        <Paper elevation={0}>
          <Typography
            className={dosis.className}
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              mt: 2,
              letterSpacing: "0.05em",
            }}
          >
            QUINTA-FEIRA
          </Typography>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            09:00
          </BootstrapButton>{" "}
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            10:00
          </BootstrapButton>
        </Paper>
        <Paper elevation={0}>
          <Typography
            className={dosis.className}
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              mt: 2,
              letterSpacing: "0.05em",
            }}
          >
            SEXTA-FEIRA
          </Typography>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            09:00
          </BootstrapButton>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            10:00
          </BootstrapButton>
        </Paper>
        <Paper elevation={0}>
          <Typography
            className={dosis.className}
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              mt: 2,
              letterSpacing: "0.05em",
            }}
          >
            SÁBADO
          </Typography>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            09:00
          </BootstrapButton>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            10:00
          </BootstrapButton>
        </Paper>
        <Paper elevation={0}>
          <Typography
            className={dosis.className}
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              mt: 2,
              letterSpacing: "0.05em",
            }}
          >
            DOMINGO
          </Typography>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            09:00
          </BootstrapButton>
          <BootstrapButton
            className={openSans.className}
            sx={{
              color: "#333",
              fontSize: "14px",
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            10:00
          </BootstrapButton>
        </Paper>
      </Box>
      <AppointmentButtonVejaMais />
    </Stack>
  );
};

export default Agenda;
