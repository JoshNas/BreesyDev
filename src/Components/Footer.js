import React from 'react'
import './Footer.css'
import logo from './img/logoSmall.png'

export const Footer = () => (
  <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Josh Nassif</small>
    </div>
    <div className="container social-footer">
      <a className="logo" href="https://breesydev.com/">
        <img src={logo} alt="Breesy"/>
      </a>
      <a className="btn btn-social-icon btn-github" href="https://github.com/JoshNas/" target="blank">
        <span className="fa fa-github"></span>
      </a>
      <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/joshnassif/" target="blank">
        <span className="fa fa-linkedin"></span>
      </a>
    </div>
  </footer>
)
