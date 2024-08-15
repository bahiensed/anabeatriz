"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import {
  Accordion,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { dosis } from "@/fonts/Dosis";
import { openSans } from "@/fonts/OpenSans";
import { cardsData } from "@/constants";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: theme.palette.text.secondary,
}));

export default function MasonryWithVariableHeightItems() {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        m: "0 auto",
        width: 1150,
        minHeight: 377,
      }}
    >
      <Masonry columns={3} spacing={4}>
        {cardsData.map((item, i) => (
          <Paper key={i} elevation={0} sx={{ pb: 4 }}>
            <Container>
              <Stack
                sx={{
                  alignItems: "center",
                  color: "#cab882",
                  height: "36px",
                  justifyContent: "center",
                  m: "0 auto",
                  pb: 6,
                  pt: 8,
                }}
              >
                <item.icon sx={{ fontSize: "50px" }} />
              </Stack>

              <Typography
                className={dosis.className}
                sx={{
                  color: "#434343",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "0.05rem",
                  textAlign: "center",
                  textTransform: "uppercase",
                  pb: 4,
                }}
              >
                {item.title}
              </Typography>

              {item.content.map((text, j) => (
                <Typography
                  key={j}
                  className={openSans.className}
                  sx={{
                    color: "#434343",
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: 1.4,
                    mb: 1.5,
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Container>
          </Paper>
        ))}
      </Masonry>
      <Stack id="appointment"></Stack>
    </Box>
  );
}
