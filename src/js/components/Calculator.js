import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import AddTraveler from './AddTraveler'
import Travelers from './Travelers'

class Calculator extends Component{
  constructor(props){
    super(props)

    this.state = {
      travelers: [],
      totalCost: 0,
      evenSplit: 0
    }

    this.hideAddTraveler = false
  }

  handleAddTraveler(traveler){
    let array = [];    
    if(this.state.travelers.length > 0){
      array = this.state.travelers
    }
    array.push(traveler)
    let subTotal = this.state.totalCost + traveler.total
    this.setState({ travelers: array, totalCost: subTotal})
  }

  handleCalculation(){
    let mostPayedAmount = this.state.travelers[0].total
    let mostPayedName = this.state.travelers[0].name
    this.state.travelers.forEach((traveler) => {
      if(traveler.total > mostPayedAmount){
        mostPayedAmount = traveler.total
        mostPayedName = traveler.name
      }
    })
    let split = Number((this.state.totalCost / this.state.travelers.length).toFixed(2));
    let travelersAddOwed = this.state.travelers.map((traveler) => {
      if(traveler.name !== mostPayedName){
        traveler.owes = "owes " + mostPayedName + " $" + Number(split - traveler.total).toFixed(2) 
      }
      return traveler
    })
    this.setState({evenSplit: split})
    this.hideAddTraveler = true
    this.forceUpdate()
  }

  onReset(){
    this.setState({
      travelers: [],
      totalCost: 0,
      evenSplit: 0
    })
    this.hideAddTraveler = false
  }

  render(){
    return (
      <div>
        {this.state.totalCost > 0 && <div id="calc_function">
          <h3>Total Cost of Trip: {this.state.totalCost}</h3>
          {!this.state.evenSplit > 0 && <button className="btn" onClick={this.handleCalculation.bind(this)}>Calcluate Shared Cost</button>}
          {this.state.evenSplit > 0 && <h3>Evenly split {this.state.travelers.length} ways: {this.state.evenSplit}</h3>}
          {this.state.evenSplit > 0 && <button onClick={this.onReset.bind(this)} className="btn">Calculate Another Trip</button>}
        </div>}
        <div id="calc_wrap">
          {!this.hideAddTraveler && <AddTraveler allTravelers={this.state.travelers} onAddTraveler={this.handleAddTraveler.bind(this)} />}
          <Travelers travelers={this.state.travelers} />
        </div>
      </div>
    )
  }
}

export default Calculator