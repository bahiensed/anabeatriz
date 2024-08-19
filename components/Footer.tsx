import Link from "next/link";
import { Box, Stack } from "@mui/material";
import { ArrowCircleUpOutlined } from "@mui/icons-material";
import { dosis } from "@/fonts/Fonts";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        height: "150px",
        pt: 5,
        position: "relative",
        textAlign: "center",
      }}
    >
      <Link href="#banner">
        <ArrowCircleUpOutlined
          sx={{
            color: "#cab882",
            cursor: "pointer",
            width: "48px",
            height: "48px",
          }}
        />
      </Link>
      <Stack className={dosis.className} sx={{ mt: 2 }}>
        &#169; Dra. Ana Beatriz Winter, {year}.
      </Stack>
    </Box>
  );
};

export default Footer;
