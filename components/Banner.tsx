import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import BannerText from "@/components/BannerText";
import PlaceIcon from "@mui/icons-material/Place";
import BannerButtonVisita from "@/components/BannerButtonVisita";
import BannerButtonContato from "./BannerButtonContato";
import logo from "@/public/images/logo.png";

const Banner = () => {
  return (
    <Box
      id="banner"
      sx={{ backgroundColor: "#047b8b", width: "100%", height: "600px" }}
    >
      <Stack sx={{ alignItems: "center" }}>
        <Image
          alt="logo"
          src={logo}
          style={{
            border: "5px solid white",
            borderRadius: "100px",
            marginTop: "80px",
            width: "200px",
            height: "200px",
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
            <Typography sx={{ color: "#fff", fontWeight: 700 }}>
              PETRÓPOLIS
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 3 }}
        >
          <BannerButtonVisita />
          <Stack direction="column" justifyContent="center"
          sx={{
            pt:4
          }}
          >
            <BannerButtonContato />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Banner;
