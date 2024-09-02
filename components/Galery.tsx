"use client";

import { Box, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { itemData } from "@/constants";
import { dosis } from "@/fonts";

export default function Galery() {
  return (
    <Box
      id="gallery"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        m: "0 auto",
        width: { xs: "100%", sm: 600, md: 900, lg: 1090 },
        minHeight: 829,
      }}
    >
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: { xs: "24px", sm: "30px", md: "36px" },
          fontWeight: 500,
          pt: { xs: 8, md: 14 },
          pb: { xs: 6, md: 10 },
          lineHeight: 1.1,
          textAlign: "center",
        }}
      >
        GALERIA
      </Typography>
      <Masonry sx={{ pl: 2 }} columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                border: "3px solid #fff",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
