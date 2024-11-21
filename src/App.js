import { useRef, useState } from "react";
// import logo from "./assets/logo.svg";
import "./coreStyles/App.css";

import Header from "./components/Header/Header";
import Main from "./components/MainCard/MainCard";
import workoutData from "./workoutData.json";

function App() {
  const { workouts } = workoutData;
  const [sliderStep, setSliderStep] = useState(0)
  
  const flow = useRef({
    step: 0,
    endStep: workouts.length,
    workouts: Object.values(workouts),
  });
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="App">
      <div className="version" >v.1.1.1</div>
      <Header sliderStep={sliderStep} />
      <Main flow={flow} setSliderStep={setSliderStep} />
    </div>
  );
}
// {
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// }

export default App;
