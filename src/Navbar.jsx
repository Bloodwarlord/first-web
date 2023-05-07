import react from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  return (
    <react.Fragment>
      <div className="container-fluide nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  My Page
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu" : "nav-link"
                        }
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu" : "nav-link"
                        }
                        to="/Service"
                      >
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu" : "nav-link"
                        }
                        to="/About"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu" : "nav-link"
                        }
                        to="/Contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </react.Fragment>
  );
};

export default Navbar;
