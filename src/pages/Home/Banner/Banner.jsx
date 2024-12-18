import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/images/bannerShared.jpg";
import img4 from "../../../assets/images/chicken-barbecue.jpg";
import img3 from "../../../assets/images/bannerShared2.jpg";
import img5 from "../../../assets/category/dessert.jpg";
import img6 from "../../../assets/category/pizza1.jpg";
import imgBack from "../../../assets/images/bannerBack.jpg";
import bannerUp from "../../../assets/images/imgRight.png";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

const Banner = () => {
    const backgrounds = [imgBack, img1, img3, img4, img5, img6];

    return (
        <div className="relative w-full lg:h-[700px] min-h-screen">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                showArrows={false}
                interval={8000}
                transitionTime={4000}
                stopOnHover
                emulateTouch
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

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center lg:flex-row lg:justify-between px-4 md:px-12 lg:px-16 py-12 text-white bg-black bg-opacity-70 text-center lg:text-left">
                <div className="w-full lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start">
                    <h2 className="text-4xl lg:text-7xl font-extrabold text-orange-500">
                        <span className="text-yellow-600">Welcome to</span> <br />
                        Halal Haven
                    </h2>
                    <p className="text-sm md:text-lg leading-relaxed text-gray-300">
                        Explore our fresh, delicious, and 100% halal offerings. Whether it's gourmet
                        pizzas, hearty soups, or sweet desserts, we have something for everyone.
                        Join us to experience exceptional flavors crafted with love and care.
                    </p>
                    <div className="mt-4">
                        <Link to="/order">
                            <button className="px-10 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-transparent border-2 border-orange-600 hover:text-orange-600 transition-all duration-300">
                                Order Now
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center text-left lg:justify-between  gap-4 text-sm text-gray-300 pt-8">
                        <p className="flex items-center gap-2">
                            <BsTelephone className="text-orange-600" /> +01307236959
                        </p>
                        <p className="flex items-center gap-2">
                            <FaFirefoxBrowser className="text-red-600" />
                            www.halalhaven.com
                        </p>
                        <p className="flex items-center gap-2">
                            <FaLocationDot className="text-orange-600" /> Dhaka, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="hidden lg:block lg:w-1/2">
                    <img
                        src={bannerUp}
                        alt="Welcome Banner"
                        className="w-[85%] mx-auto rounded-full drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;