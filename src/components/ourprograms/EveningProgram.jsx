import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import everyone from "../../assets/images/everyone_academic.png";
import tutti from "../../assets/images/tutti_spazio_academic.png";
import writing from "../../assets/images/writting_academic.png";
import outside from "../../assets/images/outside_academic.png";
import girls from "../../assets/images/2_girls_academic.png";
import bambini from "../../assets/images/bambini_grandi_academic.png";
import campo from "../../assets/images/campo_estivo_academic.png";
import campo2 from "../../assets/images/campo_estivo2_academic.png";
const EveningProgram = () => {
  const images = [
    everyone,
    tutti,
    writing,
    outside,
    girls,
    bambini,
    campo,
    campo2,
  ];
  return (
    <div className="lg:mt-[120px] mt-[40px]">
      <h1 className="lg:text-[40px] md:text-[30px] text-[20px]">
        Academic Program
      </h1>
      {/* <p className="flex gap-x-[20px] md:w-[70%] w-[90%] lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        Age:{" "}
        <p>
          9 months and 3 years must be with parent or caregiver 3-5 years old
        </p>
      </p> */}
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        For the language courses we utilize creative writing, grammar and
        vocabulary games to learn Italian. Each child will keep their own
        Italian text book throughout the semester as way to track progress. To
        stimulate the children and help them better interact with themselves and
        each other we also play Italian games such as nascondino, rubabandiera,
        campana, caccia al tesoro and tombola. Engaging in interactive play
        helps the children learn the language and culture naturally.
      </p>
      <div className="w-full  lg:mt-[100px] mt-[40px]">
        <Carousel images={images} />
      </div>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        <span className="font-extrabold">Teen class:</span>
        <br /> An exciting curriculum in the after school classes allows
        children the opportunity to acquire Italian linguistic competence and
        most importantly, a deep appreciation of Italian and European culture.
        The children will be able to explore and experiment through various
        workshops and academic grammar programs while learning together and
        speaking to each other in Italian.
      </p>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        We offer three levels of grammar instructions: beginner, intermediate
        and advanced.
      </p>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        <span className="font-bold">Adult classes:</span> <br /> We are
        collaborating with Istituto Italiano Scuola for Adult classes. Please
        inquire directly to IIS for a 15% discount for Spazio Italiano’s
        families. They are providing a variety of adult events, workshops and
        Italian language courses. Please visit{" "}
        <a className="text-blue-600 underline" href="https://sfiis.org">
          Istituto Italiano Scuola
        </a>{" "}
        for additional information.
      </p>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        Please contact us for current times and offerings.
      </p>
      <div className="w-full flex justify-center">
        <Link
          className="button-effect px-[16px] py-[10px] flex justify-center text-[20px] mt-[71px] w-[190px] bg-[#EFD780] font-[600]  "
          to={"/contact-us"}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default EveningProgram;
