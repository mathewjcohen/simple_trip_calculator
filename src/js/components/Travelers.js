import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import uuid from 'uuid'

import Traveler from './Traveler'

class Travelers extends Component{
  
  render(){
    let travelers;
    if(this.props.travelers){
      travelers = this.props.travelers.map(traveler => {
        return (
          <Traveler key={uuid.v4()} traveler={traveler} />
        )
      })
    }
    return (
      <div id="travelers">
        {travelers}
      </div>
    )
  }
}

export default Travelers