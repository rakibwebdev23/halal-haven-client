import { Link } from "react-router-dom";

const MenuOrder = ({ menuImg }) => {

    return (
        <div className="w-full h-[400px] md:flex items-center gap-10 mt-24">
            <div className="w-1/2">
                <img className="h-[400px] rounded-t-full rounded-r-full w-full" src={menuImg} alt="" />
            </div>
            <div className="w-1/2 space-y-4">
                <div className="uppercase space-y-4">
                    <p className="text-orange-600 font-bold">order to halal haven</p>
                    <h2 className="text-5xl font-bold space-y-2 text-black">the quality food for your good health</h2>
                </div>
                <div className="pt-4">
                    <p className="space-y-2 text-slate-500 text-justify">"Halal Haven" is a cozy and welcoming restaurant that caters to those who value high-quality, halal-certified cuisine. Our menu is a fusion of flavors from around the world, offering a diverse range of dishes that meet the highest standards of halal preparation. From savory grilled meats to fresh salads, mouth-watering desserts, and refreshing drinks, every item on our menu is crafted with care and respect for halal traditions.</p>
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