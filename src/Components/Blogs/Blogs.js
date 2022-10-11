import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs container">
      <div className="blog p-4 m-4">
        <h2 className="mb-4 fs-5">What is the Purpose of react router?</h2>
        <p>
          React Router is a JavaScript library used to handle client and
          server-side routing in React applications. It allows the creation of
          single-page web or mobile apps that allows navigation without the page
          refreshing. React Router also gives us access to browser history
          features while maintaining the correct view of the application. React
          Router uses a component-based approach to routing. It provides
          different routing components as needed by the application
        </p>
      </div>
      <div className="blog p-4 m-4">
        <h2 className="mb-4">How Context API Works?</h2>
        <p>
          Context is a built-in API introduced in ​​React 16.3. It makes it
          possible to pass data from parent to children nested deep down the
          component tree directly, instead of passing it down through a chain of
          props. It can be used to solve the same problems as Redux does, but it
          doesn’t provide a strict way of state manipulation to ensure
          predictable behavior. Despite its low-level nature, it might be the
          perfect solution in some cases.
        </p>
      </div>
      <div className="blog p-4 m-4">
        <h2 className="mb-4">What is the Purpose of useRef?</h2>
        <p>
          useRef is a hook introduced with other hooks in React version 16.8 and
          is mainly used for creating a reference of the DOM element or directly
          accessing it inside a functional component.The useRef returns a
          mutable ref object. This object has a property called .current. The
          value is persisted in the refContainer.current property. These values
          are accessed from the current property of the returned object. The
          .current property could be initialised to the passed argument
          initialValue e.g. useRef(initialValue). The object can persist a value
          for a full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
