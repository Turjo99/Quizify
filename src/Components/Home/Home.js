import React from "react";
import { useLoaderData } from "react-router-dom";
import AllQuiz from "../AllQuiz/AllQuiz";
import("./Home.css");

const Home = () => {
  const allquiz = useLoaderData();
  console.log(allquiz.data);
  return (
    <div className="home-container mt-5 gap-3 ">
      {allquiz.data.map((quiz) => (
        <AllQuiz quiz={quiz}></AllQuiz>
      ))}
    </div>
  );
};

export default Home;
