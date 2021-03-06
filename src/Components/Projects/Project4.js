import React from 'react'
import ModalImage from "react-modal-image";
import "./projects.css";
import coffeeLogin from './img/coffeeLogin.png'
import coffeeOrder from './img/coffeeOrder.png'


const projectFour = 'Coffee Shop'
const projectFourDetails = 'Coffee shop app built with Python, utilizing MySQL for database management and Kivy for user interface. Provides user log in and order input screen. Orders are stored and can be retrived from MySQL database.'

export const Project4 = () => (
  <div className="container">
    <h1 className="col text-center">{projectFour}</h1>
    <p className="col text-center lead">{projectFourDetails}</p>
    <div class="row" >
      <div className="col-md-6">
        <ModalImage small={coffeeLogin} large={coffeeLogin} className="projectImage"/>
      </div>
      <div className="col-md-6">
        <ModalImage small={coffeeOrder} large={coffeeOrder} className="projectImage"/>
      </div>
    </div>
    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" href="https://github.com/JoshNas/Coffee" target="blank" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>
  </div>
)
