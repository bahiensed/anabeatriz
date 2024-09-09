import { Box, Button, styled } from "@mui/material";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",
  },
});

const BannerButtonEndereco = () => {
  return (
    <Box>
      <BootstrapButton
        href="#map"
        sx={{
          border: "2px solid #fff",
          borderRadius: "25px",
          color: "#fff",
          fontFamily: "Dosis, sans-serif",
          fontWeight: 600,
          textTransform: "uppercase",
          width: {xs: "256px", md: "200px"},
          height: "48px",
        }}
      >
        Nosso Endereço
      </BootstrapButton>
    </Box>
  );
};

export default BannerButtonEndereco;
