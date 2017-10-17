import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import uuid from 'uuid'

class Traveler extends Component{
  render(){
    let amounts;
    let total = 0;
    if(this.props.traveler.amounts.length > 0){
      amounts = this.props.traveler.amounts.map(amount => {
        total += amount
        return (
          <li key={uuid.v4()}>${amount}</li>
        )
      })
    }
    return (
      <div className="traveler_container">
        <p>{this.props.traveler.name}'s Expenses</p>
        <ul>
          {amounts}
        </ul>
        <strong>Total:</strong> ${this.props.traveler.total}
        {this.props.traveler.owes && <p className="money_owed">{this.props.traveler.name} {this.props.traveler.owes}</p>}
      </div>
    )
  }
}

export default Traveler