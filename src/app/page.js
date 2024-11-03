
import HomePage from "@/components/HomePages/HomePage";
import NavBar from "@/components/NavigationMenu";

// import EducationalSection from "@/components/EducationalSection";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <HomePage/>
      {/* <EducationalSection/> */}
    </div>
  );
}
