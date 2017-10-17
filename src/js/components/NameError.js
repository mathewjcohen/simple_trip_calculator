import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NameError extends Component{

  render(){
    return (
      <div className="error">Name must be at least 2 letters and contain no numbers or special characters</div>
    )
  }
}

export default NameError