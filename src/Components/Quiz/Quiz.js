import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quiz = useLoaderData();
  const { name, questions } = quiz.data;

  return (
    <div>
      <h1 className="mb-5 mt-5">Quiz Topic: {name}</h1>
      <div className="quiz-container">
        {questions.map((question) => (
          <Question key={question.id} questions={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
