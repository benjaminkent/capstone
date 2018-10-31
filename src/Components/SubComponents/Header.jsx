import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img
              src="./images/wolf-logo.png"
              className="logo-image"
              alt="wolf logo"
            />
            <div className="logo-words-container">
              <h1 className="logo-upper">Find a Bro</h1>
              <p className="logo-lower">Expand Your Wolfpack</p>
            </div>
          </div>
          <div className="directions">
            <a href="#" title="About Find a Bro" className="header-anchor">
              <i className="fas fa-question-circle" />
            </a>
            <a href="#" title="Edit Your Profile" className="header-anchor">
              <i className="fas fa-user" />
            </a>
          </div>
        </header>
      </>
    )
  }
}

export default Header
