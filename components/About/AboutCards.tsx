"use client";

import Image from "next/image";
import Link from "next/link";
import { Masonry } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { CheckBoxOutlined, Instagram, LinkedIn } from "@mui/icons-material";
import { cards } from "@/constants";

export default function MasonryWithVariableHeightItems() {
  return (
    <Box
      sx={{
        maxWidth: 1280, //use maxWidth instead of fixed width
        width: "100%"
      }}
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3, xl: 4 }} spacing={3}>
        {cards.map((card) => (
          <Paper key={card.title} sx={{ p: 4 }}>

            <Typography
              sx={{
                color: "#cab882",
                textAlign:"center"
              }}
            >
              <card.icon sx={{ fontSize: 48 }} />
            </Typography>

            <Typography
              sx={{
                color: "#343434",
                fontFamily: "Dosis, sans-serif",
                fontSize: "20px",
                fontWeight: 500,
                textAlign: "center",
                textTransform: "uppercase",
                p: 2,
              }}
            >
              {card.title}
            </Typography>

            {card.content.map((text) => (
              <>
                <Typography
                  sx={{
                    color: "#343434",
                    fontFamily: "openSans, sans-serif",
                    lineHeight: 1.6,
                    pb: 2
                  }}
                >
                  <CheckBoxOutlined sx={{ color: "#43aae6", mr: 0.4, verticalAlign: "top" }}/>
                  {text}
                </Typography>
              </>
            ))}

            {card.social && (
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  justifyContent: "center",
                }}
              >
                <Link href="http://lattes.cnpq.br/1395223223729745" target="_blank">
                  <Image alt="Currículo Lattes" src="/images/lattes.png" width={32} height={32} />
                </Link>

                <Link href="https://www.instagram.com/anabeatrizwinter/" target="_blank">
                  <Instagram
                    sx={{
                      color: "#4f86ac",
                      fontSize: { xs: "28px", md: "38px" },
                    }}
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/anabeatrizwintertavares/" target="_blank">
                  <LinkedIn
                    sx={{
                      color: "#008bc2",
                      fontSize: { xs: "28px", md: "38px" },
                    }}
                  />
                </Link>
              </Box>
            )}

          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
