import readingtime from "../../assets/images/reading_time.png";
import playingtime from "../../assets/images/playtime.2.png";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="w-full max-w-[82%] mx-auto lg:mt-[100px] mt-[40px]">
      <p className="lg:text-[35px] md:text-[25px] text-[18px]">
        Ms. Ilaria Giannini, a native of Rome, has been providing language
        instruction in San Francisco for the past twenty years. Ilaria has built
        a reputation in the local Italian-American community as a very
        effective, caring educator, possessing a unique ability to teach her
        language and culture to adults and children of all ages.
      </p>
      <div className="lg:mt-[80px] mt-[40px] bg-[#CEDACC] w-full h-full p-8 lg:p-[60px]">
        <img src={readingtime} alt="" />
      </div>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[60px] mt-[40px]">
        She started her teaching career at a progressive Italian Immersion
        program in the City, where she had been involved since its inception in
        2001. Soon after Ilaria started an after school program based in the
        Presidio National Park titled Progetto Arcobaleno while working at La
        Scuola di Lingua e Cultura Italiana located in South San Francisco,
        (founded in 1970). <br /> Ilaria has also developed and directed
        afternoon Italian language programs at the Convent of the Sacred Heart/
        Stuart Hall; Live Oak elementary school and the French American
        International School.
      </p>
      <div className="lg:mt-[80px] mt-[40px] bg-[#CEDACC] w-full h-full p-8 lg:p-[60px]">
        <img src={playingtime} alt="" />
      </div>
      <div className="lg:mt-[120px] mt-[60px]">
        <h1 className="lg:text-[40px] md:text-[30px] text-[20px]">
          Where can You find us?
        </h1>
        <p className="lg:text-[35px] md:text-[25px] text-[18px] mt-[40px]">
          We are centrally located in San Francisco’s North Beach neighborhood.
          Our beautiful space is a well thought out environment where children
          and their families feel welcome immediately upon arrival.
        </p>
        <div className="w-full flex justify-center ">
          <Link
            className="button-effect px-[16px] py-[10px] flex justify-center text-[20px] mt-[41px] w-[190px] bg-[#EFD780] font-[600]  "
            to={"/contact-us"}
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
