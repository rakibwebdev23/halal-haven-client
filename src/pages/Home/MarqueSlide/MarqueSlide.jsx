import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa";

const MarqueSlide = () => {
    return (
        <div className="lg:pt-10 pt-6 my-16">
            <Marquee gradient={200} speed={50}>
                <p className="text-slate-300 font-bold uppercase flex items-center mr-10 "><FaRegStar className="mr-10 lg:text-6xl text-4xl text-slate-400"></FaRegStar><span className="lg:text-8xl text-6xl">Italian pizza</span></p>
                <p className=" text-slate-300 font-bold uppercase  flex items-center mr-10 "><FaRegStar className="mr-10 lg:text-6xl text-4xl text-slate-400"></FaRegStar><span className="lg:text-8xl text-6xl">Golden Saffron Sip soup</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10 "><FaRegStar className="mr-10 lg:text-6xl text-4xl text-slate-400"></FaRegStar><span className="lg:text-8xl text-6xl">Smoky Char Burger</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10"><FaRegStar className="mr-10 lg:text-6xl text-4xl text-slate-400"></FaRegStar><span className="lg:text-8xl text-6xl">Halal Fresh Fusion</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10"><FaRegStar className="mr-10 lg:text-6xl text-4xl text-slate-400"></FaRegStar><span className="lg:text-8xl text-6xl">Crisp Garden Delight</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10"><FaRegStar className="mr-10 lg:text-6xl text-4xl text-slate-400"></FaRegStar><span className="lg:text-8xl text-6xl">Golden Caramel Crisp</span></p>
            </Marquee>
        </div>
    );
};

export default MarqueSlide;