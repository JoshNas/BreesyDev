import React, { Component } from 'react'
import { Intro } from './Intro.js'
import { ButtonLinks } from './ButtonLinks.js'
import { Skills } from './SkillsSmooth.js'
import { IconBar } from './IconBar.js'
import './home.css'


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {skills: true,
                  skipButton: true};

    setTimeout(() => this.setState({skills: false, skipButton: false}), 7600);
  }

  onClick = () => (
    this.setState({skills: false, skipButton: false})
  )

  render() {
    return(
      <div className="home">
        <IconBar />
        <Intro />
        <div className="d-flex justify-content-center icon-container">
          { this.state.skills ?
            <Skills /> :
            <ButtonLinks /> }
        </div>
        <div className="d-flex justify-content-center">
          { this.state.skipButton &&
            <div className="d-flex justify-content-center button-container">
              <button className="btn btn-secondary animated pulse skip-button"
                onClick={this.onClick}>
                <span>Skip</span>
              </button>
            </div> }
        </div>
      </div>
    )
  }
}
