import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialSidebar from "./components/SocialSidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Contact, Footer } from "./components/ContactFooter";

function App() {
  return (
    <div className="bg-primary-bg min-h-screen">
      <Navbar />
      <SocialSidebar />
      <main className="md:px-14 lg:px-18">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
