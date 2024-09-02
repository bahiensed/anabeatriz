import AboutMe from "@/components/AboutMe";
import Appointment from "@/components/Appointment";
import BannerAppointment from "@/components/BannerAppointment";
import Form from "@/components/Form";
import Galery from "@/components/Galery";
import NavBar from "@/components/NavBar";
import SocialProofCarousel from "../components/SocialProofCarousel";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <Stack sx={{mt:"100vh"}}>
      <NavBar />
      </Stack>
      
      <AboutMe />
      <Appointment />
      <SocialProofCarousel />
      <Galery />
      <Form />
    </Stack>
  );
}
