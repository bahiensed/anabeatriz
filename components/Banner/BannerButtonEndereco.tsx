
import { Box, Button, Stack, styled } from "@mui/material";
import { dosis } from "@/fonts";


const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#78acb1",

  },
});

const BannerButtonEndereco = () => {
  return (
    <Box>

      <BootstrapButton
        className={dosis.className}
        href="#map"
        sx={{
 
          border: "2px solid #fff",
          borderRadius: "25px",
          color: "#fff",
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
