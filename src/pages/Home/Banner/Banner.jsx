import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/images/bannerShared.jpg";
import img4 from "../../../assets/images/chicken-barbecue.jpg";
import img3 from "../../../assets/images/bannerShared2.jpg";
import img5 from "../../../assets/category/dessert.jpg";
import img6 from "../../../assets/category/pizza1.jpg";
// import imgBack from "../../../assets/images/bannerBack.jpg";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

const Banner = () => {
  const backgrounds = [ img1, img3, img4, img5, img6];

  return (
    <div className="relative w-full min-h-screen lg:h-[700px]">
      <Carousel
        showThumbs={false}
        infiniteLoop
        showArrows={false}
        interval={5000}
        transitionTime={1000}
        className="w-full h-full"
      >
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="w-full min-h-screen lg:h-[700px]"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </Carousel>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="container text-white text-center max-w-screen-xl px-4 lg:px-0">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-orange-600">
              <span className="text-white">Welcome to</span> <br />
              Halal Haven
            </h2>
            <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Discover our fresh, delicious, and 100% halal menu. From gourmet pizzas to
              sweet desserts, we offer a variety of dishes crafted with love and care.
            </p>
            <div>
              <Link to="/order">
                <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300">
                  Order Now
                </button>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 text-sm text-gray-200 pt-8 justify-center">
              <p className="flex items-center gap-2 justify-center">
                <BsTelephone className="text-orange-500" /> +01307236959
              </p>
              <p className="flex items-center gap-2 justify-center">
                <FaFirefoxBrowser className="text-orange-500" />
                www.halalhaven.com
              </p>
              <p className="flex items-center gap-2 justify-center">
                <FaLocationDot className="text-orange-500" /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;