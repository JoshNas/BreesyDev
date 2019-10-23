import React, { Component} from 'react'
import "./about.css";


export class About2 extends Component {
  render() {
    return (
      <div className="d-flex flex-column bd-highlight mb-3 about-bg2" id="intro">
        <div className="flex-fill align-self-center textBox">
          <h1 className="display-4 text-center aboutText">Build your business with the most up to date modern designs and concepts</h1>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <small className="creditText">Photo by Helloquence</small>
        </div>
      </div>
    )
  }
}
