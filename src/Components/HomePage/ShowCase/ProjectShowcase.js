import React from 'react'
import coffeeLogin from "../img/coffeeLogin.png"
import coffeeOrder from "../img/coffeeOrder.png"
import restuarant from "../img/restuarant.png"
import dff from "../img/dff.png"
import arb from "../img/arb.png"
import "./showcase.css"


export const ProjectShowcase  = () => (
  <div data-aos="fade-up-right" data-aos-duration="3000" className="jumbotron jumbotron-fluid site-display project-showcase">
    <div id="projectShowcase" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#projectShowcase" data-slide-to="0" className="active"></li>
        <li data-target="#projectShowcase" data-slide-to="1"></li>
        <li data-target="#projectShowcase" data-slide-to="2"></li>
        <li data-target="#projectShowcase" data-slide-to="3"></li>
        <li data-target="#projectShowcase" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={coffeeLogin} alt="First slide" id="slide-image"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={coffeeOrder} alt="Second slide" id="slide-image"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={restuarant} alt="Third slide" id="slide-image"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={dff} alt="Third slide" id="slide-image"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={arb} alt="Third slide" id="slide-image"/>
        </div>
      </div>
        <a className="carousel-control-prev" href="#projectShowcase" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#projectShowcase" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>

  </div>
)
