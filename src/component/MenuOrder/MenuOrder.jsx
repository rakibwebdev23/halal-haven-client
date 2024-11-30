import { Link } from "react-router-dom";

const MenuOrder = ({ menuImg }) => {

    return (
        <div className="w-full lg:h-[400px] min-h-screen lg:flex items-center gap-10 mt-28 lg:mt-6 px-4 lg:px-8 font-poppins mb-20 lg:mb-8">
            <div className="lg:w-1/2">
                <img className="lg:h-[400px] rounded-md lg:rounded-t-full lg:rounded-r-full w-full" src={menuImg} alt="" />
            </div>
            <div className="lg:w-1/2 space-y-4 mt-8 lg:mt-0">
                <div className="uppercase lg:space-y-4 space-y-3">
                    <p className="text-orange-600 font-bold leading-tight">order to halal haven</p>
                    <h2 className="lg:text-5xl font-bold space-y-2 text-black text-3xl leading-tight">the quality food for your good health</h2>
                </div>
                <div className="pt-4">
                    <p className="space-y-2 text-slate-700 text-justify leading-relaxed hyphens-auto break-words">"Halal Haven" is a cozy and welcoming restaurant that caters to those who value high-quality, halal-certified cuisine. Our menu is a fusion of flavors from around the world, offering a diverse range of dishes that meet the highest standards of halal preparation. From savory grilled meats to fresh salads, mouth-watering desserts, and refreshing drinks, every item on our menu is crafted with care and respect for halal traditions.</p>
                    <Link to="/order">
                        <button className="relative mt-6 px-10 py-3 font-bold text-white border-2 border-transparent bg-orange-500 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuOrder;