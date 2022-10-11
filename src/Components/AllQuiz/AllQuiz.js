import React from "react";
import { Link, useNavigate } from "react-router-dom";
import("./AllQuiz.css");

const AllQuiz = ({ quiz, showQuiz }) => {
  const { name, logo, id } = quiz;

  return (
    <div className="quiz border p-4 w-75 mx-auto">
      <div className="">
        <img src={logo} className="w-75 p-2" alt="" />
      </div>
      <div className="quiz-info d-flex justify-content-between mt-5">
        <p className="fs-2 fw-bolder">{name}</p>
        <form action="/quiz">
          <Link className="link" to={`/quiz/${id}`}>
            Start Now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AllQuiz;
