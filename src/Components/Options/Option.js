import React from "react";
import "./Option.css";

const Option = ({ options, checkAnswer }) => {
  // console.log(options);
  return (
    <div className="single-options">
      <div onClick={() => checkAnswer(options)} className="option text-center">
        {options}
      </div>
    </div>
  );
};

export default Option;
