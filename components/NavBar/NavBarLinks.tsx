import Link from "next/link";

import { Box, Button, Stack, styled } from "@mui/material";

import { links } from "@/constants";
import { dosis } from "@/fonts";

const BootstrapButton = styled(Button)({
  "&:focus": {
    backgroundColor: "#cab882",
    color: "#fff",
    "&:hover": {
      color: "#fff",
    },
  },
  ":hover": {
    color: "#cab882",
  },
});

const NavBarLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}    
    >
      {links.map((link) => (
        <Link href={link.href} key={link.desc}>
          <BootstrapButton
            className={dosis.className}
            sx={{
              color: "#343434",
              fontSize: "16px",
              fontWeight: 600,
              mx: 1,
            }}
          >
            {link.desc}
          </BootstrapButton>
        </Link>
      ))}
    </Box>
  );
};

export default NavBarLinks;
