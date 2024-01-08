import ReactDOM from "react-dom/client"; 
import React from 'react'; // <---changed to incluce non jsx code, no idea

import App from "./App.jsx";
import "./index.css";

// we select the root here
const entryPoint = document.getElementById("root");

// the app component and its children are rendered here inside the root element
ReactDOM.createRoot(entryPoint).render(React.createElement(App)); //  <---changed to incluce non jsx code, no idea

// ReactDOM.createRoot(entryPoint).render(App />)
