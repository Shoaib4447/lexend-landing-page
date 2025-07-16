import React from "react";
import "./styles/main.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Preview from "./components/Preview/Preview";
import Process from "./components/Process/Process";
import Feature from "./components/Features/Feature";
import About from "./components/About/About";
import MoreFeatures from "./components/MoreFeatures/MoreFeatures";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Preview />
      <Process />
      <Feature />
      <About />
      <MoreFeatures />
    </>
  );
};

export default App;
