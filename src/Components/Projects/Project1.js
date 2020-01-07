import React  from 'react'
import "./projects.css";
import arb from './img/arb.png'

const projectOne = 'Arbitrage Finder'
const projectOneDetails = 'Application that cleans and analyzes data pulled from multiple sources to find profitable oppourtunities in a variety of markets. Utilizes Python to acquire, clean, and combine data. Iterates through thousands of combinations to return situations where arbitrage is available. Includes customizable settings for choosing markets and ability to have results sent by email in addition to being displayed within the user interface built with Kivy.'

export const Project1 = () => (
  <div className="container">
    <h1 className="col text-center" id="project1">{projectOne}</h1>
    <p className="col text-center lead">{projectOneDetails}</p>
    <div className="col text-center">
        <img className="img img-fluid" src={arb} alt="arbitrage program"/>
    </div>

    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" href="https://github.com/JoshNas/Arb" target="blank" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>
  </div>
)
