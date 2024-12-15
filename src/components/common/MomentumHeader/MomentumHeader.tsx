/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SVGIcon from "../SVGIcon/SVGIcon";
import { getMomentumData } from "./utils";
import { useLocation } from "react-router-dom";
import { IconsType } from "../SVGIcon/types";

import theme from "core/styles/theme";

function MomentumHeader() {
  const { pathname } = useLocation();
  const { iconName, emoji, color, text } = getMomentumData(pathname);

  return (
    <div css={style.momentumHeader}>
      {Boolean(emoji) ? (
        <span css={style.momentumEmoji} style={{ color: theme.colors.orange }}>
          {emoji}
        </span>
      ) : (
        <SVGIcon iconName={iconName as IconsType} color={color} size={34} />
      )}
      <h2 css={style.h2}>{text}</h2>
    </div>
  );
}

const style = {
  momentumHeader: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    // margin-bottom: 5%;
  `,
  momentumEmoji: css`
    font-size: 25.47px;
  `,
  h2: css`
    color: ${theme.colors.orange};
    font-size: 32px;
    font-family: sans-serif;
  `,
};

export default MomentumHeader;

// import React, { useRef, useEffect } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper-bundle.min.css";
// import "swiper/css";
// import "./HeaderStyle.css";
// import ProgressBar from "../ProgressBar/ProgressBar";

// export default function Header({ sliderStep }) {
//   // eslint-disable-next-line no-unused-vars
//   const { step, workouts, exercises } = sliderStep;
//   const swiperRef = useRef(null);
//   console.log({ exercises });

//   // Function to go to the next slide
//   // const goToSlide = (index) => {
//   //   if (swiperRef.current) {
//   //     swiperRef.current.slideTo(index, 500); // Slide to the index with 500ms transition
//   //   }
//   // };

//   // const [items, setItems] = useState([1, 2, 3, 4, 5]); // Initial items

//   // const addItem = () => {
//   //   setItems((prevItems) => [...prevItems, prevItems.length + 1]);
//   // };

//   useEffect(() => {
//     if (swiperRef.current) {
//       // Scroll to the last slide whenever items are updated
//       // swiperRef.current.swiper.slideTo(step, 500);
//       swiperRef.current?.slideTo(step);
//       // swiperRef.current.slideTo(step, 500)
//     }
//   }, [step]);

//   return (
//     <div className="header">
//       <ProgressBar />
//       <Swiper
//         direction="vertical"
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         allowTouchMove={false} // Disable user swiping
//         slidesPerView={1}
//         spaceBetween={50}
//         style={{ height: "100vh" }} // Adjust as needed
//       >
//         {exercises.map((workoutGroup, i) => {
//           return (
//             <SwiperSlide className="info" key={`slide${i}`}>
//               <div style={{ background: "inherit", height: "100%" }}>
//                 <br />
//                 {workoutGroup.name}
//                 <br />
//                 <br />
//                 {workoutGroup.description}

//                 {workoutGroup.suggestions?.options?.map((option) => {
//                   return (
//                     <span key={option}>
//                       <br />
//                       {`${option} `}
//                     </span>
//                   );
//                 })}
//                 <br />
//                 <br />
//                 <p>
//                   {workoutGroup.type === "weight" &&
//                     `reps: ${workoutGroup.suggestions?.reps}`}
//                 </p>
//                 <p>
//                   {workoutGroup.type === "weight" &&
//                     `sets: ${workoutGroup.suggestions?.sets}`}
//                 </p>
//                 <p>
//                   {workoutGroup.type === "weight" &&
//                     `weight: ${workoutGroup.suggestions?.weight}`}
//                 </p>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//       {/* <div>Header {sliderStep}</div> */}
//     </div>
//   );
// }
// // {workoutGroup.options?.map((option) => {
// //   return (
// //     <span key={`${option}`}>
// //       {/* {option} */}
// //       "23"
// //       <br />
// //     </span>
// //   );
// // })}
