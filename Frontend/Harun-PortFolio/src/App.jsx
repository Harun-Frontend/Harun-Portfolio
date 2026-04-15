import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import ProjectsPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";


const App = () => {
  
  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Navbar />

      <header id="home" className="h-screen snap-start scroll-mt-24">
        <Hero />
      </header>

      <main>
        <section id="about" className="h-screen snap-start scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="h-screen snap-start scroll-mt-24">
          <Skills />
        </section>

        <section id="projects" className="h-screen snap-start scroll-mt-24 flex items-center justify-center">
        <ProjectsPage />
        </section>
    </main>

  <footer>
    <section id="contact" className="h-screen w-full snap-start scroll-mt-24 flex items-center justify-center">
          <ContactPage />
        </section>
  </footer>
    </div>
  );
};

export default App;