import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa";

const MarqueSlide = () => {
    return (
        <div className="py-12 bg-white shadow-lg">
            <Marquee 
                gradient={true} 
                gradientWidth={100} 
                speed={50} 
                pauseOnHover 
                className="overflow-hidden"
            >
                <div className="flex gap-x-10 lg:gap-x-20 px-4">
                    {/* Marquee Items */}
                    {[
                        "Italian Pizza",
                        "Golden Saffron Soup",
                        "Smoky Char Burger",
                        "Halal Fresh Fusion",
                        "Crisp Garden Delight",
                        "Golden Caramel Crisp"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center text-gray-800 font-semibold">
                            <FaRegStar className="lg:text-4xl text-3xl text-yellow-500 mr-3" />
                            <span className="lg:text-4xl text-2xl">{item}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueSlide;