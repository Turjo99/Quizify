import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AllQuiz = ({ quiz, showQuiz }) => {
  const { name, logo, id } = quiz;
  const navigate = useNavigate();
  const navigatequiz = (id) => {
    navigate("/quiz");
    showQuiz(id);
  };
  return (
    <div className="quiz border rounded p-4">
      <div className="">
        <img src={logo} className="w-75 p-2" alt="" />
      </div>
      <div className="quiz-info d-flex justify-content-between mt-5">
        <p className="fs-2 fw-bolder">{name}</p>
        <form action="/quiz">
          <Link to={`/quiz/${id}`}>Start Now</Link>
        </form>
      </div>
    </div>
  );
};

export default AllQuiz;
