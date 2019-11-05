import React from 'react'
import spicewhirls from "../img/spicewhirls.png"
import breesydesigns from "../img/breesydesigns.png"
import socialbooks from "../img/socialbooks.png"
import treatshop from "../img/treatshop.png"
import "./showcase.css"


export const SiteShowcase  = () => (
  <div data-aos="flip-down" data-aos-duration="1000" className="jumbotron jumbotron-fluid site-display">
    <div id="siteShowcase" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={breesydesigns} alt="First slide" id="slide-image"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={socialbooks} alt="Second slide" id="slide-image"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={spicewhirls} alt="Third slide" id="slide-image"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={treatshop} alt="Third slide" id="slide-image"/>
        </div>
      </div>
    </div>
  </div>
)
