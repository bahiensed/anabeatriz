import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Place } from '@mui/icons-material'

const BannerLocation = () => {
  return (
    <Box
      display= "flex"
      sx={{ alignItems: "center" }}
    >

      <Place sx={{ color: "#fff", marginRight: "4px" }} />

      <Link href="#map">
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Dosis, sans-serif",
            fontWeight: 600,
            textTransform: "uppercase"
          }}
        >
          Petrópolis
        </Typography>
      </Link>
    </Box>
  )
}

export default BannerLocation
