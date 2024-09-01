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
import NavBarMobile from "./NavBarMobile";

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
        margin: 0,
        marginLeft: 0,
        height: "100vh",
        padding: 0,
        width: "100%",
      }}
    >
      {/* Mobile */}

      <Stack id="start" sx={{ display: { xs: "flex", md: "none" } }}>
        <NavBarMobile />
        <Stack sx={{ alignItems: "center" }}>
          <Image
            alt="logo"
            src={anabeatriz}
            style={{
              border: "2.5px solid white",
              borderRadius: "50%",
              height: "200px",
              marginTop: "40px",
              width: "200px",
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
          <Stack sx={{ mt: 3 }}>
            <BannerButtonVisita />
            <Stack sx={{ mt: 3 }}>
              <BannerButtonContato />
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Desktop */}
      <Stack
        id="start"
        sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}
      >
        <Image
          alt="logo"
          src={anabeatriz}
          style={{
            border: "2.5px solid white",
            borderRadius: "50%",
            height: "220px",
            marginTop: "50px",
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

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ ml: 4, mt: 3 }}
        >
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
      </Stack>
    </Box>
  );
};

export default Banner;
