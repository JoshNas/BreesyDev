import React from 'react'
import ModalImage from "react-modal-image";
import "./projects.css";
import df1 from './img/df1.png'
import df2 from './img/df2.png'
import df3 from './img/df3.png'

const projectThree = 'Optimizer'
const projectThreeDetails = 'Utilizes Google OR-Tools to find optimal solution from thousands of possibilites. The application takes input from user, solve the problem based on the given data and parameters, then return the optimal solution.'

export const Project3 = () => (
  <div className="container">
    <h1 className="col text-center">{projectThree}</h1>
    <p className="col text-center lead">{projectThreeDetails}</p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={df1} large={df1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={df2} large={df2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={df3} large={df3} className="projectImage"/>
      </div>
    </div>
    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" data-toggle="modal" data-target=".demo-popup" href="#contact" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>

      {/* Modal popup */}
      <div class="modal fade demo-popup" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
              <p>This complete repository is not available publicly.</p>
              <a href="https://github.com/JoshNas/Optimizer_Public" target="blank">Click here to see the data cleaner, solver, and user interface files</a>
              <p>If you're considering hiring me and would like more information on how the application works please <a href="https://joshnassif.com/contact" target="blank">contact me</a> Thanks!</p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal popup */}


  </div>
)
