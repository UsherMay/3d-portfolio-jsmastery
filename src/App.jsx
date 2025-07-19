import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";

function App (){
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
    </>
    // <main>
    //   <div>
    //     <h1 className="text-3xl">Welcome to my 3D Portfolio</h1>
    //   </div>
    // </main>
  )
}

export default App;
