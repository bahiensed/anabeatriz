"use client";

import { Box, Stack } from "@mui/material";

import BannerArrowDown from "@/components/Banner/BannerArrowDown";
import BannerButtons from "@/components/Banner/BannerButtons";
import BannerImage from "@/components/Banner/BannerImage";
import BannerLocation from "@/components/Banner/BannerLocation";
import BannerText from "@/components/Banner/BannerText";
import NavBarMobile from "@/components/NavBar/NavBarMobile";

const Banner = () => {
  return (
    <>
      <Box
        id="banner"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#047b8b",
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
      >
        <Stack
          alignItems="center"
          direction="column"
          justifyContent="center"
          spacing={4}
        >
          <BannerImage />
          <BannerText />
          <BannerLocation />
          <BannerButtons />
          <Box sx={{ display: { xs: "none", md: "flex"}}}>
            <BannerArrowDown />
          </Box>
        </Stack>
      </Box>

      <Box id="start" sx={{ display: { xs: "flex", md: "none" }}}>
        <NavBarMobile />
      </Box>
    </>
  );
};

export default Banner;
