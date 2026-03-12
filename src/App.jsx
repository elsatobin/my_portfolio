import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-[#0a192f] bg-blue-200 min-h-screen text-slate-900">
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;