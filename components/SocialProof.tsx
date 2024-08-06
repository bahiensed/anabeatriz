"use client";

import Box from "@mui/material/Box";
import { styled, Paper, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import type {} from "@mui/lab/themeAugmentation";
import "@mui/lab/themeAugmentation";
import { dosis } from "@/fonts/Dosis";

const heights = [200, 200, 200, 150, 200, 150, 200, 150, 200, 150];

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
      sx={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        m: "0 auto",
        mb: 10,
        width: "100%",
        minHeight: 377,
      }}
    >
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: "36px",
          fontWeight: 500,
          pt: 10,
          pb: 10,
          lineHeight: 1.1,
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
            <Typography
              sx={{
                float: "left",
              }}
            >
              Lorem ipsum dolor sit amet. Sit quis nemo eos praesentium internos
              sed impedit obcaecati et nobis magnam. In sapiente debitis et
              magni maxime ex deserunt fuga et voluptatem laborum. Id provident
              porro ea aliquam Quis sed nesciunt Quis et voluptas distinctio non
              quia numquam.{" "}
            </Typography>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
