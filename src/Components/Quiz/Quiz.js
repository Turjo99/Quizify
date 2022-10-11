import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quiz = useLoaderData();
  console.log(quiz.data);
  return <div>this is quiz</div>;
};

export default Quiz;
