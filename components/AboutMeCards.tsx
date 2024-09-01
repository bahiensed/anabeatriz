"use client";

import * as React from "react";
import Masonry from "@mui/lab/Masonry";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  CheckBoxOutlined,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material"; // Import CheckBox icon

import { cardsData } from "@/constants";
import { dosis, openSans } from "@/fonts";

export default function MasonryWithVariableHeightItems() {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        m: "0 auto",
        maxWidth: 1150, // Use maxWidth instead of fixed width
        width: "100%", // Ensure the Box takes up the full width of its container
      }}
    >
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
          {cardsData.map((item, i) => (
            <Paper key={i} elevation={0} sx={{ pb: { xs: 2, md: 4 } }}>
              <Container>
                <Stack
                  sx={{
                    alignItems: "center",
                    color: "#cab882",
                    height: "36px",
                    justifyContent: "center",
                    m: "0 auto",
                    pb: { xs: 4, md: 6 },
                    pt: { xs: 6, md: 8 },
                  }}
                >
                  <item.icon sx={{ fontSize: { xs: "30px", md: "50px" } }} />
                </Stack>

                <Typography
                  className={dosis.className}
                  sx={{
                    color: "#434343",
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: "0.05rem",
                    textAlign: "center",
                    textTransform: "uppercase",
                    pb: { xs: 2, md: 4 },
                  }}
                >
                  {item.title}
                </Typography>

                {item.content.map((text, j) => (
                  <Stack
                    key={j}
                    direction="row"
                    alignItems="flex-start"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    {item.check && (
                      <CheckBoxOutlined
                        sx={{
                          color: "#43aae6",
                          fontSize: { xs: "18px", md: "24px" },
                        }}
                      />
                    )}

                    <Typography
                      className={openSans.className}
                      sx={{
                        color: "#434343",
                        fontSize: { xs: "14px", md: "16px" },
                        fontWeight: 300,
                        lineHeight: 1.4,
                        flex: 1,
                        wordWrap: "break-word",
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
                        fontSize: { xs: "28px", md: "38px" },
                      }}
                    />
                    <Instagram
                      sx={{
                        color: "#4f86ac",
                        fontSize: { xs: "28px", md: "38px" },
                      }}
                    />
                    <LinkedIn
                      sx={{
                        color: "#008bc2",
                        fontSize: { xs: "28px", md: "38px" },
                      }}
                    />
                  </>
                )}
              </Container>
            </Paper>
          ))}
        </Masonry>
        <Stack id="appointment"></Stack>
      </Stack>
      
    </Box>
  );
}
