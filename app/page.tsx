import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/ImageGallery";
import Map from "@/components/Map";
import NavBar from "@/components/NavBar";
import Review from "@/components/Reviews";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Banner />

      <Box sx={{ mt:"100vh" }}>
        <NavBar />
      </Box>
            
      <About />
      <Map />
      <Review />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
