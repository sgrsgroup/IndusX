import { styles } from "../styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { heros } from "../constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <Swiper
        id="home"
        style={{
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": "0.3",
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[80vh] object-cover"
      >
        {heros.map((hero, index) => (
          <SwiperSlide key={index} className="h-screen relative">
            <div className="object-cover absolute inset-0 opacity-60 bg-black"></div>
            <img src={hero["image"]} alt="" className="w-full h-full" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-left ml-[4vw]">
              <h1 className={`${styles.heroHeadText} text-4xl font-bold m-3`}>
                {hero["title"]}
              </h1>
              <p className={`${styles.heroSubText} text-lg m-3`}>
                {hero["subtitle"]}
              </p>
              <div className="mt-5">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSduPgh-mj4dyH-fLgSn832-4nW9DRDmHQjtd8dOgO4tA5fCxA/viewform"
                  className="bg-gradient-to-r from-blue-500 to-black-700 m-3 border border-none rounded-full px-6 py-2.5 text-white hover:from-black-700 hover:to-blue-500 transition duration-300 ease-in-out"
                  target="__blank"
                >
                  Register Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
