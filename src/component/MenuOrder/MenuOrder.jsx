import { Link } from "react-router-dom";
import Container from "../Container/Container";

const MenuOrder = ({ menuImg }) => {
    return (
        <Container>
            <div className="w-full mt-20 lg:mt-24 lg:flex items-stretch gap-8 font-poppins mb-20 lg:mb-12">
                {/* Left section */}
                <div className="lg:w-1/2 w-full flex items-center">
                    <img
                        className="w-full h-auto lg:h-full object-cover rounded-lg shadow-lg lg:rounded-r-xl"
                        src={menuImg}
                        alt="Delicious food"
                    />
                </div>

                {/* Right section */}
                <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex flex-col justify-between">
                    <div className="uppercase space-y-4">
                        <p className="text-orange-600 font-semibold text-lg">Order to Halal Haven</p>
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-black leading-tight">
                            The Quality Food for Your Good Health
                        </h2>
                    </div>
                    <div className="space-y-4 mt-8 lg:mt-10">
                        <p className="text-slate-700 text-base lg:text-lg text-justify leading-relaxed">
                            "Halal Haven" is a cozy and welcoming restaurant that caters to those who value high-quality, halal-certified cuisine. Our menu is a fusion of flavors from around the world, offering a diverse range of dishes that meet the highest standards of halal preparation. From savory grilled meats to fresh salads, mouth-watering desserts, and refreshing drinks, every item on our menu is crafted with care and respect for halal traditions.
                        </p>
                        <Link to="/order">
                            <button className="relative mt-4 px-6 lg:px-14 py-3 font-bold text-white border-2 border-transparent bg-orange-600 hover:bg-transparent hover:border-orange-600 hover:text-orange-600 transition-all duration-300 rounded-full shadow-lg">
                                Order Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MenuOrder;
