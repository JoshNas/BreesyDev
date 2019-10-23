import React, { Component} from 'react'
import "./about.css";


export class About1 extends Component {
  render() {
    return (
      <div className="d-flex flex-column bd-highlight mb-3 about-bg" id="intro">
        <div className="flex-fill align-self-center textBox">
          <h1 className="display-4 text-center aboutText">Work with us for the most inovative solutions for everyday problems</h1>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <small className="creditText">Photo by Riccardo Annandale</small>
        </div>
      </div>
    )
  }
}
