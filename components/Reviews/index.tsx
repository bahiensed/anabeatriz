"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Box, Rating, Stack, Typography } from "@mui/material";

//import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import required modules
import { Navigation, Keyboard } from "swiper/modules";
import { FormatQuote } from "@mui/icons-material";
import { reviews } from "@/constants";

export default function Reviews() {
  return (
    <>
      <Box
        id="reviews"
        sx={{
          color: "#343434",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Dosis, sans-serif",
            fontSize: { xs: '32px', md: '42px' },
            fontWeight: 500,
            letterSpacing: 2,
            py: 6,
            textTransform: 'uppercase'
          }}
        >
          Opinião dos Pacientes
        </Typography>
      </Box>

      <Box>
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
            display: "block",
            backgroundColor: "#047b8b",
            height: "60vh",
            textAlign: "center",
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.patient}
              style={{
                display: "flex",  // Use flexbox
                flexDirection: "column",  // Stack elements vertically
                justifyContent: "center",  // Center all content vertically
                alignItems: "center",  // Center all content horizontally
                height: "100%",  // Take up the full height of the Swiper container
              }}            
            >
              <FormatQuote
                sx={{
                  color: "#fff",
                  fontSize: { xs: "48px", md: "64px" },
                }}
              />

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "openSans, sans-serif",
                  fontSize: { xs: "16px", md: "20px" },
                  margin: "32px auto 28px auto",
                  width: {xs:"75%", md: "64%"}
                }}
              >
                {review.content}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >

                <Image
                  alt={review.patient}
                  src={review.profile}
                  style={{
                    borderRadius: "50%",
                  }}
                  width={64}
                  height={64}
                />

                <Stack
                  direction="column"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "openSans, sans-serif",
                      fontSize: { xs: "16px", md: "18px" },
                    }}
                  >
                    {review.patient}
                  </Typography>

                  <Rating value={5} readOnly />
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
