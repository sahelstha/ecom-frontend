// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import { bannerLists } from "../../utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const colors = ["#21AD61", "#FF2C2C", "#FBC200", "#723DA6"];

const HeroBanner = () => {
  return (
    <div className="py-2 rounded-md ">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {bannerLists.map((items, i) => {
          return (
            <SwiperSlide key={items.id}>
              <div
                className="carousel-item rounded-md sm:h-125 h-96"
                style={{ backgroundColor: colors[i % colors.length] }}
              >
                <div className="flex items-center justify-center">
                  <div className="hidden lg:flex justify-center w-1/2 p-8">
                    <div className="text-center ">
                      <h3 className="text-3xl text-white font-bold">
                        {items.title}
                      </h3>
                      <h1 className="text-5xl text-white font-black mt-2">
                        {items.subtitle}
                      </h1>
                      <p className="text-white font-bold  mt-4">
                        {items.description}
                      </p>

                      <Link
                        className="mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                        to="/Products"
                      >
                        Shop
                      </Link>
                    </div>
                  </div>
                  <div className="w-full flex justify-center lg:w-1/2 p-4">
                    <img src={items.image}></img>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
