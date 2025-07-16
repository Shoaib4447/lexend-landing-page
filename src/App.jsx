import React from "react";
import "./styles/main.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Preview from "./components/Preview/Preview";
import Process from "./components/Process/Process";
import Feature from "./components/Features/Feature";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Preview />
      <Process />
      <Feature />
    </>
  );
};

export default App;
