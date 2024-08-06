import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import appointment from "@/public/images/appointment.png";
import logo from "@/public/images/logo.png";
import { dosis } from "@/fonts/Dosis";
import BannerButtonVisita from "./BannerButtonVisita";
import BannerButtonContato from "./BannerButtonContato";
import BannerAppointmentContato from "./BannerButtonAppointmentContato";

const BannerAppointment = () => {
  return (
    <>
      <Stack sx={{ alignItems: "center", mt: 10 }}>
        <Image alt="bannerAppointment" src={appointment} 
        style={{
            height:"600px"
        }}
        />
        <Image
          alt="logo"
          src={logo}
          style={{
            border: "5px solid white",
            borderRadius: "100px",
            marginTop: "90px",
            width: "200px",
            height: "200px",
            position: "absolute",
          }}
        />

        <Typography
          className={dosis.className}
          sx={{
            color: "#333",
            fontSize: "42px",
            lineHeight: 1.1,
            marginTop: "320px",
            position: "absolute",
          }}
        >
          Quer agendar uma consulta?
        </Typography>
        <Stack
          direction="row"
          sx={{
            position: "absolute",
            mt: "400px",
          }}
        >
          <BannerButtonVisita />
          <Stack
            direction="column"
            sx={{
              mt: 5,
            }}
          >
            <BannerAppointmentContato />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BannerAppointment;
