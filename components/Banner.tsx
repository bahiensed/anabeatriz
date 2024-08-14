"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import BannerButtonContato from "@/components/BannerButtonContato";
import BannerButtonVisita from "@/components/BannerButtonVisita";
import BannerText from "@/components/BannerText";
import anabeatriz from "@/public/images/anabeatriz.jpg";
import { ArrowCircleDown, Place } from "@mui/icons-material";
import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box
      id="banner"
      sx={{
        backgroundColor: "#047b8b",
        height: "650px",
        width: "100%",
      }}
    >
      <Stack id="start" sx={{ alignItems: "center" }}>
        <Image
          alt="logo"
          src={anabeatriz}
          style={{
            border: "2.5px solid white",
            borderRadius: "50%",
            height: "220px",
            marginTop: "65px",
            width: "220px",
          }}
        />
        <BannerText />
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 3 }}
        >
          <Place sx={{ color: "#fff" }} />
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
          spacing={4}
          sx={{ mt: 3 }}
        >
          <BannerButtonVisita />
          <Stack direction="column" justifyContent="center">
            <BannerButtonContato />
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems="center" justifyContent="center" sx={{mt:2}}>
        <Link href="#menu">
          <ArrowCircleDown
            onClick={toggleMenu}
            sx={{
              background: "none",
              backgroundColor: "none",
              color: "#cab882",
              cursor: "pointer",
              width: "48px",
              height: "48px",
            }}
          />
        </Link>
      </Stack>
    </Box>
  );
};

export default Banner;
