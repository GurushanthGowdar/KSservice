import React from "react";
import Header from "../../components/header/Header";
import About from "../about/About";
import Service from "../service/Service";
import Career from "../career/Career";
import Training from "../training/Training";
import Contact from "../contact/Contact";
import Hero from "../../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Training />
      <Career />
      <Contact />
    </div >
  );
};

export default Home;
