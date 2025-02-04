import React from "react";
import "./App.css";
import "./Carousel.css";
import "./assets/FakeStore.png";
import "./assets/CRUD.png";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";

function App() {
  const images = [
    {
      src: require("./assets/FakeStore.png"),
      link: "https://geanvillamar.github.io/StoreApp.github.io/",
      title: "Fake Store Aplication",
    },
    {
      src: require("./assets/CRUD.png"),
      link: "https://geanvillamar.github.io/crudUser/",
      title: "CRUD User",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <h1 className="title-section">Skills</h1>
        <Skills />
      </section>
      <section id="projects">
        <header className="project-header">
          <h1>Projects</h1>
        </header>
        <main>
          <Carousel images={images} />
        </main>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
