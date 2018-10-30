import React, { Component } from 'react'

import './App.css'

import Home from './Components/Home'
import Header from './Components/SubComponents/Header'
import Footer from './Components/SubComponents/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    )
  }
}

export default App
