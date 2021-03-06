import React, { Component} from 'react'
import './about.css'
import profilepic from './img/profile.jpg'
import profilepicalt from './img/profileAlt.png'
import background from './img/background.jpg'
import backgroundAlt from './img/backgroundAlt.gif'

const background1 = {
  backgroundImage: `linear-gradient(rgba(0, 0, 80, 0.2), rgba(0, 0, 0, 0.9)), url(${background})`,
}

const background2 = {
  backgroundImage: `url(${backgroundAlt})`
}

const title = 'AWS Certified Developer'
const specializiations = 'Python, JavaScript, React.js'
const skillOne = 'Software development with Python'
const skillTwo = 'Responsive web design employing JavaScript and React'
const skillThree = 'Web development utilizing Lambda, API Gateway, DynamoDB, and other AWS services'

export class About extends Component {
  constructor() {
    super()
    this.state = {
      originalBackground: true,
      originalProfile: true
    }
  }

  changeBackground () {
    this.setState({
      originalBackground: !this.state.originalBackground
    })
  }

  changeProfile () {
    this.setState({
      originalProfile: !this.state.originalProfile
    })
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid paral" id="about" style={this.state.originalBackground ? background1 : background2} onClick={this.changeBackground.bind(this)}>
        <div className="container text-center about">
          <img src={this.state.originalProfile ? profilepic : profilepicalt} onClick={this.changeProfile.bind(this)} className="rounded-circle img-fluid" alt="josh standing on mountain" />
          <h1 className="display-3">{title}</h1>
          <h2 className="display-4">{specializiations}</h2>
          <p className="lead" id="skills">{skillOne}</p>
          <p className="lead clickp" id="skills">{skillTwo}</p>
          <p className="lead" id="skills">{skillThree}</p>
        </div>
      </div>
    )
  }
}
