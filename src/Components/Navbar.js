import React, { Component } from 'react'
import logo from './img/logo.png'
import './navbar.css'
import './social.css'

const linkedIn = 'https://www.linkedin.com/in/joshnassif/'
const github = 'https://www.github.com/JoshNas/'

export class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <navbar  className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="nav">
          <div className="container-fluid">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNav">
              <a className="navbar-brand" href="/">
                <img src={logo} className="d-inline-block align-top rounded logo" alt="logo"/>
              </a>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a className="nav-link" href="/about">Meet Josh</a></li>
                <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                <li className="nav-item dropdown">
                  <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Websites
                  </button>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" target="blank" href="https://business.breesydev.com">Breesy Designs</a>
                    <a className="dropdown-item" target="blank" href="https://aubreyspastries.breesydev.com">Aubrey's Pastries</a>
                    <a className="dropdown-item" target="blank" href="https://coffee.joshnassif.com">Coffee Shop</a>
                    <a className="dropdown-item" target="blank" href="https://books.joshnassif.com">Book Club</a>
                  </div>
                </li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact Me</a></li>
              </ul>
            </div>
            <div className="navbar-brand pull-right social-links">
                <a className="btn btn-sm btn-social btn-linkedin social-button" href={linkedIn} target="blank">
                  <span className="fa fa-linkedin social-icon"></span> LinkedIn
                </a>
                <a className="btn btn-sm btn-social btn-github social-button" href={github} target="blank">
                  <span className="fa fa-github social-icon"></span> GitHub
                </a>
            </div>
          </div>
        </navbar>
      </div>
    )
  }
}
