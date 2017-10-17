import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NameError from './NameError'
import AmountError from './AmountError'

class AddTraveler extends Component{
  constructor(props){
    super(props)

    this.traveler = {
      name: '',
      amounts: [],
      total: 0
    }
    this.displayAmounts = ''
    this.regExName = /^[a-zA-Z\s]{2,}$/;
    this.regExAmount = /^[0-9.]{1,}$/;
    this.nameErrorHidden = true
    this.amountErrorHidden = true

  }

  setName(e){
    if(!this.refs.name.value.match(this.regExName)){
      this.traveler.name = this.refs.name.value
      this.nameErrorHidden = false
    }else{
      this.traveler.name = this.refs.name.value
      this.nameErrorHidden = true
    }
    this.forceUpdate()
  }

  handleAddAmount(e){
    e.preventDefault();
    if(!this.refs.amount.value.match(this.regExAmount)){
      this.amountErrorHidden = false
    }else{
      let amnt = Number(parseFloat(this.refs.amount.value).toFixed(2))
      this.traveler.amounts.push(amnt)
      if(this.traveler.amounts.length > 1){
        this.displayAmounts += ', '
      }
      this.displayAmounts += '$' + amnt
      this.amountErrorHidden = true
      this.refs.amount.value = ''
      this.traveler.total = Number(this.traveler.amounts.reduce(function(sum, value){
        return sum + value
      }).toFixed(2))
    }
    this.forceUpdate()
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTraveler(this.traveler)
    this.resetInfo()
  }

  resetInfo(){
    this.traveler = {name: '', amounts: [], total: 0}
    this.displayAmounts = ''
    this.refs.name.value = ''
    this.refs.amount.value = ''
    this.forceUpdate()
  }

  render(){
    return (
      <div id="add_traveler">
        <fieldset>
          <legend>Add Expenses</legend>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h5>Name</h5>
            {!this.nameErrorHidden && <NameError />}
            <input onKeyUp={this.setName.bind(this)} ref="name" />
            <h5>Amounts</h5>
            {!this.amountErrorHidden && <AmountError />}
            <input ref="amount" />
            <button onClick={this.handleAddAmount.bind(this)} className="btn">Add Amount</button>
            <hr />
            <div className="display_current_data">
              <p>
                Name:<br />
                <span>{this.traveler.name}</span>
              </p>
              <p>
                Amounts:<br/>
                <span>{this.displayAmounts}</span>
              </p>
              <p>
                Total: <span>${this.traveler.total}</span>
              </p>
            </div>
            <hr />
            {this.traveler.name.length > 1 && <button type="submit" className="btn">Submit Expenses for {this.traveler.name}</button>}
          </form>          
        </fieldset>
      </div>
    )
  }
}

export default AddTraveler