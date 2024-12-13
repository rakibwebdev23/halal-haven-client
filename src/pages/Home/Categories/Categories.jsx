import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import img1 from "../../../assets/category/burger1.jpg";
import img2 from "../../../assets/category/dessert.jpg";
import img3 from "../../../assets/category/carrot-juice-1623079_1920.jpg";
import img4 from "../../../assets/category/pizza1.jpg";
import img5 from "../../../assets/category/soup2.jpg";
import img6 from "../../../assets/category/salad.jpg";
import img7 from "../../../assets/category/chicken-barbecue.jpg";

const Categories = () => {
    return (
        <div className='lg:pb-10 lg:pt-2'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false, 
                }}
                modules={[FreeMode, Pagination, Autoplay]} 
                className="mySwiper mt-20"
            >
                <SwiperSlide>
                    <img
                        className="min-h-full hover:bg-orange-500 w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src={img1}
                        alt="Burger"
                    />
                    <h2 className="lg:text-3xl text-center font-bold text-slate-300 uppercase absolute top-3/4">
                        Burger
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="min-h-full hover:bg-orange-500 w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src={img2}
                        alt="Dessert"
                    />
                    <h2 className="lg:text-3xl text-center font-bold text-slate-300 uppercase absolute top-3/4">
                        Dessert
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="min-h-full hover:bg-orange-500 w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src={img3}
                        alt="Drink"
                    />
                    <h2 className="lg:text-3xl text-center font-bold text-slate-300 uppercase absolute top-3/4">
                        Drink
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="min-h-full hover:bg-orange-500 w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src={img4}
                        alt="Pizza"
                    />
                    <h2 className="lg:text-3xl text-center font-bold text-slate-300 uppercase absolute top-3/4">
                        Pizza
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="min-h-full hover:bg-orange-500 w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src={img5}
                        alt="Soup"
                    />
                    <h2 className="lg:text-3xl text-center font-bold text-slate-300 uppercase absolute top-3/4">
                        Soup
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="min-h-full hover:bg-orange-500 w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src={img6}
                        alt="Salad"
                    />
                    <h2 className="lg:text-3xl text-center font-bold text-slate-300 uppercase absolute top-3/4">
                        Salad
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="min-h-full hover:bg-orange-500 w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src={img7}
                        alt="Popular"
                    />
                    <h2 className="lg:text-3xl text-center font-bold text-slate-300 uppercase absolute top-3/4">
                        Popular
                    </h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;
