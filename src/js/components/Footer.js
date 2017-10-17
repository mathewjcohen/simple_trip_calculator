import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Footer extends Component{

  render(){
    return(
      <div id="footer">
        <div className="container">
          <div className="footer_social">
            <a href="http://www.mathewcohen.com" title="My Own Personal Something" target="_blank"><i className="fa fa-fort-awesome"></i></a>
            <a href="http://twitter.com/matjcohen" title="Tweet me on twitter" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="http://twitter.com/matjcohen" title="Connect with me on LinkedIn" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="http://twitter.com/matjcohen" title="Fork me on GitHub" target="_blank"><i className="fa fa-github"></i></a>
          </div>
          <div className="copyright">
            &copy; 2017 Mathew Cohen
          </div>
        </div>
      </div>
    )
  }
}

export default Footer