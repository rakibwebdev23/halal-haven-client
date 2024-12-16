import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from "../../../assets/images/aboutFood.jpg";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiChefHatBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="lg:flex lg:justify-between lg:my-24 my-20 text-justify font-poppins px-4 lg:px-8 ">
            <div className="lg:w-1/2">
                <img className="fade-in" src={img1} alt="" />

            </div>
            <div className="lg:w-1/2 w-full lg:space-y-4 space-y-2">
                <div className="uppercase lg:space-y-4 space-y-2 mt-16 lg:mt-0 ">
                    <p className="text-orange-600 font-bold">learn about halal haven</p>
                    <h2 className="lg:text-5xl text-3xl leading-tight font-semibold lg:font-bold text-black text-left">High-quality food is essential for good health.</h2>
                </div>

                <div className="lg:pt-4 pt-2">
                    <p className="lg:space-y-2 lg:text-justify text-left leading-relaxed text-black">"Halal Haven" is a cozy and welcoming restaurant that caters to those who value high-quality, halal-certified cuisine. Our menu is a fusion of flavors from around the world, offering a diverse range of dishes that meet the highest standards of halal preparation. From savory grilled meats to fresh salads, mouth-watering desserts, and refreshing drinks, every item on our menu is crafted with care and respect for halal traditions.</p>
                    <div className="lg:mt-10 mt-6">
                        <Link to="/menuPopular"> <button className="relative px-8 py-3 border-2 border-transparent bg-yellow-500 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600 font-bold flex justify-center items-center text-black">
                            Explore Popular Menu <MdKeyboardDoubleArrowRight className="lg:text-2xl font-bold"></MdKeyboardDoubleArrowRight>
                        </button></Link>
                    </div>
                    <div className="mt-10 lg:flex justify-between">
                        <div className="space-y-2">
                            <IoFastFoodOutline className="text-4xl text-orange-600"></IoFastFoodOutline>
                            <h4 className="text-2xl font-semibold text-black">Best quality food</h4>
                            <p className="text-slate-500">Our talented chefs craft each dish <br /> precision sourcing</p>
                        </div>
                        <div className="space-y-2 mt-6 lg:mt-0">
                            <PiChefHatBold className="text-4xl text-orange-600"></PiChefHatBold >
                            <h4 className="text-2xl font-semibold text-black">Experience Our chefs</h4>
                            <p className="text-slate-500">Our talented chefs craft each dish <br /> precision sourcing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;