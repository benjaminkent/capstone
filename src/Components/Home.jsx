import React, { Component } from 'react'

import Header from './SubComponents/Header'
import MainPage from './SubComponents/MainPage'
import Footer from './SubComponents/Footer'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <MainPage />
        <Footer />
      </>
    )
  }
}

export default Home
