import Link from "next/link";
import { Box, Typography } from '@mui/material';
import { FavoriteBorder, Web } from '@mui/icons-material';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Box
        sx={{
          color: "#333",
          fontFamily: "openSans, sans-serif",
          height: "72px",
          paddingTop: "58px",
          textAlign: "center",
        }}
      >
          &#169; Dr.ª Ana Beatriz Winter, {year}.<br />
      </Box>

      <Box
        sx={{
          color: "#777",
          height: "64px",
          pt: "16px",
          pr: {xs: 0, md: "48px"},
          textAlign: {xs:"center", md: "right"},
        }}
      >
        <Typography>
          <Web sx={{ color:"#333", fontFamily: "Dosis, sans-serif", fontSize: "small", mt: 0.9, verticalAlign: "top" }} /> made with <FavoriteBorder sx={{ color: "red", fontSize: "small", mt: 0.9, verticalAlign: "top" }} /> by <Link href="https://bahien.se" target="_blank" style={{ textDecoration: "underline" }}>bahien.se</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
