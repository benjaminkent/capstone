import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

class AboutPage extends Component {
  render() {
    return (
      <>
        <section>
          <h1 className="about-page-statement">About Find a Bro</h1>
          <main>
            <h2>jibber jabber opening line</h2>
          </main>
        </section>
      </>
    )
  }
}

export default AboutPage
