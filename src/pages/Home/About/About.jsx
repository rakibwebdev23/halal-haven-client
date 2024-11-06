import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from "../../../assets/images/aboutFood.jpg";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiChefHatBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="md:flex justify-between my-28 text-justify">
            <div className="w-1/2">
                <img className="fade-in" src={img1} alt="" />

            </div>
            <div className="w-1/2 space-y-4">
                <div className="uppercase space-y-4">
                    <p className="text-orange-600 font-bold">learn about halal haven</p>
                    <h2 className="text-5xl font-bold text-black">the quality food for your good health</h2>
                </div>
                
                <div className="pt-4">
                    <p className="space-y-2 text-slate-500">"Halal Haven" is a cozy and welcoming restaurant that caters to those who value high-quality, halal-certified cuisine. Our menu is a fusion of flavors from around the world, offering a diverse range of dishes that meet the highest standards of halal preparation. From savory grilled meats to fresh salads, mouth-watering desserts, and refreshing drinks, every item on our menu is crafted with care and respect for halal traditions.</p>
                    <div className="md:flex items-center gap-6 mt-10">
                        <button className="relative px-8 py-3 border-2 border-transparent bg-yellow-500 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600 font-bold flex justify-center items-center">
                            learn more us <MdKeyboardDoubleArrowRight className="text-2xl font-bold"></MdKeyboardDoubleArrowRight>
                        </button>
                        <Link to="/menuPopular"><button className="relative px-4 transition-all duration-200 font-bold flex justify-center hover:text-yellow-600 items-center text-orange-600 underline underline-offset-4 hover:no-underline">explore popular menu <MdKeyboardDoubleArrowRight className="text-2xl font-bold"></MdKeyboardDoubleArrowRight></button></Link>
                    </div>
                    <div className="mt-10 flex justify-between">
                        <div className="space-y-2">
                            <IoFastFoodOutline className="text-4xl text-orange-600"></IoFastFoodOutline>
                            <h4 className="text-2xl font-bold">Best quality food</h4>
                            <p className="text-slate-500">Our talented chefs craft each dish <br /> precision sourcing</p>
                        </div>
                        <div className="space-y-2">
                            <PiChefHatBold className="text-4xl text-orange-600"></PiChefHatBold >
                            <h4 className="text-2xl font-bold">Experience Our chefs</h4>
                            <p className="text-slate-500">Our talented chefs craft each dish <br /> precision sourcing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;