import React, { Component } from "react"

class About extends Component {
  render() {
    const bio = "Savvy is a pretty cool guy"
    const name = "Michelle Etherton"
    const street = "Kitchener St"
    const city = "Guelph"
    const state = "Ontario"
    const zip = "N1M 3M9"
    const email = "savvyplaceholder@gmail.com"

    return (
      <section id="about">
        <div className="row">
          <h2>About Savvy</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
