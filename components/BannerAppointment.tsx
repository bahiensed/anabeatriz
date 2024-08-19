import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import BannerButtonAppointmentContato from "@/components/BannerButtonAppointmentContato";
import BannerButtonVisita from "@/components/BannerButtonVisita";
import appointment from "@/public/images/appointment.png";
import anabeatriz from "@/public/images/anabeatriz.jpg";
import { dosis } from "@/fonts/Fonts";

const BannerAppointment = () => {
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Image
          alt="bannerAppointment"
          src={appointment}
          style={{ height: "600px" }}
        />
        <Image
          alt="logo"
          src={anabeatriz}
          style={{
            border: "5px solid white",
            borderRadius: "100px",
            height: "200px",
            marginTop: "90px",
            width: "200px",
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
          spacing={4}
          sx={{
            mt: "400px",
            position: "absolute",
          }}
        >
          <BannerButtonVisita />
          <Stack direction="column">
            <BannerButtonAppointmentContato />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BannerAppointment;
