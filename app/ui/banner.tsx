import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/app/assets/logo.jpg";
import BannerTypography from "@/app/ui/bannerTypography";
import PlaceIcon from "@mui/icons-material/Place";
import ButtonBanner from "@/app/ui/buttonBanner";
import ButtonBanner2 from "./buttonBanner2";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "#047b8b", width: "100%", height: "600px" }}>
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
        <BannerTypography />
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
        <Stack direction="row" justifyContent="center" spacing={1} sx={{mt:3}}>
          <ButtonBanner />
          <Stack direction="column" justifyContent="center">
            <ButtonBanner2 />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Banner;
