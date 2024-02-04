import cuttingImage from "../../assets/images/cutting_food.jpg";
import coloring from "../../assets/images/coloring.jpg";
import colorin2 from "../../assets/images/coloring_italia.png";
import circle from "../../assets/images/circle_time _4phone.png";
const ItalianImmersion = () => {
  return (
    <div className="w-full  lg:py-[64px] py-[40px] lg:mt-[180px] mt-[80px] bg-[#CEDACC]">
      <div className="w-full lg:max-w-[960px] max-w-[70%] mx-auto">
        <h1 className=" text-white text-center font-[400] lg:text-[50px] md:text-[30px] text-[20px] ">
          Our Italian immersion education programs
        </h1>
      </div>
      <div className="w-full lg:max-w-[85%] max-w-[90%] h-full grid grid-cols-2 lg:gap-x-[30px] gap-x-[20px] mx-auto">
        <div className="w-full flex flex-col space-y-[30px] mt-[40px]  lg:mt-[64px]">
          <div>
            <img src={cuttingImage} alt="" />
          </div>
          <div>
            <img src={circle} alt="" />
          </div>
          <p className="lg:text-[35px] md:text-[30px] text-[18px]">
            To creative and fun after school laboratori and many more...
          </p>
        </div>
        <div className="w-full flex flex-col space-y-[30px] ">
          <p className="lg:text-[35px] md:text-[30px] text-[18px] lg:mt-[90px] mt-[40px] md:mt-[60px]">
            To creative and fun after school laboratori and many more...
          </p>
          <div>
            <img src={coloring} alt="" />
          </div>
          <div>
            <img src={colorin2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItalianImmersion;
