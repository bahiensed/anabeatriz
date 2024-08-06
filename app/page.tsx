import AboutMe from "@/components/AboutMe";
import Appointment from "@/components/Appointment";
import NavBar from "@/components/NavBar";
import Price from "@/components/Price";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Appointment />
      <Price />
      <SocialProof />
    </div>
  );
}
