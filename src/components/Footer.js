import React, { Component } from "react"

class Footer extends Component {
  render() {
    const social = [
      {
        name: "facebook",
        url: "https://facebook.com",
        className: "fa fa-facebook",
      },
      {
        name: "linkedin",
        url: "https://linkedin.com",
        className: "fa fa-linkedin",
      },
    ]

    const networks = social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      )
    })

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Derek Etherton</li>
              <li>
                Modified from Tim Baker's{" "}
                <a
                  title="React Resume Template"
                  href="https://github.com/tbakerx/react-resume-template"
                >
                  React Resume Template
                </a>
                , design by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
