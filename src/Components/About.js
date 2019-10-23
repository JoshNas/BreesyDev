import React  from 'react'
import "./about.css";
import { About1 } from './About1'
import { About2 } from './About2'
import { About3 } from './About3'


export const About = () => (
  <div className="jumbotron jumbotron-fluid" id="about">
    <div id="myCarousel" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
        <div className="view">
          <About1/>
          <div className="mask rgba-black-light"></div>
        </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <About2/>
            <div className="mask rgba-black-light"></div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <About3/>
            <div className="mask rgba-black-light"></div>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>
  </div>



)
