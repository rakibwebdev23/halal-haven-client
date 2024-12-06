import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/banner/banner1.png";
import img3 from "../../../assets/banner/banner3.png";
import img4 from "../../../assets/banner/banner4.png";
import img5 from "../../../assets/banner/banner5.jpg";
import img6 from "../../../assets/banner/banner6.jpg";
import imgBack from "../../../assets/images/bannerBack.jpg";
import bannerUp from "../../../assets/images/imgRight.png";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Banner/Banner.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

const Banner = () => {
    return (
        <div className="min-h-screen w-screen">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                showArrows={true}
                interval={5000} 
                className="carousel-container"
            >
                {/* First Slide */}
                <div
                    className="flex items-center justify-center lg:h-[700px] min-h-screen h-[500px] max-w-full"
                    style={{
                        backgroundImage: `url("${imgBack}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="flex lg:justify-between items-center bg-black bg-opacity-60 lg:px-8 px-4 text-white w-full  lg:min-h-full min-h-screen">
                        <div className="lg:w-1/2 space-y-6 text-left fade-in-up">
                            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Welcome to <br />
                                <span className="text-orange-500">Halal Haven</span>
                            </h2>
                            <p className="text-justify lg:hyphens-none hyphens-auto break-words leading-relaxed mb-6">
                                Welcome to Halal Haven, your ultimate destination for fresh, delicious, and 100% halal cuisine. Our menu features a variety of options, including gourmet pizzas, burgers, fresh salads, soups, and indulgent desserts. We pride ourselves on using high-quality ingredients and offering exceptional service. Whether dining in or ordering out, you'll enjoy a flavorful and satisfying experience. Taste the difference at Halal Haven, where every meal is made with care!
                            </p>
                            <Link to="/order">
                                <button className="px-6 py-2 mt-4 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600">
                                    Order Now
                                </button>
                            </Link>
                            <div className="flex flex-col md:flex-row justify-between text-slate-400 pt-4 space-y-2 lg:space-y-0">
                                <p className="flex items-center gap-2">
                                    <BsTelephone className="text-lg text-orange-500" /> +01307236959
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaFirefoxBrowser className="text-red-500 text-lg" />
                                    www.halalhaven.com
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaLocationDot className="text-lg text-orange-600" /> Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 justify-center mt-8 lg:mt-0 hidden lg:block fade-in-up-delay">
                            <img
                                className="w-3/4 max-w-md rounded-full"
                                src={bannerUp}
                                alt="Welcome Banner"
                            />
                        </div>
                    </div>
                </div>

                {/* Other Slides */}
                {[img1, img3, img4, img5, img6].map((image, index) => (
                    <div key={index} className="lg:h-[700px] h-[500px] min-h-screen w-screen">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
