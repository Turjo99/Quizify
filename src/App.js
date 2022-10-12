import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Main from "./Components/Main/Main";

import Statistics from "./Components/Statistics/Statistics";
import { ToastContainer, toast } from "react-toastify";
import Blogs from "./Components/Blogs/Blogs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Topics from "./Components/Home/Topics";

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
          element: <Topics></Topics>,
        },
        {
          path: "/topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/quiz/:quizID",

          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizID}`
            );
          },
        },
        {
          path: "/*",
          element: <ErrorPage></ErrorPage>,
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
