import React from "react";
import { Button, Stack } from "@mui/material";
import { dosis } from "@/fonts/OpenSans";

const pages = [
  "Começar",
  "Sobre mim",
  "Contato",
  "Preço",
  "Reviews",
  "Galeria",
];

const Navigation = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        className={dosis.className}
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            /*   onClick={handleCloseNavMenu} */
            sx={{
              color: "black",
              display: "block",
              my: 2,
            }}
          >
            {page}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default Navigation;
