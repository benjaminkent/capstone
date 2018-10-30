import React, { Component } from 'react'

class UserEdit extends Component {
  render() {
    return (
      <>
        <div className="main-page-content">
          <section className="user-section">
            <div className="user-image-container">
              <div className="current-matches">
                <h3>Budding Brolationships</h3>
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
                  className="user-image"
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
                <p>What do you like to drink?</p>
                <div className="edit-answers">
                  <label>whiskey</label>
                  <input type="radio" name="drink" value="whiskey" />
                  <label>beer</label>
                  <input type="radio" name="drink" value="beer" />
                  <label>wine</label>
                  <input type="radio" name="drink" value="wine" />
                  <label>other</label>
                  <input type="radio" name="drink" value="other" />
                  <label>non-drinker</label>
                  <input type="radio" name="drink" value="non-drinker" />
                </div>
              </fieldset>
              <article className="about-questions">
                <p>What do you smoke?</p>
                <div className="edit-answers">
                  <label>cigarettes</label>
                  <input type="radio" name="drink" value="cigarettes" />
                  <label>cigars</label>
                  <input type="radio" name="drink" value="cigars" />
                  <label>vape</label>
                  <input type="radio" name="drink" value="vape" />
                  <label>other</label>
                  <input type="radio" name="drink" value="other" />
                  <label>non-smoker</label>
                  <input type="radio" name="drink" value="non-smoker" />
                </div>
              </article>
              <article className="about-questions">
                <p>How do you shave?</p>
                <div className="edit-answers">
                  <label>safety razor</label>
                  <input type="radio" name="drink" value="safety razor" />
                  <label>straight razor</label>
                  <input type="radio" name="drink" value="straight razor" />
                  <label>regular ass razor</label>
                  <input type="radio" name="drink" value="regular ass razor" />
                  <label>other</label>
                </div>
              </article>
              <article className="about-questions">
                <p>Do you workout?</p>
                <div className="edit-answers">
                  <label>often</label>
                  <input type="radio" name="drink" value="often" />
                  <label>sometimes</label>
                  <input type="radio" name="drink" value="sometimes" />
                  <label>never</label>
                </div>
              </article>
              <article className="about-questions">
                <p>Do you have kids?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input type="radio" name="drink" value="yes" />
                  <label>no</label>
                  <input type="radio" name="drink" value="no" />
                </div>
              </article>
              <article className="about-questions">
                <p>Do you have pets?</p>
                <div className="edit-answers">
                  <label>dog</label>
                  <input type="radio" name="drink" value="dog" />
                  <label>cat</label>
                  <input type="radio" name="drink" value="cat" />
                  <label>lizard</label>
                  <input type="radio" name="drink" value="lizard" />
                  <label>other</label>
                  <input type="radio" name="drink" value="other" />
                </div>
              </article>
              <article className="about-questions">
                <p>Do you like guns?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input type="radio" name="drink" value="yes" />
                  <label>no</label>
                  <input type="radio" name="drink" value="no" />
                </div>
              </article>
              <article className="about-questions">
                <p>Are you single?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input type="radio" name="drink" value="yes" />
                  <label>no</label>
                  <input type="radio" name="drink" value="no" />
                </div>
              </article>
              <article className="about-questions">
                <p>Do you play video games?</p>
                <div className="edit-answers">
                  <label>often</label>
                  <input type="radio" name="drink" value="often" />
                  <label>sometimes</label>
                  <input type="radio" name="drink" value="sometimes" />
                  <label>never</label>
                  <input type="radio" name="drink" value="never" />
                </div>
              </article>
              <article className="about-questions">
                <p>Do you play board games?</p>
                <div className="edit-answers">
                  <label>often</label>
                  <input type="radio" name="drink" value="often" />
                  <label>sometimes</label>
                  <input type="radio" name="drink" value="sometimes" />
                  <label>never</label>
                  <input type="radio" name="drink" value="never" />
                </div>
              </article>
              <article className="about-questions">
                <p>Do you like sports?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input type="radio" name="drink" value="yes" />
                  <label>no</label>
                  <input type="radio" name="drink" value="no" />
                </div>
              </article>
              <article className="about-questions">
                <p>Do you like outdoor activities?</p>
                <div className="edit-answers">
                  <label>yes</label>
                  <input type="radio" name="drink" value="yes" />
                  <label>no</label>
                  <input type="radio" name="drink" value="no" />
                </div>
              </article>
            </form>
          </section>

          <section className="humor-section">
            <div className="meme-section-container">
              <h2 className="about-user">Sense of Humor</h2>
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
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default UserEdit
