import { Box, Typography } from "@mui/material";

const BannerText = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#fff",
          fontFamily: "Open Sans, sans-serif",
          fontSize: {
            xs: "36px",
            sm: "40px",
            md: "48px",
            lg: "64px"
          },
          fontWeight: 200,
          textAlign: "center",
          textTransform: "uppercase"
        }}
        variant="h2"
      >
        Ana Beatriz Winter
      </Typography>

      <Typography
        sx={{
          color: "#cab882",
          fontFamily: "Dosis, sans-serif",
          fontSize: {
            xs: "18px",
            sm: "20px",
            md: "24px",
            lg: "32px"
          },
          fontWeight: 200,
          letterSpacing: 2,
          textAlign: "center",
          textTransform: "uppercase"
        }}
        variant="h6"
      >
        Endocrinologia & Metabologia
      </Typography>
    </Box>
  );
};

export default BannerText;
