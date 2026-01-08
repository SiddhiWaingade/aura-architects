import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";

import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/contact";
import Studio from "./pages/Studio";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studio" element={<Studio />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
