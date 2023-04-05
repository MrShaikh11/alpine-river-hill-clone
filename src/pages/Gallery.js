import React from "react";

import "../pages/Gallery.css";

function Gallery() {
  return (
    <>
      <div className="container gallery mt-5">
        <h1 className="text-center">Beauty of Alpine Riverhill</h1>
        <h4 className="text-center">Real photos of the villa</h4>

        

        <div className="row p-5">
          <div className="col-4 galleryImage py-1 galleryImg">
            <img
              src="https://alpineriverhill.com/assets/img/album/Exterior1595238434.png"
              alt=""
            />
          </div>
          <div className="col-4 galleryImage py-1 galleryImg">
            <img
              src="
        https://alpineriverhill.com/assets/img/album/Swimming%20Pool1595238534.png"
              alt=""
            />
          </div>
          <div className="col-4 galleryImage py-1 galleryImg">
            <img
              src="https://alpineriverhill.com/assets/img/album/Living%20Room%201595238705.png"
              alt=""
            />
          </div>
          <div className="col-4 galleryImage py-1  galleryImg">
            <img
              src="https://alpineriverhill.com/assets/img/album/Master%20Bedrooms1595238820.png"
              alt=""
            />
          </div>
          <div className="col-4 galleryImage py-1  galleryImg">
            <img
              src="https://alpineriverhill.com/assets/img/album/Lobby%20&%20Passage1595417715.png"
              alt=""
            />
          </div>
          <div className="col-4 galleryImage py-1  galleryImg">
            <img
              src="https://alpineriverhill.com/assets/img/album/Washrooms1595417823.png"
              alt=""
            />
          </div>
          <div className="col-4 galleryImage py-1  galleryImg">
            <img
              src="https://alpineriverhill.com/assets/img/album/Guests1595418043.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
