import React, { Component } from 'react'

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
          <i class="fas fa-question-circle directions" />
          <i className="fas fa-user directions" />
        </header>
      </>
    )
  }
}

export default Header
