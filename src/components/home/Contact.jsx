import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full lg:mt-[100px] mt-[60px]">
      <div className="w-full flex max-w-[90%] mx-auto flex-col justify-center items-center">
        <p className="lg:text-[35px] md:text-[30px] text-[20px]  lg:w-[40%] text-center">
          Che cosa stai aspettando?
        </p>

        <Link
          className="button-effect px-[19px] py-[13px] flex justify-center text-[20px] mt-[71px] w-[190px] bg-[#EFD780] font-[600]  "
          to={"/contact-us"}
        >
          Contact us
        </Link>
        <h1 className="text-[#3EBAE1] lg:text-[50px] md:text-[30px] text-[20px] lg:mt-[100px] mt-[40px] font-[400]  text-center">
          Siamo Qui
        </h1>
        <p className="lg:text-[45px] md:text-[35px] text-[25px] lg:mt-[100px] mt-[40px] lg:w-[80%] text-center">
          Where can you find us?
        </p>
        <p className="lg:text-[35px] md:text-[30px] text-[20px] lg:mt-[100px] mt-[40px] lg:w-[80%] w-[100%] text-center">
          We are located in <br />{" "}
          <p className="font-bold lg:text-[40px] md:text-[30px] text-[20px]">
            North Beach, 1853 Powell st,
          </p>
          <p className="font-bold lg:text-[40px] md:text-[30px] text-[20px]">
            San Francisco, CA 94133
          </p>
        </p>
      </div>
      <div className="lg:mt-[60px] mt-[35px]">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=1853+Powell+st,+San+Francisco,+CA+94133&zoom=15"
          width="600"
          height="490"
          frameBorder="0"
          style={{ border: 0, width: "100%" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
