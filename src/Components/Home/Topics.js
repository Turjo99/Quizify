import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllQuiz from "../AllQuiz/AllQuiz";
import Header from "../Header/Header";
import("./Home.css");

const Topics = () => {
  const allquiz = useLoaderData();

  const [quizID, setQuizID] = useState([]);

  const showQuiz = (id) => {
    setQuizID(id);
  };
  return (
    <div className="">
      <Header></Header>
      <div className="home-container mt-5 gap-3 ">
        {allquiz.data.map((quiz) => (
          <AllQuiz quiz={quiz} showQuiz={showQuiz}></AllQuiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
