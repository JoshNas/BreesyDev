import React, { Component } from 'react'
import './fetch.css'
import roux from './img/roux.png'
import { Ball } from '../Ball'

export class Fetch extends Component {
  render() {
    return(
      <div className="landing-page">
        <div className="roux-container d-flex justify-content-center">
          <div className="roux animated fadeIn"><img className="img-fluid" src={roux} alt="Roux"/></div>
          <div className="home-link animated fadeInDown"><a href="/home"><button type="button" className="btn btn btn-secondary">Help Roux find her ball?</button></a></div>
        </div>
        <div className="lander-ball-container">
          <Ball />
        </div>
      </div>
    )
  }
}
