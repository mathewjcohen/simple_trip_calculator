import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Calculator from './Calculator'

class Body extends Component{
  render(){
    return (
      <div id="wrap">
        <div className="container">
          <Calculator />
        </div>
      </div>
    )
  }
}

export default Body