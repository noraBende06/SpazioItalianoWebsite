import playingwithsand from "../../assets/images/playing_with_sand_morning.jpeg";
import readingbook from "../../assets/images/reading_book_on_mattress_morning.jpeg";
import baby from "../../assets/images/baby_with_taburro_morning.png";
import cane from "../../assets/images/cane2.png";
import coloring from "../../assets/images/coloring_stella_marina_morning.jpg";
import Carousel from "./Carousel";
const MorningProgram = () => {
  const images = [playingwithsand, readingbook, baby, cane, coloring];
  return (
    <div className="lg:mt-[100px] mt-[40px]">
      <h1 className="lg:text-[40px] md:text-[30px] text-[20px]">
        Morning Program
      </h1>
      <p className="flex gap-x-[20px] md:w-[70%] w-[90%] lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        Age:{" "}
        <p>
          9 months and 3 years must be with parent or caregiver 3-5 years old
        </p>
      </p>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        The morning program provides a beautiful opportunity for young children
        with their parent to learn a new language through play. The use of
        stories, puppets, arts and crafts, games and songs are essential to
        creating a nurturing environment in which to participate, explore and
        experiment with the Italian language and culture.
      </p>
      <div className="w-full  lg:mt-[100px] mt-[40px]">
        <Carousel images={images} />
      </div>
      <p className="lg:text-[35px] md:text-[25px] text-[18px] lg:mt-[100px] mt-[40px]">
        Children will be immersed in the Italian language through play, class
        participation and social interaction. As a result, the students will
        develop self-confidence, expressing themselves in Italian as well as
        mastering other age appropriate skills. The activities will take place
        in a fun, safe environment where the toys, books and games are Italian.
      </p>
    </div>
  );
};

export default MorningProgram;
