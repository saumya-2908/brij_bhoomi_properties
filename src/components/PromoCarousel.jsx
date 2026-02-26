import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import banner4 from "../assets/banner4.jpeg";
import banner5 from "../assets/banner5.jpeg";
import banner6 from "../assets/banner6.jpeg";

export default function PromoCarousel() {

  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-brand-darkBg transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg">

                <img
                  src={banner}
                  alt={`Promo ${index}`}
                  className="w-full h-[320px] object-cover transition duration-500 hover:scale-105"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}