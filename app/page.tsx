import AboutMe from "@/components/AboutMe";
import Appointment from "@/components/Appointment";
import BannerAppointment from "@/components/BannerAppointment";
import Galery from "@/components/Galery";
import NavBar from "@/components/NavBar";
import Price from "@/components/Price";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Appointment />
      <SocialProof />
      <Galery />
      <BannerAppointment />
    </div>
  );
}
