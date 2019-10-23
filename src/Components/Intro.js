import React, { Component} from 'react'
import "./intro.css"

export class Intro extends Component{
  render() {
    return (
      <div className="d-flex align-items-end intro-bg" id="intro">
        <div className="ml-auto p-2 bd-highlight">
          <small className="creditText">Photo by Charles Forerunner</small>
        </div>
      </div>
    )
  }
}
