import React from "react";
import "./Covid19.css";
function Covid19() {
  return (
    <>
      <div className="container text-center my-5 ">
        <h1 style={{ color: "#e8762b" }}>COVID-19 Safety Practices</h1>
        <h3>You are truly safe here</h3>
        <hr />
      </div>
      <div className="container w-75">
        <div className="row justify-content-center ">
          <div className="covidImg p-2 col-6">
            <img src="https://alpineriverhill.com/assets/pdf/1.jpg" alt="" />
          </div>
          <div className="covidImg p-2 col-6">
            <img
              src="
        https://alpineriverhill.com/assets/pdf/2.jpg"
              alt=""
            />
          </div>
          <div className="covidImg p-2 col-6">
            <img src="https://alpineriverhill.com/assets/pdf/3.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Covid19;
