import React from 'react'
import aws from './img/aws.png'
import python from './img/python.png'
import js from './img/js.png'
import react from './img/react.png'

export const IconBar = () => (
  <div className="d-flex justify-content-center icon-bar ">
    <img className="img-fluid icon-img rounded animated fadeInDown" src={aws} alt="amazon web service"/>
    <img className="img-fluid icon-img rounded animated fadeInDown" src={python} alt="python"/>
    <img className="img-fluid icon-img rounded animated fadeInDown" src={react} alt="react j s"/>
    <img className="img-fluid icon-img rounded animated fadeInDown" src={js} alt="web development"/>
  </div>
)
