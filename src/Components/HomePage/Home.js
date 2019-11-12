import React, { Component } from 'react'
import { Intro } from './Intro.js'
import { ButtonLinks } from './ButtonLinks.js'
import { Skills } from './Skills.js'
import { IconBar } from './IconBar.js'
import './home.css'


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {skills: true};

    setTimeout(() => this.setState({skills: false}), 7500);
  }

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
      </div>
    )
  }
}
