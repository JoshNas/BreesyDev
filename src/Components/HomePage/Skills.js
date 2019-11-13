import React, { Component } from 'react'
import aws from './img/aws.png'
import python from './img/python.png'
import js from './img/js.png'
import react from './img/react.png'

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {image:aws};

    setTimeout(() => this.setState({image: python}), 2100);
    setTimeout(() => this.setState({image: react}), 4100);
    setTimeout(() => this.setState({image: js}), 6100);
  }

  render() {
    return(
      <div className="d-flex justify-content-center">
        <img className="img-fluid skill-icon" src={this.state.image} alt="js"/>
      </div>

    )
  }
}
