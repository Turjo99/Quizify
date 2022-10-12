import React from "react";
import { Link } from "react-router-dom";
import("./Nav.css");

const Nav = () => {
  return (
    <div>
      <nav class="navbar navigation">
        <div class="container-fluid">
          <Link to={"/topics"} class=" logo navbar-brand mb-0 h1 mx-auto">
            The Quizify
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="mx-auto" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/topics"}>
                  Topics
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/blogs"}>
                  Blogs
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
