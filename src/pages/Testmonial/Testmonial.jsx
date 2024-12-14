import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '@smastrom/react-rating/style.css';
import { Navigation, Autoplay } from "swiper/modules";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../component/SectionTitle/SectionTitle";

const Testmonial = () => {
    const axiosPublic = useAxiosPublic();

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/review');
            return res.data;
        }
    });

    return (
        <div className="mt-12 lg:mt-24 md:mt-16 min-h-screen">
            <SectionTitle
                subTitle="Customer Favorites"
                title="Hear from Our Happy Diners. See Why They Love Halal Haven!"
            ></SectionTitle>
            <div>
                <Swiper
                    rewind={true}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper mt-10" 
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center justify-center space-y-2 lg:text-lg py-10 lg:px-28 lg:text-center text-left leading-relaxed px-14 bg-orange-200">
                                <h2 className="lg:text-4xl text-2xl text-slate-800 font-bold">{review.name}</h2>
                                <Rating
                                    style={{ maxWidth: 160 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-slate-800 text-center text-sm lg:text-base leading-relaxed">{review.details}</p>
                                <img src={review.image} className="mt-6 rounded-full w-24 h-24 bg-black" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testmonial;
