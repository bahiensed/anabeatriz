import { Avatar, Box, Stack } from "@mui/material";
import Image from "next/image";
import logo from "@/app/assets/logo.jpg";
import image from "@/app/assets/image.png";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#047b8b", width: "100%", height: "500px" }}>
     
      <Stack sx={{ alignItems: "center" }}>
      
        <Image
          alt="logo"
          src={logo}
          style={{
            border: "5px solid white",
            borderRadius: "100px",
            marginTop: "140px",
            width: "200px",
            height: "200px",
            position: "absolute",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Header;
