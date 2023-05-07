import React from "react";
import Navbar from "./Navbar";

const Contact = (props) => {
  return (
    <>
      <Navbar />

      <div className="container-fluide nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="pd-2"> this is my Contact page </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact };
