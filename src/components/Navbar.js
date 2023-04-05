import React from "react";
import "../App.css";

import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nava font-link color-nav navbar py-3 navbar-expand-lg sticky-top">

      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <img
          src="https://alpineriverhill.com/assets/img/logo.png"
          width={80}
          height={56.7}
          />
          <span className="alpineText">ALPINE RIVER HILL</span>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 justify-content-end me-auto mb-2 mb-lg-0">
            <li className=" ml nav-item">
              <div className=" nav-link active ">
                <NavLink className="navL" aria-current="page" to="/">
                  <i className="fa-solid fa-home">&nbsp;</i>
                  Home
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className=" nav-link  ">
                <NavLink className="navL" aria-current="page" to="gallery">
                  <i className="fa-solid fa-images">&nbsp;</i>
                  Gallery
                </NavLink>
              </div>
            </li>
            <li>
              <div className=" nav-link  ">
                <NavLink className="navL" aria-current="page" to="covid-19">
                  <i className="fa-solid fa-virus">&nbsp;</i>
                  COVID-19 Safety Protocol
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className=" nav-link  ">
                <NavLink className="navL" aria-current="page" to="offers">
                  <i className="fa-solid fa-crown">&nbsp;</i>
                  Offers
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className=" nav-link  ">
                <NavLink className="navL" aria-current="page" to="testimonials">
                  <i className="fa-solid fa-quote-left">&nbsp;</i>
                  Testimonials
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className=" nav-link  ">
                <NavLink className="navL" aria-current="page" to="about">
                  <i className="fa-solid fa-info-circle">&nbsp;</i>
                  About Us
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className=" nav-link  ">
                <NavLink className="navL" aria-current="page" to="contact">
                  <i className="fa-solid fa-phone">&nbsp;</i>
                  Contact Us
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
