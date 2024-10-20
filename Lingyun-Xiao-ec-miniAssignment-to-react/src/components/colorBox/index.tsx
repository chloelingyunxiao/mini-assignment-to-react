import React from "react";
import "./style.css";

export const ColorBox = () => {
  const SingleColorBox = ({ color }) => {
    return (
      <div className="singleColorBox" style={{ backgroundColor: color }}></div>
    );
  };

  const colorBoxBackgrounds = ["#00beff", "#e4a125", "#a42a2a"];

  return (
    <div className="colorBoxContainer">
      {Array.from({ length: 100 }).map((_, index) => (
        <SingleColorBox key={index} color={colorBoxBackgrounds[index % 3]} />
      ))}
    </div>
  );
};
