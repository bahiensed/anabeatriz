import Link from "next/link";
import { Button, Stack, styled } from "@mui/material";
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
        <Link href="#aboutme">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Sobre Mim
          </BootstrapButton>
        </Link>
        <Link href="#map">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Endereço
          </BootstrapButton>
        </Link>
        <Link href="#reviews">
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "14px",
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
              fontSize: "14px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Galeria
          </BootstrapButton>
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=24999882200"
          target="_blank"
        >
          <BootstrapButton
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "#333",
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Contato
          </BootstrapButton>
        </Link>
      </Stack>
    </>
  );
};

export default Navigation;
