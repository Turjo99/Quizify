import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Quiz from "./Components/Quiz/Quiz";
import Statistics from "./Components/Statistics/Statistics";
import { ToastContainer, toast } from "react-toastify";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  <ToastContainer />;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/quiz/:quizID",

          loader: ({ params }) => {
            console.log(params.quizID);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizID}`
            );
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "/blogs",

          element: <Blogs></Blogs>,
        },
        {},
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
