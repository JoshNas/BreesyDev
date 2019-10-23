import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <navbar  className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="nav">
        <div className="container-fluid">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </navbar>
    )
  }
}
