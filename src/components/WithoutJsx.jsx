import React from "react";

const WithoutJSX = () => {
  return React.createElement(
    "div",
    {id: "element-id", className: "title"},
    React.createElement("h1", null, "Component Without JSX"),
    React.createElement(
      "div",
      null,
      React.createElement("p", null, "Ini adalah component tanpa JSX")
    )
  );
};

export default WithoutJSX;
