import imgBack from "../../../assets/images/chef-service.jpg"

const BannerPopular = () => {
    return (
        <div
            className="bistro bg-fixed  hero lg:h-[700px] my-28" style={{ backgroundImage: `url("${imgBack}")` }}>
            <div className="hero-content text-center px-20 lg:py-0 py-16 bg-black bg-opacity-40 min-h-full max-w-full">
                <div className="lg:h-[300px] px-12 text-white bg-black bg-opacity-50 flex items-center">
                    <div className='lg:px-24 py-10 lg:py-0'>
                        <h1 className="mb-5 lg:text-5xl text-4xl text-orange-600 font-bold uppercase">Halal Haven</h1>
                        <p className="mb-5 lg:text-center text-left leading-tight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPopular;