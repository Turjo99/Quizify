import React from "react";
import Option from "../Options/Option";
import("./Question.css");

const Question = ({ questions }) => {
  const { question, options } = questions;
  console.log(options);

  return (
    <div className="question-box">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option) => (
          <Option options={option}></Option>
        ))}
      </div>
      ;
    </div>
  );
};

export default Question;
