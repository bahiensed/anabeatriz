import AboutMe from "@/components/AboutMe";
import Appointment from "@/components/Appointment";
import BannerAppointment from "@/components/BannerAppointment";
import Form from "@/components/Form";
import Galery from "@/components/Galery";
import NavBar from "@/components/NavBar";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Appointment />
      <SocialProof />
      <Galery />
      <Form />
      <BannerAppointment />
    </div>
  );
}
