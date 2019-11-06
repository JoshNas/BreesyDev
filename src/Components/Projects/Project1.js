import React  from 'react'
import ModalImage from "react-modal-image";
import "./projects.css";
import arb1 from './img/arb1.png'
import arb2 from './img/arb2.png'
import arb3 from './img/arb3.png'

const projectOne = 'Arbitrage Finder'
const projectOneDetails = 'Application that cleans and analyzes data pulled from multiple sources to find profitable oppourtunities in a variety of markets. Utilizes Python to acquire, clean, and combine data then iterates through hundreds of combinations efficiently to return situations where arbitrage is available. Includes customizable settings for choosing markets and ability to have results sent by email or displayed within the application.'

export const Project1 = () => (
  <div className="container">
    <h3 className="col text-center" id="project1">{projectOne}</h3>
    <p className="col text-center lead">{projectOneDetails}</p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={arb1} large={arb1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={arb2} large={arb2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={arb3} large={arb3} className="projectImage"/>
      </div>
    </div>

    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" href="https://github.com/JoshNas/Arb" target="blank" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>

  </div>
)
