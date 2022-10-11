import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Quiz from "./Components/Quiz/Quiz";
import Statistics from "./Components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/quiz",
          element: <Quiz></Quiz>,
        },
        {
          path: "/statistics",
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
