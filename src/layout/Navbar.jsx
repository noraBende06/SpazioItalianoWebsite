import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/SpazioItaliano_Logo_PSD.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      // Adjust the scroll threshold as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transition: "opacity 0.5s ease, visibility 0.5s ease",
          }}
        ></div>
      )}
      <div
        className={`w-full max-w-[100%] lg:h-[124px] h-[124px] mx-auto px-8 lg:px-[100px] py-4 fixed z-[9999] left-1/2 transform -translate-x-1/2 top-[0] text-black flex bg-white justify-between items-center ${
          isSticky
            ? "fixed top-0 left-1/2 transform -translate-x-1/2 border-b border-b-gray-300"
            : ""
        }`}
      >
        <div className="lg:flex hidden">
          <Link
            to={"/"}
            className={`text-2xl font-bold ${
              isSticky ? "animate" : "hidden lg:flex"
            }`}
          >
            <img src={Logo} alt="" className="w-[100px] h-[100px] " />
          </Link>
        </div>
        <div className="lg:flex hidden">
          <ul className="lg:flex hidden text-[20px] items-center space-x-[46px]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/our-program"}>Our Program</Link>
            </li>
            <li>
              <Link to={"/who-we-are"}>Who we are</Link>
            </li>
            <Link
              className="button-effect px-[13px] py-[6px] flex justify-center w-[130px] bg-[#EFD780] font-[600]  "
              to={"/contact-us"}
            >
              Contact us
            </Link>
          </ul>
        </div>
        <>
          <div className="lg:hidden flex justify-between w-full items-center">
            <Link
              to={"/"}
              className={`text-2xl md:w-[100%] ml-[40px] w-[80%] flex justify-center font-bold ${
                isSticky ? "animate" : ""
              }`}
            >
              <img src={Logo} alt="" className="w-[100px] h-[100px] " />
            </Link>
            <div className="relative">
              {!isOpen ? (
                <button className="" onClick={() => setIsOpen(true)}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="64" height="64" fill="white" />
                    <path d="M2 22H62" stroke="#0087C0" strokeWidth="2" />
                    <path d="M2 31.5H62" stroke="#0087C0" strokeWidth="2" />
                    <path d="M2 41.5H62" stroke="#0087C0" strokeWidth="2" />
                  </svg>
                </button>
              ) : (
                <button className="" onClick={() => setIsOpen(false)}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L46.9989 46.9989"
                      stroke="#0087C0"
                      strokeWidth="2"
                    />
                    <path
                      d="M1 46.999L46.9989 1.00009"
                      stroke="#0087C0"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              )}
            </div>
            {isOpen === true && (
              <div className="absolute right-[2rem] bg-white  w-[100%] py-[20px] md:max-w-[45%] max-w-[85%] flex items-center mx-auto top-[105px]">
                <div className="w-[100%] text-[#3EBAE1]  flex flex-col justify-center items-center gap-y-[20px]">
                  <Link className="modal-link" to={"/"}>
                    Home
                  </Link>

                  <Link className="modal-link" to={"/our-program"}>
                    Our Program
                  </Link>

                  <Link className="modal-link" to={"/who-we-are"}>
                    Who we are
                  </Link>

                  <Link className="modal-link" to={"/contact-us"}>
                    Contact us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default Navbar;
