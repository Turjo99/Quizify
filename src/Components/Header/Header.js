import React from "react";
import("./Header.css");

const Header = () => {
  return (
    <div className="header">
      <div className="card mb-3  p-4">
        <div className="row g-0">
          <div className="col-md-6 col-sm-12">
            <img
              src="https://img.freepik.com/free-vector/business-idea-concept-with-people_52683-28609.jpg?w=2000"
              className="img-fluid rounded-start w-100"
              alt="..."
            />
          </div>
          <div className="col-md-6 col-sm-12 my-auto">
            <div className="card-body ">
              <h5 className="card-title fs-1 fw-bolder">
                Explore the best in you with us
              </h5>
              <p className="card-text fs-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
