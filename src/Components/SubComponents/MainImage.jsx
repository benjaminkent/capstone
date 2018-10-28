import React, { Component } from 'react'

class MainImage extends Component {
  render() {
    return (
      <>
        <section className="user-image-section">
          <div className="current-matches">
            <h3>Budding Brolationships</h3>
          </div>
          <div className="name">
            <p>Ben</p>
            <p>90% Match</p>
          </div>
          <div className="image-container">
            <i className="fas fa-arrow-left" />
            <img
              className="user-image"
              src="./images/user-image.jpg"
              alt="user"
            />
            <i className="fas fa-arrow-right" />
          </div>
          <div className="thumbs">
            <i className="fas fa-thumbs-down" />
            <i className="fas fa-thumbs-up" />
          </div>
        </section>
      </>
    )
  }
}

export default MainImage
