import { Typography } from "@mui/material";
import { dosis } from "@/fonts/Dosis";
import { openSans } from "@/fonts/OpenSans";

const BannerText = () => {
  return (
    <>
      <Typography
        className={openSans.className}
        variant="h2"
        sx={{ color: "#fff", mt: 5 }}
      >
        ANA BEATRIZ WINTER
      </Typography>

      <Typography
        className={dosis.className}
        variant="h6"
        sx={{
          color: "#cab882",
          mt: 1,
          letterSpacing: "2px",
        }}
      >
        ENDOCRINOLOGIA & METABOLOGIA
      </Typography>
    </>
  );
};

export default BannerText;
