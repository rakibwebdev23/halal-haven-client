import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const MenuCover = ({ title, description, order, imgUp, imgBack }) => {
    return (
        <div className="w-full h-screen">
            <Parallax
                bgImage={imgBack}
                strength={-300}
                blur={{ min: -15, max: 15 }}
                className="h-full"
            >
                {/* Overlay */}
                <div className="h-screen bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-white px-6 lg:px-12 max-w-7xl mx-auto">
                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl lg:text-6xl font-bold text-orange-500 mb-4">
                                Halal Haven <br /> <span className="text-white">{title}</span>
                            </h1>
                            <p className="text-sm lg:text-base text-gray-300 mb-6 leading-relaxed">
                                {description}
                            </p>
                            <Link to="/order">
                                <button className="px-6 py-2 bg-orange-600 text-white border-2 border-transparent hover:border-orange-600 hover:bg-transparent hover:text-orange-600 transition duration-300 uppercase">
                                    {order}
                                </button>
                            </Link>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src={imgUp}
                                alt="Food Item"
                                className="w-[400px] h-[400px] mx-auto rounded-full shadow-xl border-4 border-orange-500 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default MenuCover;