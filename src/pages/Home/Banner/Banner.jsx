import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/banner/banner1.png";
import img3 from "../../../assets/banner/banner3.png";
import img4 from "../../../assets/banner/banner4.png";
import img5 from "../../../assets/banner/banner5.jpg";
import img6 from "../../../assets/banner/banner6.jpg";
import imgBack from "../../../assets/images/bannerBack.jpg";
import bannerUp from "../../../assets/images/imgRight.png";
import { FaFirefoxBrowser, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Banner/Banner.css";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

const Banner = () => {

    return (
        <div>
            <Carousel>
                <div className="min-h-[100%] md:flex mx-auto delay-500 duration-500" style={{ backgroundImage: `url("${imgBack}")` }}>
                    <div className="md:flex justify-between items-center gap-6 bg-black bg-opacity-60">
                        <div className="w-1/2 text-left text-white pl-6 space-y-6">
                            <div className="text-6xl font-bold fade-in">
                                <h2>Welcome to</h2>
                                <h2 className="text-orange-500 mt-4">Halal Haven</h2>
                            </div>
                            <div className="pt-6 space-y-6">
                                <p className="text-justify mb-6">Welcome to Halal Haven, your ultimate destination for fresh, delicious, and 100% halal cuisine. Our menu features a variety of options, including gourmet pizzas, burgers, fresh salads, soups, and indulgent desserts. We pride ourselves on using high-quality ingredients and offering exceptional service. Whether dining in or ordering out, you'll enjoy a flavorful and satisfying experience. Taste the difference at Halal Haven, where every meal is made with care!</p>
                                <Link to="/order" className="">
                                    <button className="relative px-6 py-2 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600">
                                        Order Now
                                    </button>
                                </Link>
                            </div>
                            <div className="md:flex justify-between pt-2 text-slate-400">
                                <p className="flex items-center gap-2"><BsTelephone className="font-bold text-lg"></BsTelephone> +01307236959</p>
                                <p className="flex items-center gap-3"><FaFirefoxBrowser className="text-red-500 text-lg" ></FaFirefoxBrowser>
                                    www.halalhaven.com
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaLocationDot className="text-lg font-bold text-orange-600"></FaLocationDot> Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 p-10">
                            <img className="fade-in rounded-full min-h-full w-full" src={bannerUp} alt="" />
                        </div>
                    </div>
                </div>

                <div className="min-h-[100%]">
                    <img src={img1} />
                </div>
                <div className="min-h-[100%]">
                    <img src={img3} />
                </div>
                <div className="min-h-[100%]">
                    <img src={img4} />
                </div>
                <div className="min-h-[100%]">
                    <img src={img5} />
                </div>
                <div className="min-h-[100%]">
                    <img src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;