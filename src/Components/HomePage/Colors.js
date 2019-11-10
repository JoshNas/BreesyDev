import React, { Component } from 'react'

export class Colors extends Component {
  render() {
    let nameDisplayDiv = document.getElementById('display')
    let containerDiv = document.getElementById('container')

    function refresh() {
    	let scrollTop = containerDiv.scrollTop + containerDiv.clientHeight / 2
      let height = 0
      for (let child of containerDiv.children) {
      	let top = height
        let bottom = height += child.clientHeight
        if (top < scrollTop && bottom > scrollTop) {
        	// Found the element that's currently viewed!
        	nameDisplayDiv.innerHTML = child.style.backgroundColor
          break
        }
      }
    }

    containerDiv.onscroll = refresh

    refresh()

    let body = {
      display:"flex",
      margin: 0
    }

    let red = {flex:1,
      height:"100vh",
      backgroundColor:"red"};

    let green = {flex:1,
      height:"100vh",
      backgroundColor:"green"}

    let pink = {flex:1,
      height:"100vh",
      backgroundColor:"pink"};

    let orange = {flex:1,
      height:"100vh",
      backgroundColor:"orange"};

    let blue = {flex:1,
      height:"100vh",
      backgroundColor:"blue"};



    return(
      <body style={body}>
        <div style={green} id="container">
          <div style={red}></div>
          <div style={pink}></div>
          <div style={green}></div>
          <div style={orange}></div>
        </div>
        <div style={blue} id="display" />
      </body>
    )
  }
}
