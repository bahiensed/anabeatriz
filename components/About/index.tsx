import { Box, Typography } from "@mui/material";
import AboutCards from "@/components/About/AboutCards";
import { dosis } from "@/fonts";

const About = () => {
  return (
    <>
      <Box
      id="about"
      sx={{
        alignItems: "center",
        color: "#343434",
        justifyContent: "center",
        pl: {xs: 3, md: 12},
        pr: {xs: 0, md: 12},
        py: 6,
      }}
    >
      <Typography
        className={dosis.className}
        sx={{
          color: "#343434",
          fontSize: { xs: '32px', md: '42px' },
          fontWeight: 500,
          letterSpacing: 2,
          mr: 2,
          pb: 8,
          textAlign: 'center',
          textTransform: 'uppercase'
        }}
      >
        Informações <span style={{ whiteSpace: 'nowrap' }}>sobre mim</span>
      </Typography>

      <AboutCards />

      </Box>
    </>
  );
};

export default About;
