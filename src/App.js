// import logo from "./assets/logo.svg";
import "./coreStyles/App.css";

import Header from "./components/Header/Header";
import Main from "./components/MainCard/MainCard";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar />
      <Main />
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
