import React from "react";
import "./textImage.css";
import HDButton from "./HDButton";

const TextImage = ({ title, exp, hdVisState }) => {
  return (
    <div className="main-text">
      <h3>{title}</h3>
      <div className="inner-text">
          <p>{exp}</p>
          </div>
          <HDButton hdVisState={hdVisState} />
    </div>
  );
};

export default TextImage;
