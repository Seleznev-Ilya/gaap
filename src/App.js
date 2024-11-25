import React, { useState } from "react";
import "./coreStyles/App.css";
import workoutData from "./JSON/workoutData.json";
import Header from "./components/Header/Header";
import Main from "./components/MainCard/MainCard";
import { WARMUP, COOLDOWN, BODY_GROUPS, BODY_GROUP_TYPES } from "./constants";

function App() {

  // const result = Object.entries(BODY_GROUPS).filter((group) =>
  //   test.includes(group[0])
  // );

  const { workouts } = workoutData;
  const [sliderStep, setSliderStep] = useState({
    step: 0,
    endStep: Object.values(workouts).length,
    workouts: Object.values(workouts),
    exercises: [
      WARMUP,
      BODY_GROUPS[BODY_GROUP_TYPES[0]],
      BODY_GROUPS[BODY_GROUP_TYPES[1]],
      COOLDOWN,
    ].reduce((total, item) => total.concat(item.exercises), []),
  });
  // console.log(
  //   [
  //     WARMUP,
  //     BODY_GROUPS[BODY_GROUP_TYPES[0]],
  //     BODY_GROUPS[BODY_GROUP_TYPES[1]],
  //     COOLDOWN,
  //   ],
  //   sliderStep.exercises
  // );
  // const [sliderStep, setSliderStep] = useState({
  //   step: 0,
  //   endStep: Object.values(workouts).length,
  //   workouts: Object.values(workouts),
  //   exercises: Object.values(workouts).reduce(
  //     (total, item) => total.concat(item.exercises),
  //     []
  //   ),
  // });

  return (
    <div className="App">
      <div className="version">v.1.1.3</div>
      <Header sliderStep={sliderStep} />
      <Main setSliderStep={setSliderStep} sliderStep={sliderStep} />
    </div>
  );
}

export default App;
