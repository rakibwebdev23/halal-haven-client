import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa";

const MarqueSlide = () => {
    return (
        <div className="pt-6 my-10">
            <Marquee gradient={200} speed={50}>
                <p className="text-slate-300 font-bold uppercase flex items-center mr-10 "><FaRegStar className="mr-10 text-6xl"></FaRegStar><span className="text-8xl">Italian pizza</span></p>
                <p className=" text-slate-300 font-bold uppercase  flex items-center mr-10 "><FaRegStar className="mr-10 text-6xl"></FaRegStar><span className="text-8xl">Golden Saffron Sip soup</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10 "><FaRegStar className="mr-10 text-6xl"></FaRegStar><span className="text-8xl">Smoky Char Burger</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10"><FaRegStar className="mr-10 text-6xl"></FaRegStar><span className="text-8xl">Halal Fresh Fusion</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10"><FaRegStar className="mr-10 text-6xl"></FaRegStar><span className="text-8xl">Crisp Garden Delight</span></p>
                <p className=" text-slate-300 font-bold uppercase flex items-center mr-10"><FaRegStar className="mr-10 text-6xl"></FaRegStar><span className="text-8xl">Golden Caramel Crisp</span></p>
            </Marquee>
        </div>
    );
};

export default MarqueSlide;