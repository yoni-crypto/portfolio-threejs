import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="App">
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
    </main>
    <Footer/>

    </div>
  );
};

export default App;
