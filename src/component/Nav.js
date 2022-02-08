import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Nav = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MIDNAL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          htmlFor="navbar-content"
          className="collpase navbar-collapse d-flex justify-content-end"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/streams/show" className="nav-link">
                Stream
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/streams/new" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item"><GoogleAuth /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
