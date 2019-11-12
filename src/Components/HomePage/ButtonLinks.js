import React from 'react'
import profile from './img/profile.png'
import code from './img/code.gif'
import contact from './img/coffee2.gif'
import git from './img/github-logo.png'
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: 'rgb(112,128,144)',
    color: 'rgba(255, 255, 255)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(16),
    marginTop: 50
  },
}))(Tooltip);

export const ButtonLinks = () => (
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center">
          <HtmlTooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="left-start"
                   title="Meet Josh">
            <a className="imageLinks" href="/about" data-for="helloworld">
              <img className="img-fluid rounded-circle button-link" src={profile} alt="profile"/>
            </a>
          </HtmlTooltip>
          <HtmlTooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="right-start"
                   title="See Projects">
                   <a className="imageLinks" href="/projects" data-toggle="tooltip" data-placement="top" title="See Projects">
                     <img className="img-fluid rounded-circle button-link" src={code} alt="code gif"/>
                   </a>
          </HtmlTooltip>
        </div>
        <div className="d-flex justify-content-center">
          <HtmlTooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="left-start"
                   html={true}
                   title="Say Hi">
                   <a className="imageLinks" href="/contact">
                     <img className="img-fluid rounded-circle button-link" src={contact} alt="contact"/>
                   </a>
          </HtmlTooltip>
          <HtmlTooltip TransitionComponent={Zoom}
                   TransitionProps={{ timeout: 600 }}
                   placement="right-start"
                   title="Checkout GitHub">
                   <a className="imageLinks" href="https://github.com/JoshNas" data-toggle="tooltip" data-placement="top" title="Checkout GitHub">
                     <img className="img-fluid rounded-circle button-link" src={git} alt="github"/>
                   </a>
          </HtmlTooltip>
        </div>
      </div>
    )
