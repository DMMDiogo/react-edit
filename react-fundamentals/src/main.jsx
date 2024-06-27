import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render();

const title = React.createElement(
  "h2",
  {
    class: "titulo",
  },
  "Hello Edit!"
);

const cubo = React.createElement("div", {
  class: "cubo",
});

const createMainContainer = React.createElement(
  "div",
  {
    class: "main-container",
  },
  title,
  cubo,
  cubo,
  cubo,
  cubo,
  cubo,
  cubo
);

console.log(createMainContainer);
const container = document.getElementById("root");
ReactDOM.createRoot(container).render(createMainContainer);
