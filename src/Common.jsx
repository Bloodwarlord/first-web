import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <Navbar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluide nav_bg ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex jusitfy-content-center flex-column">
                  <h1>
                    {props.header}
                    <strong className="brand_name"> {props.title}</strong>
                  </h1>
                  <h2 className="my-3 ">{props.desc}</h2>
                  <div className=" mt-3">
                    <NavLink className="btn-get-started" to="/Service">
                      {props.button}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 " id="header-img">
                  <img
                    src={props.imgsrc}
                    className="animated"
                    alt="Common image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
