import React, {Component} from 'react'
import './about.css'
import dogs from './img/dogSnow.jpg'
import cornell from './img/cornell.jpg'
import play from './img/dogPlay.gif'
import lake from './img/dogsLake.jpg'
import kayak from './img/kayak.jpg'
import friends from './img/friends.jpg'
import adventures from './img/adventures.jpg'


export class Hello extends Component {
  render() {
    return(
      <div className="jumbotron jumbotron-fluid hello">
        <div className="d-flex flex-column justify-content-center">
          <div className="p-2 bd-highlight hello-intro">I began learning to code to build an application for my dad's small business and fell in love with the process. After a few months I decided to start transitioning from my career in online poker, with the goal of becoming a full time developer. In the two years since starting this journey I've built my own Python applications, MySQL and NoSQL databases, websites with JavaScript and React, and became an Amazon Web Services Certified Developer!</div>
        </div>
        <div className="p-2 bd-highlight hello-intro">
          <img src={dogs} className="rounded img-fluid hello-images" data-aos="fade" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" alt="dogs playing in snow" id="dogs"/>
        </div>
        <div className="p-2 bd-highlight hello-intro">
          In 2018 Breesy, Roux, and myself moved from Atlanta to Ithaca, NY to be with our best friend and partner, Amy, while she pursues her Phd in International Nutrition at Cornell.
        </div>
          <div className="p-2 bd-highlight hello-intro">
            <img src={cornell} className="rounded img-fluid hello-images" data-aos="fade" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" alt="cornell in snow"/>
          </div>
          <div className="p-2 bd-highlight hello-intro">
            We all enjoy the year round outdoor activities.
          </div>
          <div className="p-2 bd-highlight hello-intro">
            <img src={kayak} className="rounded img-fluid hello-images-small" data-aos="fade-up-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" alt="dogs playing in snow" id="dogs"/>
            <img src={play} className="rounded img-fluid hello-images-small" data-aos="flip-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" alt="dogs playing in snow" id="dogs"/>
            <img src={lake} className="rounded img-fluid hello-images-small" data-aos="fade-up-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" alt="dogs playing in snow" id="dogs"/>
          </div>
          <div className="p-2 bd-highlight hello-intro">
            And spending time with our amazing friends!
          </div>
          <div className="p-2 bd-highlight hello-intro">
            <img src={friends} className="rounded img-fluid hello-images" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" alt="dogs playing by fire" id="friends"/>
          </div>
          <div className="p-2 bd-highlight hello-intro">
            Looking forward to new adventures
          </div>
          <div className="p-2 bd-highlight hello-intro">
            <img src={adventures} className="rounded img-fluid hello-images" data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" alt="dogs playing by fire" id="friends"/>
          </div>
      </div>
    )
  }

}
