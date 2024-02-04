import Carousel from "./Carousel";
import dancing from "../../assets/images/dancing_art.png";
import colorful from "../../assets/images/colorful_flower_pastelli_art.png";
import coloring from "../../assets/images/coloring_with_pastelli_art.png";
import elephant from "../../assets/images/elephant_art.png";
import tuti from "../../assets/images/tutti_bambini_cooking.png";
import making from "../../assets/images/making_pasta2_cooking.png";
import cutting from "../../assets/images/cutting_pasta_cooking.png";
import cutting2 from "../../assets/images/cutting_vegetable_cooking.png";
import cutting3 from "../../assets/images/cutting_mozzarella_cooking.png";
import making2 from "../../assets/images/making_pasta1_cooking.png";
const AfterSchoolProgram = () => {
  const images = [dancing, colorful, coloring, elephant];
  const image2 = [tuti, making, cutting, cutting2, cutting3, making2];
  return (
    <div className="lg:mt-[100px] mt-[40px]">
      <h1 className="lg:text-[40px] md:text-[30px] text-[20px]">
        After-school program
      </h1>
      <div className="flex gap-x-[20px] md:w-[100%] w-[90%] lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        <p>Age: </p>
        <div className="flex flex-col gap-y-[15px]">
          <p>5-12 years old Workshops</p>
          <p>
            7-12 years old Academic grammar program (beginner , intermediate and
            advance)
          </p>
          <p>13+ years old, Teen class</p>
        </div>
      </div>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        An exciting curriculum in the after school classes allows children the
        opportunity to acquire Italian linguistic competence and most
        importantly, a deep appreciation of Italian and European culture. The
        children will be able to explore and experiment through various
        workshops and academic grammar programs while learning together and
        speaking to each other in Italian.
      </p>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        <span className="font-bold">Art:</span>
        <br /> An engaging way to explore and have fun together while learning
        Italian is through art. We will work on projects that reinforce the
        learning experience and give the children a chance to explore and
        experiment with different materials while still acquiring Italian.
      </p>
      <div className="w-full  lg:mt-[100px] mt-[40px]">
        <Carousel images={images} />
      </div>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        <span className="font-bold">Cooking:</span>
        <br /> We offer wonderful cooking class projects where children can
        learn and practice new vocabulary. Last semester some of our culinary
        creations have included hand made pasta (tagliatelle), pizza margherita,
        Tiramisu’, polpette and gnocchi. Many of our cooking classes projects
        have found there way home to the dinner table!
      </p>
      <div className="w-full  lg:mt-[100px] mt-[40px]">
        <Carousel images={image2} />
      </div>
    </div>
  );
};

export default AfterSchoolProgram;
