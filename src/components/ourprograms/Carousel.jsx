/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-[#CEDACC] lg:h-[50rem] w-[100%]  px-8 py-8 slider-container mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index} className="w-full">
              <img
                src={image}
                className="lg:h-[45rem] h-[25rem] md:h-[45rem] w-full lg:object-contain object-cover"
                alt="Slide 2"
              />
            </div>
          );
        })}

        {/* ... other slides */}
      </Slider>
    </div>
  );
};

export default Carousel;
