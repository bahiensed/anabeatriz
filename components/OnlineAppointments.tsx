import { Stack, Typography } from "@mui/material";
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
        height: "278px",
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
        <Typography
          className={dosis.className}
          sx={{
            color: "#333",
            fontSize: "18px",
            fontWeight: "600",
            mt: 5,
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
          <PhoneIphoneIcon sx={{ color: "#add9d4", mt: 1 }} />
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
      </Stack>
    </Stack>
  );
};

export default OnlineAppointments;
