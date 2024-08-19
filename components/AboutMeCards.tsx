"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  CheckBoxOutlined,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material"; // Import CheckBox icon

import { dosis, openSans } from "@/fonts";
import { cardsData } from "@/constants";

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
                <Stack
                  key={j}
                  direction="row"
                  alignItems="flex-start" // Align items to the top
                  spacing={1}
                  sx={{ mb: 2 }}
                >
                  {/* Render CheckBox only if item has check property */}
                  {item.check && (
                    <CheckBoxOutlined
                      sx={{
                        color: "#43aae6",
                        fontSize: "24px",
                      }}
                    />
                  )}

                  <Typography
                    className={openSans.className}
                    sx={{
                      color: "#434343",
                      fontSize: "16px",
                      fontWeight: 300,
                      lineHeight: 1.4,
                      flex: 1, // Allow text to take up remaining space
                      wordWrap: "break-word", // Ensure text wraps within container
                    }}
                  >
                    {text}
                  </Typography>
                </Stack>
              ))}
              {item.social && (
                <>
                  <Facebook
                    sx={{
                      color: "#213553",
                      fontSize: "38px",
                    }}
                  />
                  <Instagram
                    sx={{
                      color: "#4f86ac",
                      fontSize: "38px",
                    }}
                  />
                  <LinkedIn
                    sx={{
                      color: "#008bc2",
                      fontSize: "38px",
                    }}
                  />
                </>
              )}
            </Container>
          </Paper>
        ))}
      </Masonry>
      <Stack id="appointment"></Stack>
    </Box>
  );
}
