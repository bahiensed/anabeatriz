import AboutMe from "@/components/AboutMe";
import Appointment from "@/components/Appointment";
import NavBar from "@/components/NavBar";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Appointment />
      <Price />
    </div>
  );
}
