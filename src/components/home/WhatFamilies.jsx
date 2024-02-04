import ari from "../../assets/images/ari e giova.jpg";
const WhatFamilies = () => {
  return (
    <div className="w-full lg:mt-[150px] mt-[80px]">
      <div className="w-full max-w-[85%] lg:mt-[180px]  mx-auto flex flex-col justify-center items-center">
        <h1 className="text-[#3EBAE1] font-[400] lg:text-[50px] md:text-[30px] text-[17px] text-center">
          What families and students are saying…
        </h1>
        <p className="lg:text-[35px] md:text-[30px] text-[18px] mt-[80px] lg:mt-[120px] lg:w-[80%] text-center">
          Spazio is proud to have had taught kids, for many years, who always
          come back every summer
        </p>
      </div>
      <div className="mt-[100px]">
        <img
          src={ari}
          alt=""
          className="w-full lg:h-screen object-cover object-top"
        />
      </div>
    </div>
  );
};

export default WhatFamilies;
