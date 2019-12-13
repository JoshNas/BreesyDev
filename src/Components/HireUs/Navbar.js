import React, { Component } from 'react'
import logo from '../img/logo.png'


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
                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </navbar>
      </div>
    )
  }
}
