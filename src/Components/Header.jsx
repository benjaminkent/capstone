import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="logo">
            <h1 className="logo-upper">Find a Bro</h1>
            <p className="logo-lower">Expand Your Wolfpack</p>
          </div>
          <i class="fas fa-question-circle directions" />
          <i className="fas fa-user directions" />
        </header>
      </>
    )
  }
}

export default Header
