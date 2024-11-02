import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavigationMenu";
import HomeSection from "@/components/HomeSection";
// import EducationalSection from "@/components/EducationalSection";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Carousel />
      <HomeSection/>
      {/* <EducationalSection/> */}
    </div>
  );
}
