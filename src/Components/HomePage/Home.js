import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
import { Intro } from './Intro.js'
import { Coffee } from './Coffee.js'
import './home.css'
import roux from './img/roux.png'




export class Home extends Component {
  render() {

    return(
      <div id="container">


        <div id="intro"><Intro /></div>

        <div id="coffee"><Coffee /></div>
        <div id="coffee"><Coffee /></div>
        <Zoom>{/*Using Zoom Effect*/}
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </Zoom>
        <div id="coffee"><Coffee /></div>




      </div>
    )
  }
}
