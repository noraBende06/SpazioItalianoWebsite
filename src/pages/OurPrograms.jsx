import { useEffect } from "react";
import AfterSchoolProgram from "../components/ourprograms/AfterSchoolProgram";
import EveningProgram from "../components/ourprograms/EveningProgram";
import Hero from "../components/ourprograms/Hero";
import MorningProgram from "../components/ourprograms/MorningProgram";
import RootLayout from "../layout/RootLayout";

const OurPrograms = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <RootLayout>
      <div className="w-full max-w-[82%] mx-auto lg:mt-[100px] mt-[40px]">
        <Hero />
        <MorningProgram />
        <AfterSchoolProgram />
        <EveningProgram />
      </div>
    </RootLayout>
  );
};

export default OurPrograms;
