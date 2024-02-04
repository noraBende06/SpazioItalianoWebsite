import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../../assets/images/intro.jpg";
import heroforphone from "../../assets/images/hero_4phone.png";
const Hero = () => {
  const ciaoVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Animation variants for "SPAZIO DI VITA, GIOCO E CULTURA"
  const spazioVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="w-full lg:h-[100vh] h-[80vh] relative lg:mt-[124px] mt-[124px]">
      <img
        src={hero}
        alt=""
        className="absolute lg:flex hidden h-full w-full object-cover  object-center"
      />
      <img
        src={heroforphone}
        alt=""
        className="absolute lg:hidden md:hidden flex h-full w-full object-cover object-center"
      />
      <img
        src={hero}
        alt=""
        className="absolute lg:hidden md:flex hidden h-full w-full object-cover object-center"
      />
      <div className="w-full flex h-full flex-col justify-center  items-center z-[999] absolute text-white">
        <motion.h1
          variants={ciaoVariants}
          initial="hidden"
          animate="visible"
          className="lg:text-[64px] md:text-[55px] text-[45px] lg:mb-[120px] mb-[40px]"
        >
          Ciao!
        </motion.h1>
        <motion.h2
          variants={spazioVariants}
          initial="hidden"
          animate="visible"
          className="lg:text-[60px] lg:mt-[20px] md:mt-[60px] mt-[40px] md:text-[52px] text-[32px] text-center"
        >
          SPAZIO DI VITA,GIOCO E CULTURA
        </motion.h2>
        <Link
          className="button-effect px-[16px] py-[10px] lg:mb-[120px] flex justify-center text-[20px] text-black mt-[71px] w-[190px] bg-[#EFD780] font-[600]  "
          to={"/contact-us"}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
