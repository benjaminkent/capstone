import React, { Component } from 'react'

import Header from './SubComponents/Header'
import MainPage from './SubComponents/MainPage'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <MainPage />
      </>
    )
  }
}

export default Home
