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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:text-primary-bg focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <SocialSidebar />
      <main id="main-content" className="md:px-14 lg:px-18">
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
