import { Box, Typography } from "@mui/material";
import { dosis, openSans } from "@/fonts";

const BannerText = () => {
  return (
    <Box>
      <Typography
        className={openSans.className}
        sx={{
          fontSize: {
            xs: "36px",
            sm: "40px",
            md: "48px",
            lg: "64px"
          },
          textAlign: "center",      
          textTransform: "uppercase"
        }}
        variant="h2"
      >
        Ana Beatriz Winter
      </Typography>

      <Typography
        className={dosis.className}
        sx={{
          color: "#cab882",
          fontSize: {
            xs: "18px",
            sm: "20px",
            md: "24px",
            lg: "32px"
          },
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
