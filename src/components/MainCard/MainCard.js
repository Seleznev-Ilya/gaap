import React from "react";
import "./MainCardStyle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MainCard({ sliderStep, setSliderStep }) {
  // workoutData.reduce((total, group) => total + group.exercises.length, 0)
  // const workoutList = sliderStep.workouts.reduce(
  //   (total, item) => total.concat(item.exercises),
  //   []
  // );
  // const workoutList = sliderStep.workouts.reduce(
  //   (total, item) => total.concat(item.exercises),
  //   []
  // );
  // const workoutList = flow.current.workouts.reduce((total, item) => total + item.exercises, []))
  // const workoutList = flow.current.workouts
  // console.log({ sliderStep });

  return (
    <div className="container">
      <div style={{ position: "relative", height: "100%", bottom: "0" }}>
        <div
          className="custom-pagination"
          style={{ textAlign: "center", margin: "10px 0" }}
        ></div>
        <Swiper
          initialSlide={sliderStep.step}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          speed={275}
          threshold={20}
          touchRatio={0.3}
          resistanceRatio={1.5}
          style={{ width: "100%", height: "100%" }}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => {
            setSliderStep({ ...sliderStep, step: swiper.realIndex });
            // console.log("slide change", swiper.realIndex);
          }}
        >
          {sliderStep.exercises.map((workout, i) => (
            <SwiperSlide key={"slide" + i}>
              <div className="slide">
                {/* {workout.group} */}
                {/* {workout.description} */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
