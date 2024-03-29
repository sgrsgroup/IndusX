import React, { useState } from "react";
import { jobs } from "../constants";
import { SectionWrapper } from "../hoc";
import Modal from "./Modal";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

const Jobs = () => {
  const [width, setWidth] = useState(window.innerWidth);
  let slidesPerView = 3;
  if (width >= 1204) slidesPerView = 3;
  else if (width >= 845) slidesPerView = 2;
  else slidesPerView = 1;

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <div id="jobs">
      <h2
        className={`primaryText md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10 text-black`}
      >
        JOB PROFILES
      </h2>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {jobs.map((job, index) => (
          <SwiperSlide key={index}>
            <Modal
              src={job["src"]}
              role={job["role"]}
              description={job["description"]}
              about={job["about"]}
              salary={job["salary"]}
              future={job["future"]}
              companies={job["companies"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionWrapper(Jobs, "work", "#EDF6FF");
