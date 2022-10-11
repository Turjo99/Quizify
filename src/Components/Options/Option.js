import React from "react";
import "./Option.css";

const Option = ({ options }) => {
  console.log(options);
  return (
    <div className="single-options">
      <div className="option text-center">{options}</div>
    </div>
  );
};

export default Option;
