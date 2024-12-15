// import React from "react";
import React from "react";
// import React, { useState } from "react";
// import Picker from "react-mobile-picker";
import Routes from "./routes/routes";
import AppContainer from "./components/common/AppContainer/AppContainer";

// import workoutData from "./JSON/workoutData.json";
// import Header from "./components/Header/Header";
// import Main from "./components/MainCard/MainCard";
// import { WARMUP, COOLDOWN, BODY_GROUPS, BODY_GROUP_TYPES } from "./constants";

function App() {
  return (
    <AppContainer>
      <Routes />
     </AppContainer>
  );
}
// function App() {
//   const selections = {
//     title: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
//     firstName: ["John", "Micheal", "Elizabeth"],
//     lastName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"],
//   };
//   const [pickerValue, setPickerValue] = useState({
//     title: "Mr.",
//     firstName: "Micheal",
//     lastName: "Jordan",
//   });

//   return (
//     <Picker wheelMode={"natural"} value={pickerValue} onChange={setPickerValue}>
//       {Object.keys(selections).map((name) => (
//         <Picker.Column key={name} name={name}>
//           {selections[name].map((option) => (
//             <Picker.Item key={option} value={option}>
//               {option}
//             </Picker.Item>
//           ))}
//         </Picker.Column>
//       ))}
//     </Picker>
//   );
// }

export default App;

// import React, { useState } from "react";
// import "./styles/App.css";
// import workoutData from "./JSON/workoutData.json";
// import Header from "./components/Header/Header";
// import Main from "./components/MainCard/MainCard";
// import { WARMUP, COOLDOWN, BODY_GROUPS, BODY_GROUP_TYPES } from "./constants";

// function App() {

//   // const result = Object.entries(BODY_GROUPS).filter((group) =>
//   //   test.includes(group[0])
//   // );

//   const { workouts } = workoutData;
//   const [sliderStep, setSliderStep] = useState({
//     step: 0,
//     endStep: Object.values(workouts).length,
//     workouts: Object.values(workouts),
//     exercises: [
//       WARMUP,
//       BODY_GROUPS[BODY_GROUP_TYPES[0]],
//       BODY_GROUPS[BODY_GROUP_TYPES[1]],
//       COOLDOWN,
//     ].reduce((total, item) => total.concat(item.exercises), []),
//   });

//   return (
//     <div className="App">
//       <div className="version">v.1.1.3</div>
//       <Header sliderStep={sliderStep} />
//       <Main setSliderStep={setSliderStep} sliderStep={sliderStep} />
//     </div>
//   );
// }

// export default App;
