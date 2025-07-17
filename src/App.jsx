import "./styles/main.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Preview from "./components/Preview/Preview";
import Process from "./components/Process/Process";
import Feature from "./components/Features/Feature";
import About from "./components/About/About";
import MoreFeatures from "./components/MoreFeatures/MoreFeatures";
import Pricing from "./components/Pricing/Pricing";
import Reviews from "./components/Reviews/Reviews";
import Faqs from "./components/Faqs/Faqs";
import Companies from "./components/Companies/Companies";

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
      <Pricing />
      <Reviews />
      <Faqs />
      <Companies />
    </>
  );
};

export default App;
