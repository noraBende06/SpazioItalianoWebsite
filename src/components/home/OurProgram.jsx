import { Link } from "react-router-dom";

const OurProgram = () => {
  return (
    <div className="w-full lg:mt-[150px] mt-[80px]">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="lg:text-[35px] md:text-[30px] text-[18px] lg:mt-[120px] mt-[0px] lg:w-[40%] w-[80%] text-center">
          Activities centered not only in learning but also growth and education
        </p>

        <Link
          className="button-effect px-[19px] py-[13px] flex justify-center text-[20px] mt-[71px] w-[190px] bg-[#EFD780] font-[600]  "
          to={"/our-program"}
        >
          Our program
        </Link>
      </div>
    </div>
  );
};

export default OurProgram;
