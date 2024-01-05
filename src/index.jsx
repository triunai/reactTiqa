import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// we select the root here
const entryPoint = document.getElementById("root");

// the app component and its children are rendered here inside the root element
ReactDOM.createRoot(entryPoint).render(<App />);
