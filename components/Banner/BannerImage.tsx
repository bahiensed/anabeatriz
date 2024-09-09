import Image from 'next/image'
import { Box } from '@mui/material';
import AnaBeatriz from "@/public/images/anabeatriz.jpg";

const BannerImage = () => {
  return (
    <Box
      sx={{
        border: "3.2px solid white",
        borderRadius: "50%",
        overflow: "hidden",
        width: { xs: "160px", md: "180px", lg: "200px" },
        height: { xs: "160px", md: "180px", lg: "200px" },
       }}
    >
      <Image
        alt="Ana Beatriz"
        src={AnaBeatriz}
        layout="responsive"
        width={210}
        height={210}
      />
    </Box>
  )
}

export default BannerImage
