import React from "react";
import "./MainCardStyle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

export default function MainCard({ flow, setSliderStep }) {
  // workoutData.reduce((total, group) => total + group.exercises.length, 0)
  const workoutList = flow.current.workouts.reduce(
    (total, item) => total.concat(item.exercises),
    []
    // [1,1,1,1,1,1,1]
  );
  // const workoutList = flow.current.workouts.reduce((total, item) => total + item.exercises, []))
  // const workoutList = flow.current.workouts
  console.log({ flow: workoutList });

  return (
    <div className="container">
      <div style={{ position: "relative", height: "100%", bottom: "0" }}>
        <div
          className="custom-pagination"
          style={{ textAlign: "center", margin: "10px 0" }}
        ></div>
        <Swiper
          initialSlide={flow.current.step}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          speed={775}
          style={{ width: "100%", height: "100vh" }}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => {
            setSliderStep(swiper.realIndex);
            console.log("slide change", swiper.realIndex);
          }}
        >
          {workoutList.map((workout, i) => (
            <SwiperSlide key={"slide" + i}>
              <div className="slide">{workout.group}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
