import { Box } from '@mui/material';

import BannerButtonConsulta from '@/components/Banner/BannerButtonConsulta';
import BannerButtonEndereco from '@/components/Banner/BannerButtonEndereco';

const BannerButtons = () => {
  return (
    <Box
      display= "flex"
      sx={{
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row"
        },
        gap: 2,
        justifyContent: "center",
        mt: 2

      }}
    >
      <BannerButtonConsulta />
      <BannerButtonEndereco />
    </Box>
  );
};

export default BannerButtons;
