import React from 'react'
import './showcase.css'
import clock from './img/clock.png'
import bulb from './img/bulb.png'
import aws from './img/aws.png'
import programing from './img/programing.jpg'
import email from './img/email_sigs.png'


export const Showcase = () => (
      <div className="work">
        <div className="jumbotron jumbotron-fluid header">
          <h1 className="text-center header-text">Breesy Dev</h1>
        </div>

        {/*Web Development*/}
        <div className="container justify-content-center align-items-center">
          <div className="row align-items-center">
            <div class="col-md flex-grow">
              <div className="jumbotron jumbotron-fluid work-container">
                <h1>Web Development</h1>
                <div className="lead skill text-center">We build the web site you want to showcase your business</div>
                <div className="lead skill text-center">Modern design to help you stand out and attract customers</div>
                <a href="/contact" className="skill lead">Tell us about your dream project</a>
              </div>
            </div>
            <div class="col-md flex-grow">
              <img className="img img-fluid rounded animated fadeIn" src={clock} alt="coder coding" id="dev-img"/>
            </div>
          </div>
        </div>

        {/*AWS*/}
        <div className="container justify-content-center align-items-center">
          <div className="row align-items-center">
          <div class="col-md">
            <img className="img img-fluid rounded" data-aos="zoom-in-right" src={aws} alt="amazon web services logo" id="aws-img"/>
          </div>
            <div class="col-md">
              <div className="jumbotron jumbotron-fluid justify-content-center work-container">
                <h1>Amazon Web Services</h1>
                <div className="lead skill text-center">Our AWS Certified Developer can help you save money and improve performance</div>
                <div className="lead skill text-center"><a href="https://aws.amazon.com/cognito/">Set up user log in and federated identies</a></div>
                <div className="lead skill text-center"><a className="lead skill" href="https://aws.amazon.com/dynamodb/">Design cost effective and flexible databases</a></div>
                <div className="lead skill text-center"><a className="lead skill" href="https://aws.amazon.com/cloudfront/">Go serverless with Lambda and Cloudfront</a></div>
                <div className="lead skill text-center"><a href="/contact" className="skill lead">Tell us about your dream project</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
