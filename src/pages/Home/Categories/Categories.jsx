import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from "../../../assets/category/burger1.jpg";
import img2 from "../../../assets/category/dessert.jpg";
import img3 from "../../../assets/category/carrot-juice-1623079_1920.jpg";
import img4 from "../../../assets/category/pizza1.jpg";
import img5 from "../../../assets/category/soup2.jpg";
import img6 from "../../../assets/category/salad.jpg";
import img7 from "../../../assets/category/chicken-barbecue.jpg";


const Categories = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-20"
            >
                <SwiperSlide>
                    <img className='min-h-full hover:bg-orange-500  w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80' src={img1} alt="" />
                    <h2 className='text-3xl text-center font-bold text-slate-300 uppercase right-1/2 absolute top-3/4'>Burger</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='min-h-full hover:bg-orange-500  w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80' src={img2} alt="" />
                    <h2 className='text-3xl text-center font-bold text-slate-300 uppercase right-1/2 absolute top-3/4'>dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='min-h-full hover:bg-orange-500  w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80' src={img3} alt="" />
                    <h2 className='text-3xl text-center font-bold text-slate-300 uppercase right-1/2 absolute top-3/4'>drink</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='min-h-full hover:bg-orange-500  w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80' src={img4} alt="" />
                    <h2 className='text-3xl text-center font-bold text-slate-300 uppercase right-1/2 absolute top-3/4'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='min-h-full hover:bg-orange-500  w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80' src={img5} alt="" />
                    <h2 className='text-3xl text-center font-bold text-slate-300 uppercase right-1/2 absolute top-3/4'>soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='min-h-full hover:bg-orange-500  w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80' src={img6} alt="" />
                    <h2 className='text-3xl text-center font-bold text-slate-300 uppercase right-1/2 absolute top-3/4'>salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='min-h-full hover:bg-orange-500  w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80' src={img7} alt="" />
                    <h2 className='text-3xl right-1/2 font-bold text-slate-300 uppercase absolute top-3/4'>popular</h2>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Categories;