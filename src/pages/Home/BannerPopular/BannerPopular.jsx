import imgBack from "../../../assets/cover/cover3.jpg"

const BannerPopular = () => {
    return (
        <div
            className="bistro bg-fixed hero min-h-screen h-1/2 my-28" style={{ backgroundImage: `url("${imgBack}")` }}>
            <div className="hero-content text-center lg:px-20 p-6 bg-black bg-opacity-50 min-h-full max-w-full">
                <div className="lg:h-[300px] text-white bg-black bg-opacity-70 flex items-center">
                    <div className='lg:px-24 py-10 lg:py-0'>
                        <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl text-orange-600 font-bold uppercase">Halal Haven</h1>
                        <p className="text-center tracking-normal p-2 leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPopular;