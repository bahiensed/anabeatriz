import Link from "next/link";
import { Button, Stack, styled } from "@mui/material";
import { dosis } from "@/fonts/Dosis";

const pages = [
  "Começar",
  "Sobre mim",
  "Contato",
  "Preço",
  "Reviews",
  "Galeria",
];

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

const Navigation = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        className={dosis.className}
        sx={{
          display: { xs: "none", md: "flex" },
          flexGrow: 1,
          mr: 12,
        }}
      >
        <Link href="#start">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Começar
          </BootstrapButton>
        </Link>
        <Link href="#aboutme">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Sobre mim
          </BootstrapButton>
        </Link>
        <Link href="#contact">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Contato
          </BootstrapButton>
        </Link>
        <Link href="#price">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Preço
          </BootstrapButton>
        </Link>
        <Link href="#reviews">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Reviews
          </BootstrapButton>
        </Link>
        <Link href="#galery">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Galeria
          </BootstrapButton>
        </Link>
      </Stack>
    </>
  );
};

export default Navigation;
