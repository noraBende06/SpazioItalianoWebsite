import { useEffect } from "react";
import AboutUs from "../components/whoweare/AboutUs";
import Hero from "../components/whoweare/Hero";
import RootLayout from "../layout/RootLayout";

const WhoWeAre = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <RootLayout>
      <Hero />
      <AboutUs />
    </RootLayout>
  );
};

export default WhoWeAre;
