import sanfrancisco from "../../assets/images/San_Francisco_Chronicle_logo.png";
import vogue from "../../assets/images/vogue_logo.jpeg";
import bambini from "../../assets/bambini.pdf";
// import sanfrancisco from "../../assets/images/"
const MagazineFeatures = () => {
  return (
    <div className="w-full lg:mt-[150px] mt-[100px]">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[#3EBAE1] font-[400] lg:text-[50px] md:text-[30px] text-[17px] text-center">
          Magazine features
        </h1>
        <p className="lg:text-[35px] md:text-[30px] text-[18px] lg:mt-[120px] mt-[80px] lg:w-[40%] w-[80%] text-center">
          Spazio’s amazing work and impact in the community has landed us a
          feature in important magazines!
        </p>
        <div className="lg:mt-[120px] mt-[80px] w-full justify-center flex flex-col items-center">
          <a
            target="_blank"
            href="https://www.sfgate.com/magazine/article/Bay-Area-is-biggest-Little-Italy-for-preschools-3223154.php"
            rel="noreferrer"
            className="w-full flex justify-center"
          >
            <img src={sanfrancisco} alt="" className="w-[50%] " />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            download="Bambini Spazio Italiano"
            href={bambini}
            className="w-full flex justify-center"
          >
            <img src={vogue} alt="" className="w-[20%] " />
          </a>
          <h1 className="lg:text-[30px] text-[15px] font-bold">
            Bambini Magazine
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MagazineFeatures;
