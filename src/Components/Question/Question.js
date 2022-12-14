import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Option from "../Options/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import("./Question.css");

const Question = ({ questions }) => {
  const { id, question, options, correctAnswer } = questions;
  const [answer, setAnswer] = useState([]);
  const showAnswer = (correctAnswer) => {
    setAnswer(correctAnswer);
  };
  const checkAnswer = (optionCheck) => {
    if (optionCheck === correctAnswer) {
      toast.success("Correct Answer!!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Wrong Answer!!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="question-box container mx-auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h2 className="mb-5">{question}</h2>
      <span onClick={() => showAnswer(correctAnswer)} className="eye">
        <FontAwesomeIcon icon={faEye} />
      </span>
      <div className="options">
        {options.map((option) => (
          <Option key={id} options={option} checkAnswer={checkAnswer}></Option>
        ))}
      </div>
      <h4 className="mt-3">Correct Answer : {answer}</h4>
    </div>
  );
};

export default Question;
