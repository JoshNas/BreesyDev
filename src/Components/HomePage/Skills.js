import React from 'react'
import aws from './img/aws.png'
import python from './img/python.png'
import js from './img/js.png'
import react from './img/react.png'
import './Skills.css'

export const Skills = () => (
  <div className="d-flex justify-content-center">
    <div className="d-flex justify-content-center big-skills">
      <img className="img-fluid rounded" src={js} alt="web development"/>
      <img className="img-fluid rounded" src={react} alt="react"/>
      <img className="img-fluid rounded" src={python} alt="python"/>
      <img className="img-fluid rounded" src={aws} alt="amazon web service"/>
    </div>
  </div>
)
