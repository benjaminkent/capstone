import React, { Component } from 'react'

class MainPage extends Component {
  render() {
    return (
      <>
        <section>
          <div className="user-image-container">
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
          </div>
        </section>

        <section>
          <div className="about-section-container">
            <h2 className="about-user">About Ben</h2>
            <div className="about-underline" />
            <article className="about-questions">
              <p>What do you like to drink?</p>
              <p>Whiskey, Beer, Wine</p>
            </article>
            <article className="about-questions">
              <p>Do you smoke?</p>
              <p>Sometimes</p>
            </article>
            <article className="about-questions">
              <p>What do you smoke?</p>
              <p>Cigars</p>
            </article>
            <article className="about-questions">
              <p>How do you shave?</p>
              <p>Safety Razor</p>
            </article>
            <article className="about-questions">
              <p>Do you workout?</p>
              <p>Often</p>
            </article>
            <article className="about-questions">
              <p>Do you have kids?</p>
              <p>No</p>
            </article>
            <article className="about-questions">
              <p>Do you have pets?</p>
              <p>Dog</p>
            </article>
            <article className="about-questions">
              <p>Do you like guns?</p>
              <p>Yes</p>
            </article>
            <article className="about-questions">
              <p>Are you single?</p>
              <p>No</p>
            </article>
            <article className="about-questions">
              <p>Do you play video games?</p>
              <p>Sometimes</p>
            </article>
            <article className="about-questions">
              <p>Do you play board games?</p>
              <p>No</p>
            </article>
            <article className="about-questions">
              <p>Do you like sports?</p>
              <p>Yes</p>
            </article>
            <article className="about-questions">
              <p>Do you like outdoor activities?</p>
              <p>Yes</p>
            </article>
          </div>
        </section>

        <section>
          <div className="meme-section-container">
            <h2 className="about-user">Sense of Humor</h2>
            <div className="about-underline" />
            <img className="meme" src="./images/vampire.jpg" alt="meme" />
            <img className="meme" src="./images/always-sunny.jpg" alt="meme" />
            <img className="meme" src="./images/bank-account.jpg" alt="meme" />
            <img className="meme" src="./images/break-up.jpg" alt="meme" />
            <img className="meme" src="./images/gamer.jpg" alt="meme" />
            <img className="meme" src="./images/google-loser.png" alt="meme" />
            <img className="meme" src="./images/oreo.jpg" alt="meme" />
            <img className="meme" src="./images/password.jpg" alt="meme" />
            <img className="meme" src="./images/sandwich.jpg" alt="meme" />
            <img className="meme" src="./images/stonehenge.jpg" alt="meme" />
          </div>
        </section>
      </>
    )
  }
}

export default MainPage
