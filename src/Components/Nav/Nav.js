import React from "react";
import { Link } from "react-router-dom";
import("./Nav.css");

const Nav = () => {
  return (
    <div>
      <nav class="navbar navigation">
        <div class="container-fluid">
          <Link to={"/home"} class=" logo navbar-brand mb-0 h1 mx-auto">
            Quizify
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/home"}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/statistics"}>
                  Statistics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
