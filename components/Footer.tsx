import Link from "next/link";
import { Box, Stack } from "@mui/material";
import { ArrowCircleUpOutlined } from "@mui/icons-material";

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
      <Stack sx={{ mt: 3 }}>&#169;{year}</Stack>
    </Box>
  );
};

export default Footer;
