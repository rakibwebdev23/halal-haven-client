import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa";

const MarqueSlide = () => {
    return (
        <div className="lg:pt-10 pt-6 my-16">
            <Marquee 
                gradient={true} 
                gradientWidth={200} 
                speed={50} 
                pauseOnHover 
                className="overflow-hidden"
            >
                <div className="flex gap-x-12 lg:gap-x-20">
                    {/* Marquee Items */}
                    <div className="flex items-center uppercase text-slate-300 font-bold">
                        <FaRegStar className="lg:text-6xl text-4xl text-slate-400 mr-4" />
                        <span className="lg:text-7xl text-5xl">Italian Pizza</span>
                    </div>
                    <div className="flex items-center uppercase text-slate-300 font-bold">
                        <FaRegStar className="lg:text-6xl text-4xl text-slate-400 mr-4" />
                        <span className="lg:text-7xl text-5xl">Golden Saffron Sip Soup</span>
                    </div>
                    <div className="flex items-center uppercase text-slate-300 font-bold">
                        <FaRegStar className="lg:text-6xl text-4xl text-slate-400 mr-4" />
                        <span className="lg:text-7xl text-5xl">Smoky Char Burger</span>
                    </div>
                    <div className="flex items-center uppercase text-slate-300 font-bold">
                        <FaRegStar className="lg:text-6xl text-4xl text-slate-400 mr-4" />
                        <span className="lg:text-7xl text-5xl">Halal Fresh Fusion</span>
                    </div>
                    <div className="flex items-center uppercase text-slate-300 font-bold">
                        <FaRegStar className="lg:text-6xl text-4xl text-slate-400 mr-4" />
                        <span className="lg:text-7xl text-5xl">Crisp Garden Delight</span>
                    </div>
                    <div className="flex items-center uppercase text-slate-300 font-bold">
                        <FaRegStar className="lg:text-6xl text-4xl text-slate-400 mr-4" />
                        <span className="lg:text-7xl text-5xl">Golden Caramel Crisp</span>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueSlide;