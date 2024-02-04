import { useEffect } from "react";
import AboutUs from "../components/home/AboutUs";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import ItalianImmersion from "../components/home/ItalianImmersion";
import ItalianLanguage from "../components/home/ItalianLanguage";
import MagazineFeatures from "../components/home/MagazineFeatures";
import OurProgram from "../components/home/OurProgram";
import Testimonials from "../components/home/Testimonials";
import WhatFamilies from "../components/home/WhatFamilies";
import RootLayout from "../layout/RootLayout";

const Home = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <RootLayout>
      <Hero />
      <ItalianLanguage />
      <AboutUs />
      <ItalianImmersion />
      <OurProgram />
      <MagazineFeatures />
      <WhatFamilies />
      <Testimonials />
      <Contact />
    </RootLayout>
  );
};

export default Home;
