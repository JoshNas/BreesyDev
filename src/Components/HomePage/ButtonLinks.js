import React from 'react'
import profile from './img/profile.png'
import code from './img/code.gif'
import contact from './img/coffee.gif'
import git from './img/github-logo.png'
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';





export const ButtonLinks = () => (
      <div className="d-flex flex-column justify-content-center skills-container">
        <div className="d-flex justify-content-center">
          <Tooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="left-start"
                   title="Meet Josh">
            <a className="imageLinks" href="/about" data-for="helloworld">
              <img className="img-fluid rounded-circle" src={profile} alt="profile"/>
            </a>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="right-start"
                   title="See Projects">
                   <a className="imageLinks" href="/projects" data-toggle="tooltip" data-placement="top" title="See Projects">
                     <img className="img-fluid rounded-circle" src={code} alt="code gif"/>
                   </a>
          </Tooltip>
        </div>
        <div className="d-flex justify-content-center">
          <Tooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="left-start"
                   title="Say Hi">
                   <a className="imageLinks" href="/contact" data-toggle="tooltip" data-placement="top" title="Say Hi">
                     <img className="img-fluid rounded-circle" src={contact} alt="contact"/>
                   </a>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="right-start"
                   title="Checkout GitHub">
                   <a className="imageLinks" href="https://github.com/JoshNas" data-toggle="tooltip" data-placement="top" title="Checkout GitHub">
                     <img className="img-fluid rounded-circle" src={git} alt="github"/>
                   </a>
          </Tooltip>


        </div>
      </div>
    )
