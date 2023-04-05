import React from "react";
import { Link } from "react-router-dom";

import "./Offers.css";
const Offers = () => {
  return (
    <>
      <div className="container text-center my-5 ">
        <h1 style={{ color: "#e8762b" }}>OFFERS AT ALPINE RIVERHILL</h1>
        <h3>Guest Reward Programmes</h3>
        <hr />
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  <i class="fa-solid fa-crown crown"></i>Loyalty Programme:{" "}
                </h3>
                <hr />
                <p class="card-text">
                  At Alpine Riverhill, we appreciate loyalty as much as you do.
                  To acknowledge the same, we offer a discount of ₹2,000 on your
                  next booking with us. No questions asked.
                </p>
                <Link to="/offers" class="btn cardBtn btn-primary">
                  GRAB NOW
                </Link>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  <i class="fa-solid fa-crown crown"></i>Referral Programme:{" "}
                </h3>
                <hr />

                <p class="card-text">
                  Loved your stay at Alpine Riverhill? Refer us to your family
                  and friends and get a flat discount of ₹2,000 on your next
                  booking with us.
                </p>
                <Link to="/offers" class="btn cardBtn btn-primary">
                  GRAB NOW
                </Link>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  <i class="fa-solid fa-crown crown"></i>Let us serve you
                  longer:{" "}
                </h3>
                <hr />

                <p class="card-text">
                  Book for a minimum of 3 nights and get a whooping 25% discount
                  on your reservation.
                </p>
                <Link to="/offers" class="btn cardBtn btn-primary">
                  GRAB NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
