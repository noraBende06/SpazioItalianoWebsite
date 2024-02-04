import { Link } from "react-router-dom";

import teacher2 from "../../assets/images/reading_images_4phone.png";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="w-full lg:mt-[150px] mt-[80px]">
      <img
        src={teacher2}
        alt=""
        className="w-full lg:h-screen object-cover lg:flex hidden"
      />
      <img
        src={teacher2}
        alt=""
        className="w-full lg:h-screen object-cover flex lg:hidden"
      />
      <div className="w-full flex flex-col justify-center items-center">
        <motion.p
          initial="hidden"
          ref={ref}
          animate={controls}
          variants={variants}
          className="lg:text-[40px] lg:mt-[120px] mt-[80px] md:text-[30px] text-[24px] lg:w-[60%] w-[90%] md:w-[70%] text-center"
        >
          An authentic learning experience with Native Italian Instructors
          Founded in 2004
        </motion.p>
        <motion.p
          initial="hidden"
          animate={controls}
          ref={ref}
          variants={variants}
          className="lg:text-[35px] lg:mt-[120px] mt-[40px] md:text-[25px] text-[18px] w-[80%] text-center"
        >
          Since 2004 our focus at Spazio Italiano has been to provide a
          consistent space where children and their families can learn the
          Italian language and connect with the traditions and cultural heritage
          of Italy.
        </motion.p>
        <Link
          className="button-effect px-[19px] py-[13px] flex justify-center text-[20px] lg:mt-[71px] mt-[40px] w-[190px] bg-[#EFD780] font-[600]  "
          to={"/who-we-are"}
        >
          About us
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
