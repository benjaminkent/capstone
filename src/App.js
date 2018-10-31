import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css'

import Header from './Components/SubComponents/Header'
import Footer from './Components/SubComponents/Footer'
import MainPage from './Components/MainPage'
import UserEdit from './Components/UserEdit'
import UserProfile from './Components/UserProfile'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/edit-profile" component={UserEdit} />
            <Route path="/your-profile" component={UserProfile} />
          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}

export default App
