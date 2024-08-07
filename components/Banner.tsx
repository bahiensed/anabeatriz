import Image from "next/image";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import BannerButtonContato from "@/components/BannerButtonContato";
import BannerButtonVisita from "@/components/BannerButtonVisita";
import BannerText from "@/components/BannerText";
import PlaceIcon from "@mui/icons-material/Place";
import anabeatriz from "@/public/images/anabeatriz.jpg";

const Banner = () => {
  return (
    <Box
      id="banner"
      sx={{ backgroundColor: "#047b8b", width: "100%", height: "600px" }}
    >
      <Stack id="start" sx={{ alignItems: "center" }}>
        <Image
          alt="logo"
          src={anabeatriz}
          style={{
            border: "5px solid white",
            borderRadius: "100px",
            height: "200px",
            marginTop: "80px",
            width: "200px",
          }}
        />
        <BannerText />
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 2 }}
        >
          <PlaceIcon sx={{ color: "#fff" }} />
          <Stack direction="column" justifyContent="center">
            <Link href="#map">
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                PETRÓPOLIS
              </Typography>
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 3 }}
        >
          <BannerButtonVisita />
          <Stack direction="column" justifyContent="center" sx={{ pt: 4 }}>
            <BannerButtonContato />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Banner;
