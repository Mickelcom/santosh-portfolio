import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";


export default function App() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Footer/>
    </div>
  );
}
