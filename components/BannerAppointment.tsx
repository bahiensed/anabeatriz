import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import BannerButtonAppointmentContato from "@/components/BannerButtonAppointmentContato";
import BannerButtonVisita from "@/components/BannerButtonVisita";
import appointment from "@/public/images/appointment.png";
import anabeatriz from "@/public/images/anabeatriz.jpg";
import { dosis } from "@/fonts/Dosis";

const BannerAppointment = () => {
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          mt: 10,
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
          sx={{
            mt: "400px",
            position: "absolute",
          }}
        >
          <BannerButtonVisita />
          <Stack direction="column" sx={{ mt: 5 }}>
            <BannerButtonAppointmentContato />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BannerAppointment;
