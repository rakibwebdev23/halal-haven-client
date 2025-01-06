import React from "react";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "@smastrom/react-rating/style.css";
import { Pagination, Autoplay } from "swiper/modules";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import "./Testmonial.css";

// Skeleton Loader for better user experience during loading
const SkeletonLoader = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-64 h-64 bg-gray-200 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
};

const Testimonial = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching reviews with a loading state
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const response = await axiosPublic.get("/review?limit=10"); // Limit to 10 reviews
      return response.data;
    },
  });

  return (
    <div className="mt-20 lg:mt-24 px-6 lg:px-12">
      <SectionTitle
        subTitle="Our Happy Diners"
        title="What People Are Saying About Us"
      />

      <div className="mt-12">
        {/* Show Skeleton Loader while reviews are loading */}
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <Swiper
            rewind={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="mySwiper"
          >
            {/* Render reviews */}
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="bg-white border border-gray-200 shadow-md hover:shadow-xl rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300">
                  <div className="relative mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      loading="lazy"
                      className="w-24 h-24 object-cover rounded-full border-4 border-orange-500 shadow-md"
                    />
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 text-sm rounded-full shadow-lg">
                      ★ {review.rating}
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "{review.details}"
                  </p>

                  {/* Divider and Rating */}
                  <div className="w-16 h-1 bg-orange-500 rounded-full mt-2 mb-4"></div>
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={review.rating}
                    readOnly
                    className="mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
