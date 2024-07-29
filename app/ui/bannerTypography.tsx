import { Typography } from "@mui/material";
import { dosis, openSans } from "@/app/fonts/font";

const BannerTypography = () => {
  return (
    <>
      <Typography
        className={openSans.className}
        variant="h2"
        sx={{ color: "#fff", mt: 5 }}
      >
        Ana Beatriz Winter
      </Typography>

      <Typography
        className={dosis.className}
        variant="h6"
        sx={{ color: "#d1cec3", letterSpacing: "2px" }}
      >
        ENDOCRINOLOGIA & METABOLOGIA
      </Typography>
    </>
  );
};

export default BannerTypography;
