import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa";

const MarqueSlide = () => {
    return (
        <div className="py-10 my-16 bg-gradient-to-r from-slate-800 to-slate-900">
            <Marquee 
                gradient={true} 
                gradientWidth={100} 
                speed={40} 
                pauseOnHover 
                className="overflow-hidden"
            >
                <div className="flex gap-x-8 lg:gap-x-16 px-4">
                    {/* Items */}
                    {[
                        "Italian Pizza",
                        "Golden Saffron Sip Soup",
                        "Smoky Char Burger",
                        "Halal Fresh Fusion",
                        "Crisp Garden Delight",
                        "Golden Caramel Crisp"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center text-white font-bold">
                            <FaRegStar className="lg:text-5xl text-3xl text-yellow-400 mr-4" />
                            <span className="lg:text-5xl text-3xl">{item}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueSlide;