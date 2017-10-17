import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

import '../css/style.css'

class Hello extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'))
