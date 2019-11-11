import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{ Navbar} from './Components/Navbar'
import { AboutPage } from './Components/AboutMe/AboutPage'
import { ContactApp } from './Components/ContactMe/ContactApp'
import { ProjectManager } from "./Components/Projects/ProjectManager"
import { Footer } from './Components/Footer'
import { Fetch } from './Components/FetchPage/Fetch'
import { Home } from './Components/HomePage/Home'

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
            <Route path="/fetch">
              <Fetch />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </Router>
    );
  }
}
