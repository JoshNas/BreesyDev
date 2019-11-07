import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{ Navbar} from './Components/Navbar'
import { Home } from './Components/HomePage/Home'
import { AboutPage } from './Components/AboutMe/AboutPage'
import { ContactApp } from './Components/ContactMe/ContactApp'
import { ProjectManager } from "./Components/Projects/ProjectManager"
import { Footer } from './Components/Footer'
import { Lander } from './Components/Landing/Lander'
import { Test } from './Components/Landing/Test'

export class App extends Component {
  render() {
    return (
      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Navbar />
              <AboutPage />

            </Route>
            <Route path="/contact">
              <Navbar />
              <ContactApp />

            </Route>
            <Route path="/projects">
              <Navbar />
              <ProjectManager />
              <Footer />
            </Route>
            <Route path="/Home">
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route path="/">
              <Lander />
            </Route>
          </Switch>
        </div>

      </Router>
    );
  }
}
