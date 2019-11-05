import React from 'react'
import aws from '../img/aws.png'
import python from '../img/python.png'
import js from '../img/js.png'
import react from '../img/react.png'

export const Skills = () => (
  <div className="d-flex flex-column justify-content-center skills-container">
    <div className="d-flex justify-content-center skills">
      <img data-aos="zoom-in-down" data-aos-duration="1500" src={aws} className='img-fluid rounded aws-image' alt="AWS"/>
      <img data-aos="zoom-in-down" data-aos-duration="1500" src={python} className='img-fluid rounded skills-image' alt="Python"/>
    </div>
    <div className="d-flex justify-content-center skills">
      <img data-aos="zoom-in-up" data-aos-duration="1500" src={js} className='img-fluid rounded skills-image' alt="JavaScript"/>
      <img data-aos="zoom-in-up" data-aos-duration="1500" src={react} className='img-fluid rounded skills-image' alt="React"/>
    </div>
  </div>


)
