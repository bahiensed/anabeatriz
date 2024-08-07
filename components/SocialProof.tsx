"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import { styled, Paper, Typography, Container, Stack } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import type {} from "@mui/lab/themeAugmentation";
import "@mui/lab/themeAugmentation";
import HalfRating from "@/components/Rating";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import doctorImage from "@/public/images/doctorImage.png";
import { dosis } from "@/fonts/Dosis";
import { openSans } from "@/fonts/OpenSans";

const heights = [300, 300, 300, 250, 300, 250, 300, 250, 300, 250];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#eee",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SocialProof() {
  return (
    <Box
      id="reviews"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        m: "0 auto",
        mb: 10,
        minHeight: 377,
        width: "100%",
      }}
    >
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: "36px",
          fontWeight: 500,
          lineHeight: 1.1,
          pb: 10,
          pt: 10,
          textAlign: "center",
        }}
      >
        OPINIÕES DOS PACIENTES
      </Typography>
      <Masonry
        sx={{
          alignItems: "center",
          justifyContent: "center",
          m: "0 auto",
          width: "1100px",
        }}
        columns={2}
        spacing={3}
      >
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            <Container
              sx={{
                mt: 5,
              }}
            >
              <Stack direction="row">
                <Stack direction="column">
                  <FormatQuoteIcon />
                </Stack>
                <Typography
                  className={openSans.className}
                  sx={{
                    color: "#333",
                    fontSize: "18px",
                    lineHeight: 1.7,
                    position: "relative",
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  Lorem ipsum dolor sit amet. Sit quis nemo eos praesentium
                  internos sed impedit obcaecati et nobis magnam.{" "}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Image
                  alt="Doctor Image"
                  src={doctorImage}
                  style={{
                    borderRadius: "50px",
                    marginTop: 25,
                  }}
                />
                <Stack direction="column" justifyContent="center">
                  <HalfRating />
                </Stack>
              </Stack>
            </Container>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
