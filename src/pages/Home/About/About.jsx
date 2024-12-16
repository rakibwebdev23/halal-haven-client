import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from "../../../assets/images/aboutFood.jpg";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiChefHatBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="lg:flex lg:justify-between lg:space-x-16 my-24 text-justify font-poppins px-4 lg:px-8">
            {/* Left Section */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                <img className="w-full h-auto rounded-lg shadow-lg" src={img1} alt="Halal Haven Food" />
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 w-full space-y-6">
                <div className="uppercase text-center lg:text-left space-y-4">
                    <p className="text-sm lg:text-lg font-semibold text-orange-600 tracking-widest uppercase">Learn About Halal Haven</p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        High-quality food is essential for good health.
                    </h2>
                </div>
                <p className="text-lg text-black leading-relaxed">
                    "Halal Haven" is a cozy and welcoming restaurant that caters to those who value high-quality, halal-certified cuisine. Our menu is a fusion of flavors from around the world, offering a diverse range of dishes that meet the highest standards of halal preparation. From savory grilled meats to fresh salads, mouth-watering desserts, and refreshing drinks, every item on our menu is crafted with care and respect for halal traditions.
                </p>
                <div className="mt-6 text-center lg:text-left">
                    <Link to="/menuPopular">
                        <button className="px-8 py-3 border-2 border-transparent bg-yellow-500 text-black font-bold flex justify-center items-center space-x-2 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600 rounded-lg mx-auto lg:mx-0">
                            <span>Explore Popular Menu</span>
                            <MdKeyboardDoubleArrowRight className="text-2xl font-bold" />
                        </button>
                    </Link>
                </div>
                <div className="mt-12 lg:flex lg:space-x-8 flex-col lg:flex-row space-y-6 lg:space-y-0">
                    <div className="space-y-4 p-6 shadow-xl rounded-lg shadow-slate-400 text-center lg:text-left">
                        <IoFastFoodOutline className="text-4xl text-orange-600 mx-auto lg:mx-0" />
                        <h4 className="text-2xl font-semibold text-black">Best Quality Food</h4>
                        <p className="text-slate-500">Our talented chefs craft each dish with precision sourcing.</p>
                    </div>
                    <div className="space-y-4 p-6 shadow-xl rounded-lg shadow-slate-400 text-center lg:text-left">
                        <PiChefHatBold className="text-4xl text-orange-600 mx-auto lg:mx-0" />
                        <h4 className="text-2xl font-semibold text-black">Experience Our Chefs</h4>
                        <p className="text-slate-500">Our talented chefs craft each dish with precision sourcing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
