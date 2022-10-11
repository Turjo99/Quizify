import React from "react";

const AllQuiz = ({ quiz }) => {
  const { name, logo } = quiz;
  return (
    <div className="quiz border rounded p-4">
      <div className="">
        <img src={logo} className="w-75 p-2" alt="" />
      </div>
      <div className="quiz-info d-flex justify-content-between mt-5">
        <p className="fs-2 fw-bolder">{name}</p>
        <button type="button" class="btn btn-primary">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default AllQuiz;
