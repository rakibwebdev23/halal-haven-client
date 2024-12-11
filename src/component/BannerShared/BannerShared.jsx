import imgBack from "../../assets/banner/bannerShared.jpg";
import { FaFirefoxBrowser } from "react-icons/fa";

const BannerShared = ({bannerUp, title, description, order}) => {
    return (
        <div className="min-h-screen w-full md:flex mx-auto" style={{ backgroundImage: `url("${imgBack}")` }}>
            <div className="md:flex justify-between items-center gap-6 bg-black bg-opacity-60">
                <div className="w-1/2 text-left text-white pl-6 space-y-6">
                    <div className="text-6xl font-bold">
                        <h2>Welcome to</h2>
                        <h2 className="text-orange-500 mt-4">Halal Haven <span className="text-yellow-500">{title}</span></h2>
                    </div>
                    <div className="pt-6 space-y-6">
                        <p className="text-justify">{ description}</p>
                        <button className="relative px-6 py-2 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600">
                            {order}
                        </button>
                    </div>
                    <div className="md:flex justify-between pt-2 text-slate-400">
                        <p className="">+ 01307236959</p>
                        <p className="flex items-center gap-3"><FaFirefoxBrowser></FaFirefoxBrowser>
                            www.halalhaven.com
                        </p>
                        <p>
                            Location: Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
                <div className="w-1/2 p-10">
                    <img className="rounded-full min-h-full w-full" src={bannerUp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerShared;