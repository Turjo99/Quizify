import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllQuiz from "../AllQuiz/AllQuiz";
import Header from "../Header/Header";
import("./Home.css");

const Home = () => {
  const allquiz = useLoaderData();

  const [quizID, setQuizID] = useState([]);

  const showQuiz = (id) => {
    setQuizID(id);
    console.log(quizID);
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

export default Home;
