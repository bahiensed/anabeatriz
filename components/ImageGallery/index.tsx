"use client";

import { Box, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { images } from "@/constants";
import { dosis } from "@/fonts";

export default function Gallery() {
  return (
    <>
    <Box
      id="gallery"
      sx={{
        alignItems: "center",
        color: "#343434",
        justifyContent: "center",
        m: "0 auto",
        px: { xs: 4, md: 16 },
        py: 6,
        textAlign: "center",
        width: { xs: "100%", md: "90%", xl: "80%" },

      }}
    >
      <Typography
        className={dosis.className}
        sx={{
          fontSize: { xs: '32px', md: '42px' },
          fontWeight: 500,
          letterSpacing: 2,
          pb: 8,
          textTransform: 'uppercase'
        }}
      >
        Galeria de Fotos
      </Typography>

      <Masonry columns={{ xs: 2, md: 3, xl: 4 }} spacing={2}>
        {images.map((image) => (
          <div key={image.alt}>
            <img
              srcSet={`${image.url}?w=162&auto=format&dpr=2 2x`}
              src={`${image.url}?w=162&auto=format`}
              alt={image.alt}
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
    </>
  );
}
