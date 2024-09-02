import { Stack, Typography } from "@mui/material";
import AbouMeCards from "@/components/AboutMeCards";
import { dosis } from "@/fonts";

const AboutMe = () => {
  return (
    <>
      {/* Mobile */}
      <Stack id="aboutme" sx={{ display: { xs: "block", md: "none" }, py: 5, }}>
        <Typography
          className={dosis.className}
          sx={{
            color: "#333",
            fontSize: "26px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            pb: 5,
            textAlign: "center",
          }}
        >
          INFORMAÇÕES SOBRE MIM
        </Typography>
        <AbouMeCards />
      </Stack>

      {/* Desktop */}
      <Stack id="aboutme" sx={{ display: { xs: "none", md: "flex" }, py: 10,}}>
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
    </>
  );
};

export default AboutMe;
