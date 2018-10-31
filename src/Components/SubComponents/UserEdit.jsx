import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class UserEdit extends Component {
  render() {
    return (
      <>
        <div className="main-page-content">
          <section className="user-section">
            <div className="user-image-container">
              <div className="current-matches">
                <h3>Budding Brolationships</h3>
                <i className="fas fa-exclamation-circle notification" />
              </div>
              <div className="cancel-edit">
                <i class="fas fa-arrow-left cancel-edit-back" />
                <p>Cancel Edit</p>
              </div>
              <div className="edit-name">
                <input
                  placeholder="Enter First Name"
                  type="text"
                  name="display-name"
                />
              </div>
              <div className="edit-image-container">
                <p className="upload-image-text">Upload an Image, Brother</p>
                <img
                  className="edit-user-image"
                  src="./images/beard.png"
                  alt="user"
                />
              </div>
            </div>
          </section>

          <section className="about-section">
            <form className="about-section-container">
              <h2 className="about-user">About You</h2>
              <p className="about-user-info">
                Answer a few questions about yourself
              </p>
              <div className="about-underline" />
              <fieldset className="about-questions">
                <p className="question">What is your favorite drink?</p>
                <div className="edit-answers">
                  <label>whiskey</label>
                  <input
                    className="radio"
                    type="radio"
                    name="drink"
                    value="whiskey"
                  />
                  <label>beer</label>
                  <input
                    className="radio"
                    type="radio"
                    name="drink"
                    value="beer"
                  />
                  <label>wine</label>
                  <input
                    className="radio"
                    type="radio"
                    name="drink"
                    value="wine"
                  />
                  <label>other</label>
                  <input
                    className="radio"
                    type="radio"
                    name="drink"
                    value="other"
                  />
                  <label>non-drinker</label>
                  <input
                    className="radio"
                    type="radio"
                    name="drink"
                    value="non-drinker"
                  />
                </div>
              </fieldset>
              <article className="about-questions">
                <p className="question">What do you smoke?</p>
                <div className="edit-answers">
                  <label>cigarettes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="smoke"
                    value="cigarettes"
                  />
                  <label>cigars</label>
                  <input
                    className="radio"
                    type="radio"
                    name="smoke"
                    value="cigars"
                  />
                  <label>vape</label>
                  <input
                    className="radio"
                    type="radio"
                    name="smoke"
                    value="vape"
                  />
                  <label>other</label>
                  <input
                    className="radio"
                    type="radio"
                    name="smoke"
                    value="other"
                  />
                  <label>non-smoker</label>
                  <input
                    className="radio"
                    type="radio"
                    name="smoke"
                    value="non-smoker"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">How do you shave?</p>
                <div className="edit-answers">
                  <label>safety razor</label>
                  <input
                    className="radio"
                    type="radio"
                    name="shave"
                    value="safety razor"
                  />
                  <label>straight razor</label>
                  <input
                    className="radio"
                    type="radio"
                    name="shave"
                    value="straight razor"
                  />
                  <label>regular ass razor</label>
                  <input
                    className="radio"
                    type="radio"
                    name="shave"
                    value="regular ass razor"
                  />
                  <label>other</label>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you workout?</p>
                <div className="edit-answers">
                  <label>often</label>
                  <input
                    className="radio"
                    type="radio"
                    name="workout"
                    value="often"
                  />
                  <label>sometimes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="workout"
                    value="sometimes"
                  />
                  <label>never</label>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you have kids?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="kids"
                    value="yes"
                  />
                  <label>no</label>
                  <input
                    className="radio"
                    type="radio"
                    name="kids"
                    value="no"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you have pets?</p>
                <div className="edit-answers">
                  <label>dog</label>
                  <input
                    className="radio"
                    type="radio"
                    name="pets"
                    value="dog"
                  />
                  <label>cat</label>
                  <input
                    className="radio"
                    type="radio"
                    name="pets"
                    value="cat"
                  />
                  <label>lizard</label>
                  <input
                    className="radio"
                    type="radio"
                    name="pets"
                    value="lizard"
                  />
                  <label>other</label>
                  <input
                    className="radio"
                    type="radio"
                    name="pets"
                    value="other"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you like guns?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="guns"
                    value="yes"
                  />
                  <label>no</label>
                  <input
                    className="radio"
                    type="radio"
                    name="guns"
                    value="no"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Are you single?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="single"
                    value="yes"
                  />
                  <label>no</label>
                  <input
                    className="radio"
                    type="radio"
                    name="single"
                    value="no"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you play video games?</p>
                <div className="edit-answers">
                  <label>often</label>
                  <input
                    className="radio"
                    type="radio"
                    name="video games"
                    value="often"
                  />
                  <label>sometimes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="video games"
                    value="sometimes"
                  />
                  <label>never</label>
                  <input
                    className="radio"
                    type="radio"
                    name="video games"
                    value="never"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you play board games?</p>
                <div className="edit-answers">
                  <label>often</label>
                  <input
                    className="radio"
                    type="radio"
                    name="board games"
                    value="often"
                  />
                  <label>sometimes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="board games"
                    value="sometimes"
                  />
                  <label>never</label>
                  <input
                    className="radio"
                    type="radio"
                    name="board games"
                    value="never"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you like sports?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="sports"
                    value="yes"
                  />
                  <label>no</label>
                  <input
                    className="radio"
                    type="radio"
                    name="sports"
                    value="no"
                  />
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you like outdoor activities?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input
                    className="radio"
                    type="radio"
                    name="outdoor activities"
                    value="yes"
                  />
                  <label>no</label>
                  <input
                    className="radio"
                    type="radio"
                    name="outdoor activities"
                    value="no"
                  />
                </div>
              </article>
            </form>
          </section>

          <section className="humor-section">
            <div className="meme-section-container">
              <h2 className="about-user">Sense of Humor</h2>
              <p className="about-user-info">Pick your 5 favorite memes</p>
              <div className="about-underline" />
              <div className="meme-image-container">
                <img className="meme" src="./images/vampire.jpg" alt="meme" />
                <img
                  className="meme"
                  src="./images/always-sunny.jpg"
                  alt="meme"
                />
                <img
                  className="meme"
                  src="./images/bank-account.jpg"
                  alt="meme"
                />
                <img
                  className="meme"
                  src="./images/google-loser.png"
                  alt="meme"
                />
                <img className="meme" src="./images/break-up.jpg" alt="meme" />
                <img className="meme" src="./images/gamer.jpg" alt="meme" />
                <img className="meme" src="./images/oreo.jpg" alt="meme" />
                <img className="meme" src="./images/password.jpg" alt="meme" />
                <img className="meme" src="./images/sandwich.jpg" alt="meme" />
                <img
                  className="meme"
                  src="./images/stonehenge.jpg"
                  alt="meme"
                />
              </div>
            </div>
            <div>
              <button className="submit">Submit Profile</button>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default UserEdit
