import AboutMe from "@/components/AboutMe";
import Appointment from "@/components/Appointment";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Appointment />
    </div>
  );
}
