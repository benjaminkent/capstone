import React, { Component } from 'react'

import MainPage from './SubComponents/MainPage'
import UserEdit from './SubComponents/UserEdit'

class Home extends Component {
  render() {
    return (
      <>
        <MainPage />
        <UserEdit />
      </>
    )
  }
}

export default Home
