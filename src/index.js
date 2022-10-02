import React from "react";
import ReactDOM from "react-dom/client";

// ana app componentimizi import ediyoruz
import App from "./App";
// ana css dosyamızı import ediyoruz
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
