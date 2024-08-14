import { Stack, Typography } from "@mui/material";
import AbouMeCards from "@/components/AboutMeCards";
import { dosis } from "@/fonts/Dosis";

const AboutMe = () => {
  return (
    <Stack id="aboutme" sx={{ py: 10 }}>
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: "36px",
          fontWeight: 500,
          letterSpacing: "0.05em",
          lineHeight: 1.1,
          pb: 10,
          textAlign: "center",
        }}
      >
        INFORMAÇÕES SOBRE MIM
      </Typography>
      <AbouMeCards />
    </Stack>
  );
};

export default AboutMe;
