import React from 'react'
import aws from './img/aws.png'
import python from './img/python.png'
import js from './img/js.png'
import react from './img/react.png'

export const IconBar = () => (
  <div className="d-flex justify-content-center icon-bar ">
    <img className="img-fluid icon-img rounded animated fadeInDown" src={aws} alt="aws"/>
    <img className="img-fluid icon-img rounded animated fadeInDown" src={python} alt="aws"/>
    <img className="img-fluid icon-img rounded animated fadeInDown" src={react} alt="aws"/>
    <img className="img-fluid icon-img rounded animated fadeInDown" src={js} alt="aws"/>
  </div>
)
