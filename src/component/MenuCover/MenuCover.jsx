import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const MenuCover = ({ title, description, order, imgUp,imgBack }) => {

    return (
        
        <div className="w-full mx-auto lg:h-[700px] overflow-hidden">
            <Parallax
                bgImage={imgBack}
                bgImageAlt="menu background"
                strength={-400}
                blur={{ min: -20, max: 20 }}
                style={{ height: '90%', width: '100%' }}
                bgClassName="bg-cover bg-center"
            >
                <div className="lg:h-[700px] flex mx-auto justify-center">
                    <div className="flex lg:justify-between items-center bg-gray-900 bg-opacity-50 lg:px-8 px-4 text-white w-full min-h-screen">
                        <div className="lg:w-1/2 max-w-full text-left text-white mx-auto">
                            <div className="lg:text-6xl md:text-4xl text-3xl lg:font-extrabold font-semibold">
                                <h2 className="text-orange-600 mt-4">Halal Haven <span className="text-orange-500">{title}</span></h2>
                            </div>
                            <div className="lg:pt-6 pt-4">
                                <p className="lg:text-justify text-left mb-8">{description}</p>
                                <Link to="/order"><button className="relative px-6 py-2 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600">
                                    {order}
                                </button></Link>
                            </div>
                        </div>
                        <div className="w-1/2 p-10">
                            <img className="rounded-full min-h-full w-full hidden lg:block" src={imgUp} alt="" />
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default MenuCover;