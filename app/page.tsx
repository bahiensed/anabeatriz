import AboutMe from "@/components/AboutMe";
import Appointment from "@/components/Appointment";
import BannerAppointment from "@/components/BannerAppointment";
import Form from "@/components/Form";
import Galery from "@/components/Galery";
import NavBar from "@/components/NavBar";
import SocialProofCarousel from "../components/SocialProofCarousel";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Appointment />
      <SocialProofCarousel />
      <Galery />
      <Form />
    </div>
  );
}
