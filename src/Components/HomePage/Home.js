import React, { Component } from 'react'
import { Intro } from './Intro'
import { SiteShowcase } from './ShowCase/SiteShowcase'
import { ProjectShowcase } from './ShowCase/ProjectShowcase'
import { Skills } from './ShowCase/Skills'





export class Home extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <SiteShowcase />
        <ProjectShowcase />
        <Skills />
      </div>
    )
  }
}
