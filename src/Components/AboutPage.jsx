import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

class AboutPage extends Component {
  render() {
    let imgURL = './images/wolf-logo.png'
    return (
      <>
        <section>
          <h1 className="about-page-statement">About Find a Bro</h1>
          <main
            className="about-page-main"
            style={{
              backgroundImage: `url(${imgURL})`,
              paddingBottom: '20rem',
              backgroundSize: 'cover'
            }}
          >
            <h2>jibber jabber opening line</h2>
          </main>
        </section>
      </>
    )
  }
}

export default AboutPage
