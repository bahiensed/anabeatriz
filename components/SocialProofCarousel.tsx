"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HalfRating from "@/components/Rating";
import doctorImage from "@/public/images/doctorImage.png";
import { carouselData } from "@/constants";
import { openSans } from "@/fonts/OpenSans";
import { dosis } from "@/fonts/Dosis";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Keyboard } from "swiper/modules";
import Image from "next/image";

export default function SocialProofCarousel() {
  return (
    <Box>
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: "36px",
          fontWeight: 500,
          lineHeight: 1.1,
          pt: 14,
          pb: 10,
          textAlign: "center",
        }}
      >
        OPINIÕES DOS PACIENTES
      </Typography>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Keyboard]}
        className="mySwiper"
        style={{
          alignItems: "center",
          display: "block",
          backgroundColor: "#047b8b",
          height: "400px",
          textAlign: "center",
        }}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <FormatQuoteIcon
              sx={{
                color: "#fff",
                fontSize: "80px",
                mt: 5,
              }}
            />
            <Typography
              className={openSans.className}
              sx={{
                color: "#fff",
                fontSize: "18px",
                margin: "0 auto",
                mt: 6,
                lineHeight: 1.7,
                width: "50%",
              }}
            >
              {" "}
              {item.text}
            </Typography>
            <Stack
              alignItems="center"
              justifyContent="center"
              direction="row"
              spacing={2}
              sx={{ mt: 5 }}
            >
              <Image
                alt="Doctor Image"
                src={doctorImage}
                style={{
                  borderRadius: "50px",
                }}
              />
              <Stack direction="column" justifyContent="center">
                <HalfRating />
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
