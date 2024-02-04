import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import Contactus from "./pages/Contactus";
import OurPrograms from "./pages/OurPrograms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<WhoWeAre />} path="/who-we-are" />
      <Route element={<Contactus />} path="/contact-us" />
      <Route element={<OurPrograms />} path="/our-program" />
    </Routes>
  );
}

export default App;
