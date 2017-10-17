import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NameError extends Component{

  render(){
    return (
      <div className="error">Amount must be a number and contain no special characters.</div>
    )
  }
}

export default NameError