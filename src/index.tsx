import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./core/store/store";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/gaap">
      <App />
    </BrowserRouter>
  </Provider>
);
