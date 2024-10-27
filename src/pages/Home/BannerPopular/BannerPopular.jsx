import imgBack from "../../../assets/images/chef-service.jpg"

const BannerPopular = () => {
    return (
        <div
            className="bistro bg-fixed  hero h-[700px] my-28" style={{ backgroundImage: `url("${imgBack}")` }}>
            <div className="hero-content text-center bg-black bg-opacity-40 min-h-full">
                <div className="md:h-[300px] w-[75%] text-white bg-black bg-opacity-50 flex items-center">
                    <div className='px-24'>
                        {/* <p className="text-center text-yellow-500 mb-2 italic">------Popular Item-------</p> */}
                        <h1 className="mb-5 text-5xl text-orange-600 font-bold uppercase">Halal Haven</h1>
                        <p className="mb-5 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPopular;