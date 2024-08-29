"use client";

import { Button, Stack, styled } from "@mui/material";
import { dosis } from "@/fonts";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
  },
});

const BannerButtonContato = () => {
  return (
    <>
{/* Mobile */}

<Stack sx={{ display: { xs: "block", md: "none" } }}>
      <BootstrapButton
        href="#appointment"
        className={dosis.className}
        sx={{
          border: "2px solid #fff",
          borderRadius: "28px",
          color: "#fff",
          fontWeight: 700,
          height: "58px",
          width: "380px",
        }}
      >
        NOSSO ENDEREÇO
      </BootstrapButton>
    </Stack>

    {/* Desktop */}
    <Stack sx={{ display: { xs: "none", md: "flex" } }}>
      <BootstrapButton
        href="#appointment"
        className={dosis.className}
        sx={{
          border: "2px solid #fff",
          borderRadius: "28px",
          color: "#fff",
          fontWeight: 700,
          height: "58px",
          width: "200px",
        }}
      >
        NOSSO ENDEREÇO
      </BootstrapButton>
    </Stack>
    </>
  );
};

export default BannerButtonContato;
