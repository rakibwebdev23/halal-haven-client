import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const MenuCover = ({ title, description, order, imgUp,imgBack }) => {

    return (
        
        <div className="lg:max-w-full mx-auto lg:h-[700px] overflow-hidden">
            <Parallax
                bgImage={imgBack}
                bgImageAlt="menu background"
                strength={-400}
                blur={{ min: -20, max: 20 }}
                style={{ height: '100%', width: '100%' }}
                bgClassName="bg-cover bg-center"
            >
                <div className="lg:h-[700px] flex mx-auto justify-center">
                    <div className="flex lg:justify-between items-center bg-gray-900 bg-opacity-50 lg:px-8 px-4 text-white w-full min-h-screen">
                        <div className="lg:w-1/2 text-left text-white  space-y-6 mx-auto">
                            <div className="lg:text-6xl text-4xl font-bold">
                                <h2>Welcome to</h2>
                                <h2 className="text-orange-500 mt-4">Halal Haven <br /><span className="text-yellow-500">{title}</span></h2>
                            </div>
                            <div className="pt-8">
                                <p className="text-justify hyphens-auto break-words leading-relaxed mb-8">{description}</p>
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