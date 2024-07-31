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
          mr:12
        }}
      >
        {pages.map((page) => (
          <BootstrapButton
            key={page}
            className={dosis.className}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "black",
              display: "block",
              fontSize: "12px",
              fontWeight: 600,

              my: 2,
            }}
          >
            {page}
          </BootstrapButton>
        ))}
      </Stack>
    </>
  );
};

export default Navigation;
