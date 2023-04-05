import React from 'react'
import Mid from "../components/Mid";
import Carousel from "../components/Carousel";
import Form from "../components/Form";
import Venue from "../components/Venue";
import Youtube from "../components/Youtube";
import "../App.css";


function Home() {
  return (
        <>
        <div className="page-container">
          <div className="content-wrap">
            
          <Venue />
            <div className="p-5 carousel">
              <Mid />
              <Carousel />
            </div>
            <Form />
            <Youtube />
          </div>
          </div>

        </>
  )
}

export default Home