import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

function App (){
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
    </>
    // <main>
    //   <div>
    //     <h1 className="text-3xl">Welcome to my 3D Portfolio</h1>
    //   </div>
    // </main>
  )
}

export default App;
