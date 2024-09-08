import Link from "next/link";
import { Box, Typography } from '@mui/material';
import { FavoriteBorder, Web } from '@mui/icons-material';
import { dosis, openSans } from '@/fonts';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Box
        className={openSans.className} 
        sx={{
          color: "#333",
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
        <Typography className={dosis.className}>
          <Web sx={{ color:"#333", fontSize: "small", mt: 0.9, verticalAlign: "top" }} /> made with <FavoriteBorder sx={{ color: "red", fontSize: "small", mt: 0.9, verticalAlign: "top" }} /> by <Link href="https://bahien.se" target="_blank" style={{ textDecoration: "underline" }}>bahien.se</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
