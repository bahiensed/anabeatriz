import { Stack, Typography } from "@mui/material";
import { dosis, openSans } from "@/fonts";

const BannerText = () => {
  return (
    <>
      {/* Mobile */}
      <Stack sx={{ display: { xs: "block", md: "none" } }}>
        <Typography
          className={openSans.className}
          sx={{
            color: "#fff",
            fontSize: "36px",
            mt: 5,
          }}
        >
          ANA BEATRIZ WINTER
        </Typography>

        <Typography
          className={dosis.className}
          sx={{
            color: "#cab882",
            fontSize: "20px",
            letterSpacing: "2px",
            mt: 1,
            textAlign: "center",
          }}
        >
          ENDOCRINOLOGIA & METABOLOGIA
        </Typography>
      </Stack>

      {/* Desktop */}
      <Stack sx={{ display: { xs: "none", md: "block" } }}>
        <Typography
          className={openSans.className}
          variant="h2"
          sx={{
            color: "#fff",

            mt: 5,
          }}
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
            textAlign: "center",
          }}
        >
          ENDOCRINOLOGIA & METABOLOGIA
        </Typography>
      </Stack>
    </>
  );
};

export default BannerText;
