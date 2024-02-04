import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ItalianLanguage = () => {
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
    <div className="max-w-[85%] lg:mt-[180px] mt-[80px] w-full mx-auto">
      <motion.h1
        initial="hidden"
        animate={controls}
        ref={ref}
        variants={variants}
        className="text-[#3EBAE1] font-[400] lg:text-[50px] md:text-[30px] text-[20px] text-center"
      >
        An Italian language center to learn culture and language in a fun, safe
        and stimulating environment{" "}
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={controls}
        ref={ref}
        variants={variants}
        className="lg:text-[35px] md:text-[25px] text-[18px] lg:max-w-[80%] mx-auto lg:mt-[200px] mt-[80px] text-center"
      >
        Spazio Italiano is an Italian language center for children and their
        families located in San Francisco ( North Beach). We offer full Italian
        immersion programs for kids 9 months to 16 years of age as well as
        parent participation in an intimate, well designed space.
      </motion.p>
    </div>
  );
};

export default ItalianLanguage;
