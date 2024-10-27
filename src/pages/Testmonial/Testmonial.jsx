import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";
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
        <div className="my-20 pt-16">
            <SectionTitle
                subTitle="Customer Favorites"
                title="Hear from Our Happy Diners
                        See Why They Love Halal Haven!"
            ></SectionTitle>
            <div>
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mt-20"

                >
                    {
                        reviews.map(review => <SwiperSlide

                            key={review._id}>
                            <div className="flex flex-col items-center justify-center space-y-2 text-lg py-10 px-28 text-center bg-orange-200">
                                <h2 className='text-4xl font-bold'>{review.name}</h2>
                                <Rating
                                    style={{ maxWidth: 160 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="pt-6">{review.details}</p>
                                <img src={review.image} className="mt-6 rounded-full w-24 h-24 bg-black" />
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testmonial;
