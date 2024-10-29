import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
// import EducationalSection from "@/components/EducationalSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Carousel />
      <HomeSection/>
      {/* <EducationalSection/> */}
    </div>
  );
}
