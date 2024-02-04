import Footer from "./Footer";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => {
  return (
    <div className="w-full bg-white ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
