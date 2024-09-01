"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HalfRating from "@/components/Rating";
import doctorImage from "@/public/images/doctorImage.png";
import { carouselData } from "@/constants";
import { dosis, openSans } from "@/fonts";

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
          fontSize: { xs: "24px", sm: "30px", md: "36px" },
          fontWeight: 500,
          lineHeight: 1.1,
          pt: { xs: 8, md: 14 },
          pb: { xs: 6, md: 10 },
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
          height: "55vh",
          textAlign: "center",
        }}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <FormatQuoteIcon
              sx={{
                color: "#fff",
                fontSize: { xs: "60px", md: "80px" },
                mt: { xs: 3, md: 5 },
              }}
            />
            <Typography
              className={openSans.className}
              sx={{
                color: "#fff",
                fontSize: { xs: "16px", md: "18px" },
                margin: "0 auto",
                mt: { xs: 4, md: 6 },
                lineHeight: 1.7,
                width: { xs: "80%", md: "50%" },
              }}
            >
              {item.text}
            </Typography>
            <Stack
              alignItems="center"
              justifyContent="center"
              direction="row"
              spacing={2}
              sx={{ mt: { xs: 3, md: 5 } }}
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
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
     
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 30px;
        }
        .swiper-button-next {
          right: 130px;
        }
        .swiper-button-prev {
          left: 130px;
        }
        @media (max-width: 600px) {
          .swiper-button-next {
            right: 10px;
          }
          .swiper-button-prev {
            left: 10px;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .swiper-button-next {
            right: 50px;
          }
          .swiper-button-prev {
            left: 50px;
          }
        }
      `}</style>
    </Box>
  );
}
