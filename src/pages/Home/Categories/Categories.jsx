import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import img1 from "../../../assets/category/burger1.jpg";
import img2 from "../../../assets/category/dessert.jpg";
import img3 from "../../../assets/category/carrot-juice-1623079_1920.jpg";
import img4 from "../../../assets/category/pizza1.jpg";
import img5 from "../../../assets/category/soup2.jpg";
import img6 from "../../../assets/category/salad.jpg";
import img7 from "../../../assets/category/chicken-barbecue.jpg";

const Categories = () => {
    const categories = [
        { id: 1, name: "Burger", img: img1, route: "/menuBurger" },
        { id: 2, name: "Dessert", img: img2, route: "/menuDessert" },
        { id: 3, name: "Drink", img: img3, route: "/menuDrink" },
        { id: 4, name: "Pizza", img: img4, route: "/menuPizza" },
        { id: 5, name: "Soup", img: img5, route: "/menuSoup" },
        { id: 6, name: "Salad", img: img6, route: "/menuSalad" },
        { id: 7, name: "Popular", img: img7, route: "/menuPopular" },
    ];

    return (
        <div className="py-10 bg-gray-50 px-4 lg:px-12">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 uppercase">
                Explore Our Categories
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <div className="relative group rounded-lg overflow-hidden shadow-lg transition duration-500">
                            <img
                                src={category.img}
                                alt={category.name}
                                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {category.name}
                                </h3>
                                <Link to={category.route}>
                                    <button className="mt-3 px-4 py-2 w-full bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 transition">
                                        View More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Categories;
