import { useEffect } from "react";
import RootLayout from "../layout/RootLayout";

const Contactus = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <RootLayout>
      <div className="mt-[124px] w-full max-w-[82%] mx-auto h-[60vh]  lg:h-[70vh]">
        <h1 className="lg:text-[64px] md:text-[40px] text-[30px] text-center mt-[200px] text-[#3EBAE1]">
          Contact
        </h1>
        <h1 className="lg:text-[40px] md:text-[30px] text-[20px] lg:mt-[100px] mt-[60px]">
          How to contact us?
        </h1>
        <p className="lg:text-[35px] md:text-[25px] text-[18px mt-[60px]">
          For current availability and pricing please contact us at:
        </p>
        <p className="lg:text-[35px] md:text-[25px] text-[18px] mt-[10px] lg:mt-[10px]">
          Mail:{" "}
          <a
            href="mailto:info@spazioitalianosf.com"
            className="text-blue-500 hover:text-blue-600"
          >
            info@spazioitalianosf.com
          </a>
        </p>
        <p className="lg:text-[35px] md:text-[25px] text-[18px]">
          Phone: 415-573-9542
        </p>
      </div>
    </RootLayout>
  );
};

export default Contactus;
